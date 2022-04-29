import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer flex flex-row justify-between px-14">
        <div className="brand"></div>
        <div className="footer__links">
          <a href="github" className="footer__anchor">
            github
          </a>
          <a href="github" className="footer__anchor">
            twitter
          </a>
          <a href="github" className="footer__anchor">
            linkedin
          </a>
          <a href="github" className="footer__anchor">
            instagram
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
