import React from 'react';
import Router from 'react-router';
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
import auth from '../../stores/app-auth'; // TODO / USE DISPATCHER & ACTIONS
import Login from '../auth/app-login';
import AuthStore from '../../stores/app-auth.js';
var Link = Router.Link;


var Header = React.createClass({
  getInitialState: function () {
    return AuthStore.getState();
  },
  setStateOnAuth: function (loggedIn) {
    this.setState(AuthStore.getState());
  },
  componentWillMount: function () {
    AuthStore.authOnChangeHeader(this.setStateOnAuth);
  },
  render: function () {
    var loginOrOut = this.state.loggedIn ?
      <Link to="logout">Log out</Link> :
      <Link to="login">Sign in</Link>;
    return (
      <div>
        <h1 className="breadcrumbs"><a href="http://www.github.com/przeor/react-router-flux-starter-kit">React Router Flux Starter Kit</a> / przeor Auth Flow with Well Orginized Flux Architecture </h1>
        <ul className="nav nav-tabs">
          <li>{loginOrOut}</li>
          <li><Link to="about">About</Link></li>
          <li><Link to="dashboard">Schedule Dashboard</Link></li>
          <li><Link to="es6-test">ES6 Test</Link></li>
        </ul>
        <br/>
      </div>
    );
  }
});

module.exports = Header;
