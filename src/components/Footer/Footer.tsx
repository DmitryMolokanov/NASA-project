import React from "react";
import cls from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={cls.footerContainer}>
      <span className={cls.footerText}>NASA-project by Dmitry Molokanov</span>
    </div>
  );
};

export default Footer;
