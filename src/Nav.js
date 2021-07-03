import React, { useEffect, useState } from "react";
import "./Nav.css";
import companyLogo from "./logo.png";
import avatar from "./avalogo.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={companyLogo} alt="Company Logo" />
      <img className="nav_avatar" src={avatar} alt="Avatar Logo" />
    </div>
  );
}

export default Nav;