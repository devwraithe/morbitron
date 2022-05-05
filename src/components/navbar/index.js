// import external components
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// navbar component
const Navbar = () => {
  return (
    <nav className="nav fixed w-full flex flex-row justify-between">
      <div className="nav__brand">.moovies</div>
      <div className="nav__links block text-right">
        <Link to="/">Home</Link>
        <Link to="/movies" className="pl-7">
          All Movies
        </Link>
      </div>
    </nav>
  );
};

// export component
export default Navbar;
