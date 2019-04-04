import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Switch, Route } from "react-router-dom";



import Store1 from "./components/Store1";
import Store2 from "./components/Store2";
import Store3 from "./components/Store3";
import Store4 from "./components/Store4";
import NavBar from "./components/NavBar";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/store1" component={Store1}/>
          <Route path="/store2" component={Store2}/>
          <Route path="/store3" component={Store3}/>
          <Route path="/store4" component={Store4}/>
        </Switch>
      </div>
    );
  }
}

export default App;
