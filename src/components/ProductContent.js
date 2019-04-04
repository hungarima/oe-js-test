import React, { Component } from "react";
import { Card, CardTitle, CardText, CardBody } from "reactstrap";

class ProductContent extends Component {
  render() {
    return (
      <Card>
        <CardBody className="card__body">
          <CardTitle>MT-0{this.props.product.id}</CardTitle>
          <CardTitle className="card__name">
            {this.props.product.name}
          </CardTitle>
          <hr className="card__line" />
          <CardText className="card__topping">
            <span className="card__text">Topping:</span>
            <p>{this.props.product.toppings}</p>
          </CardText>
          <CardText className="card__price">
            ${this.props.product.price}
          </CardText>
        </CardBody>
      </Card>
    );
  }
}

export default ProductContent;
