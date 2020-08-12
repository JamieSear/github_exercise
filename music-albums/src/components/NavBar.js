import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Music">Music</NavLink>
      <NavLink to="/Films">Films</NavLink>
    </nav>
  );
};
export default NavBar;
