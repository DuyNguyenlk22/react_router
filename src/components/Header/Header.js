import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Header extends Component {
  routes = [
    { path: "/", name: "Home" },
    { path: "/login", name: "Login" },
    { path: "/LifeCycle", name: "LifeCycle Page" },
  ];
  renderNavLink = () => {
    return this.routes.map((item, index) => {
      return (
        <NavLink key={index} className='btn btn-info mx-5' to={item.path}>
          {item.name}
        </NavLink>
      );
    });
  };
  render() {
    return (
      <div>
        {/* <NavLink className='btn btn-info mx-5' to='/'>
          Home
        </NavLink>
        <NavLink className='btn btn-info mx-5' to='/login'>
          Login
        </NavLink>
        <NavLink className='btn btn-info mx-5' to='/LifeCycle'>
          LifeCycle Page
        </NavLink> */}
        {this.renderNavLink()}
      </div>
    );
  }
}
