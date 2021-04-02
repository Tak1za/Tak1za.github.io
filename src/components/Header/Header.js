import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <div className="Header">
      <Link to="/projects">MY PROJECTS</Link>
      <Link to="/me">ABOUT ME</Link>
    </div>
  );
}

export default Header;
