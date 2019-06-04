import React from "react";
import { NavLink } from "react-router-dom";



class Navbar extends React.Component {
  render() {
    return (
      <div id="mainNavbar">
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/people" activeClassName="active">People </NavLink>
        <NavLink to="/create" activeClassName="active">Create a Person</NavLink>
      </div>
    );
  }
}

export default Navbar;
