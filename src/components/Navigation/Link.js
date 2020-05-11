import React from "react";
import { NavLink } from "react-dom";

const Link = (props) => {
  return <NavLink>{props.children}</NavLink>;
};

export default Link;
