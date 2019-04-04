import React, { Component } from "react";
import { Button } from "reactstrap";
import DropdownFilter from "./DropdownFilter";
class FilterBar extends Component {
  render() {
    return (
      <div className="filter__bar">
        <Button className="filter__button">Filter</Button>
        <div className="filter__right">
          <span className="filter__text">Sort By</span>
          <DropdownFilter />
        </div>
      </div>
    );
  }
}

export default FilterBar;
