import React, {Component} from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';

class Menu extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            selectedDish: null
        };  
    }


    //When a card is clicked and "onDishSelect" is called,
    //it takes the selected dish in props and using this.setState(), 
    //it will insure that selectedDish equals that dish instead of null;   
    onDishSelect(dish) {    
        this.setState({ 
            selectedDish: dish
        });
    }


   

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className ="col-12 col-md-5 m-6">
                    <Card onClick={() => this.onDishSelect(dish)}>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                            
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className='container'>
                <div className="row">
                    {menu}
                </div>

                <DishDetail dish={this.state.selectedDish} />
                
            </div>
        );

    }

}
export default Menu;