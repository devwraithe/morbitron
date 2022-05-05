import React from "react";
import Navbar from "../navbar";
import "./index.scss";

const PageHeader = ({ title, subtitle }) => {
  return (
    <header className="page_header text-center">
      <Navbar />
      <div className="page_header__wrapper">
        <h1 className="page_header__title font-bold">{title}</h1>
        <p className="page_header__subtitle font-medium">{subtitle}</p>
      </div>
    </header>
  );
};

export default PageHeader;
