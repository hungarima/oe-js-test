import React, { Component } from "react";
import {
 
  CardDeck,
 
} from "reactstrap";
import ProductContent from "./ProductContent";

class StoreContent extends Component {
  
  state = {
    products: []
  }

  componentWillReceiveProps(props) {
    this.setState({
      products: props.store.products
    })

  }

  productContentRow() {
    return this.state.products.map(function(product, i) {
      return <ProductContent product ={product} index ={i} />
    })
  }

  render() {
    return (
      <div className="main__content">
        <CardDeck className="main__deck">{ this.productContentRow() }</CardDeck>
      </div>
    );
  }
}

export default StoreContent;
