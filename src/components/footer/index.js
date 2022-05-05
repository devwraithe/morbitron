import React from "react";
import "./index.scss";

const Footer = () => {
  return (
    <>
      <footer className="footer flex flex-row justify-center px-14 mt-20">
        <div className="footer__links text-center" align="center">
          <a href="github" className="footer__anchor">
            github
          </a>
          <a href="github" className="footer__anchor px-7">
            twitter
          </a>
          <a href="github" className="footer__anchor">
            linkedin
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
