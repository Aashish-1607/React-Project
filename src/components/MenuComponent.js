import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from './DishDetailsComponent.js';
class Menu extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    } 
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish});
  }  

  renderDish(dish) {
    /* if (dish != null)
      return (
        <div>
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle><b>{dish.name}</b></CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
        <div><DishDetail dish={dish} /></div>
        </div>
      );*/
    if (dish != null)
      return (
        <div><DishDetail dish={dish} /></div>
      );
       
    else
      return <div />;
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
        return (
          <div className="col-12 col-md-5 m-1">
            <Card key={dish.id}
              onClick={() => this.onDishSelect(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle><b>{dish.name}</b></CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        );
    });
      
    return (
      <div className="container">
        <div className="row">{menu}</div>
        <div className="row">
          <div >
            {this.renderDish(this.state.selectedDish)}
          </div>
        </div>
      </div>
    );
  }
}
export default Menu;        