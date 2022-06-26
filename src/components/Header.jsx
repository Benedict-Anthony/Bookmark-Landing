import React, { useState } from "react";
import Button from "../shared/Button";
import logo from "../images/logo.svg";
import "../UI/header.css";
import { FaFacebook, FaTwitter, FaTimes, FaBars } from "react-icons/fa";

function Header() {
  const [toggleBar, setToggleBar] = useState(false);

  function toggleBarmenu() {
    setToggleBar(!toggleBar);
  }
  return (
    <header>
      <div className="container">
        <nav className="navigation flex">
          <a href="/" className="logo">
            <img src={logo} alt="BoorkMark" />
          </a>
          <ul className={`navigation__items ${toggleBar && "toggle"}`}>
            <div className="flex">
              <li className="navigation__list">
                <a href="#home">Features</a>
              </li>
              <li className="navigation__list">
                <a href="#tags">Pricing</a>
              </li>
              <li className="navigation__list">
                <a href="#home">Contact</a>
              </li>
              <div className="btn">
                <Button
                  bgColor={"hsl(0, 94%, 66%)"}
                  textColor={"#fff"}
                  border={"2px solid hsl(0, 94%, 66%) "}
                >
                  {"Login"}
                </Button>

                <FaTimes className="close" onClick={toggleBarmenu} />
              </div>

              <div className="social_icons">
                <FaFacebook />
                <FaTwitter />
              </div>
            </div>
          </ul>
          <FaBars className="open-nav" onClick={toggleBarmenu} />
        </nav>
      </div>
    </header>
  );
}

export default Header;
