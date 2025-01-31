import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Router } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <News pageSize={5} category="general" />
          <Switch>
            <Route path="/">
              <News pageSize={5} category="general" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
