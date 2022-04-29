// import external components
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// navbar component
const Navbar = () => {
  return (
    <nav className="nav fixed w-full flex flex-row justify-between px-20 py-7 z-50">
      <div className="nav__brand">brand</div>
      <div className="nav__links">
        <Link to="/">Movies</Link>
        <Link to="/series/" className="px-10">
          TV Series
        </Link>
        <Link to="/trending">Trending</Link>
      </div>
    </nav>
  );
};

// export component
export default Navbar;
