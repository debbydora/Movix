import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="socials">
        <img
          src={require("../../../assets/images/facebok.svg").default}
          alt="facebook"
        />
        <img
          src={require("../../../assets/images/instagram.svg").default}
          alt="instagram"
        />
        <img
          src={require("../../../assets/images/twitter.svg").default}
          alt="twitter"
        />
        <img
          src={require("../../../assets/images/previewIcon.svg").default}
          alt="preview"
        />
      </div>
      <div className="links">
        <p>Conditions of use</p>
        <p>Privacy & policy</p>
        <p>Press Room</p>
      </div>
      <div>
        <p className="copy"> &copy; 2021 Movix</p>
      </div>
    </div>
  );
};

export default Footer;
