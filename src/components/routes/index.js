import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "../auth/login";
import Dashboard from '../app/dashboard'
export default class Routes extends Component {
  render() {
    return (
      <div>
         <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
       
      </div>
    )
  }
}
