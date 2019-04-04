import React, { Component } from "react";

import axios from "axios";

import StoreContent from "./StoreContent";
import FilterBar from "./FilterBar";

class Store extends Component {
  constructor(props) {
    super(props);

    this.state = {
      store: []
    };
  }

  componentDidMount() {
    axios
      .get("/stores.json")
      .then(data => {
        this.setState({
          store: data.data.stores[1]
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="main">
        <h1 className="main__header">{this.state.store.shop} Menu</h1>
        <FilterBar />

        <StoreContent store={this.state.store} />
      </div>
    );
  }
}

export default Store;
