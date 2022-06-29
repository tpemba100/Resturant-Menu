import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes'



class Main extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }


  //When a card is clicked and "onDishSelect" is called,
    //it takes the selected dish in props and using this.setState(), 
    //it will insure that selectedDish equals that dish instead of null;   
    onDishSelect(dishId) {    
        this.setState({ 
            selectedDish: dishId
        });
    }


  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className ="container">
            <NavbarBrand href='/'>Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes}
            onClick={(dishId) => this.onDishSelect(dishId)} />
        <DishDetail dish={ this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
      </div>
    );
  }

  //MENU- calles Menu and passes the props (dish )to menu components & we are getting the dish id from onClick function
  //Dish Detail- calls it, filters thru each dish Id and makes sure it is equal to the dish Id of selected dish in Menu Component. 
}

  export default Main;

  