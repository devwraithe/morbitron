import React from "react";
import "./index.scss";

const Section = ({ children, title }) => {
  return (
    <div className="section mb-14">
      <h3 className="section__title">{title}</h3>
      <div className="section__cards">{children}</div>
    </div>
  );
};

export default Section;
