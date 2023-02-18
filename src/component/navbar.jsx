import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./styles/navstyle.scss";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="header">
        <div className="logo noselect">Movie List</div>
        <ul className="nav-wrap">
          <li className="nav-itemm">
            <NavLink className="navlink" to="/">Home</NavLink>
          </li>
          <li className="nav-itemm">
            <NavLink className="navlink" to="/Login">Login</NavLink>
          </li>
          <li className="nav-itemm">
            <NavLink className="navlink" to="/Signup">SignUp</NavLink>
          </li>
        </ul>
        
      </nav>
    );
  }
}

export default Navbar;
