import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    this.toggleBar = this.toggleBar.bind(this);
  }

  toggleBar() {
    
  }

  render() {
    return (
      <React.Fragment>
        <Button className="sidebar__dropdown" onClick={this.toggleBar}>
          ☰
        </Button>

        <div className="sidebar">
          <Link to="/" className="sidebar__header">
            Milk Tea Store
          </Link>

          <Link to="/store1" className="sidebar__link">
            Store 1
          </Link>
          <Link to="/store2" className="sidebar__link">
            Store 2
          </Link>
          <Link to="/store3" className="sidebar__link">
            Store 3
          </Link>
          <Link to="/store4" className="sidebar__link">
            Store 4
          </Link>
        </div>
        
      </React.Fragment>
    );
  }
}

export default NavBar;
