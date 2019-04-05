import React, { Component } from "react";

import axios from "axios";

import StoreContent from "./StoreContent";
import FilterBar from "./FilterBar";

class Store1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: []
    };

    this.onSortNA = this.onSortNA.bind(this);
    this.onSortND = this.onSortND.bind(this);
    this.onSortPA = this.onSortPA.bind(this);
    this.onSortPD = this.onSortPD.bind(this);
    this.compareValues = this.compareValues.bind(this);
  }

  componentDidMount() {
    axios
      .get("/stores.json")
      .then(data => {
        this.setState({
          store: data.data.stores[0],
          products: data.data.stores[0].products
        });
      })
      .catch(err => console.error(err));
  }

  compareValues(key, order = "asc") {
    return function(a, b) {
      if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
        return 0;
      }

      const varA = typeof a[key] === "string" ? a[key].toUpperCase() : a[key];
      const varB = typeof b[key] === "string" ? b[key].toUpperCase() : b[key];

      let comparison = 0;
      if (varA > varB) {
        comparison = 1;
      } else if (varA < varB) {
        comparison = -1;
      }
      return order == "desc" ? comparison * -1 : comparison;
    };
  }

  onSortNA() {
    const newProducts = this.state.products.sort(this.compareValues("name"));
    this.setState({
      products: newProducts
    });
  }

  onSortND() {
    const newProducts = this.state.products.sort(
      this.compareValues("name", "desc")
    );
    this.setState({
      products: newProducts
    });
  }

  onSortPA() {
    const newProducts = this.state.products.sort(
      this.compareValues("price")
    );
    this.setState({
      products: newProducts
    });
  }

  onSortPD() {
    const newProducts = this.state.products.sort(
      this.compareValues("price", "desc")
    );
    this.setState({
      products: newProducts
    });
  }

  render() {
    return (
      <div className="main">
        <h1 className="main__header">{this.state.store.shop} Menu</h1>
        <FilterBar onSortNA={this.onSortNA} onSortND={this.onSortND} onSortPA={this.onSortPA} onSortPD={this.onSortPD}/>

        <StoreContent store={this.state.store} />
      </div>
    );
  }
}

export default Store1;
