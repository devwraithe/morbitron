// import components
import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

// bottomnav component
const BottomNav = () => {
  return (
    <nav className="bottomNav sticky w-full px-20 py-7 bottom-0">
      <div className="bottomNav__wrapper flex flex-row justify-center px-10 py-6">
        <div className="bottomNav__links">
          <Link to="/">Movies</Link>
          <Link to="/series/" className="px-10">
            TV Series
          </Link>
          <Link to="/trending">Trending</Link>
        </div>
      </div>
    </nav>
  );
};

// export component
export default BottomNav;
