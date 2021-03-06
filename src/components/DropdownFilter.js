import React, { Component } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class DropdownFilter extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  
  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="filter__option">
        <DropdownToggle caret>Name</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={this.props.onSortNA}>Name (Asc)</DropdownItem>
          <DropdownItem onClick={this.props.onSortND}>Name (Dsc)</DropdownItem>
          <DropdownItem onClick={this.props.onSortPA}>Price (Asc)</DropdownItem>
          <DropdownItem onClick={this.props.onSortPD}>Price (Dsc)</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}

export default DropdownFilter;
