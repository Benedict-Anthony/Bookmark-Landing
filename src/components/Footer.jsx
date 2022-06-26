import React from "react";
import Button from "../shared/Button";
import "../UI/footer.css";

import logo from "../images/logo.svg";
import { FaFacebook, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <>
      <footer className="grid footer_1">
        <section className="container footer">
          <p>35,000+ already joined </p>
          <h3>
            Stay up-to-date with what <br /> we’re doing{" "}
          </h3>

          <form className="form flex">
            <input type="text" />
            <Button
              bgColor={"hsl(0, 94%, 66%)"}
              textColor={"#fff"}
              border={"2px solid hsl(0, 94%, 66%)"}
            >
              {"Contact Us"}
            </Button>
          </form>
        </section>
      </footer>
      <div className="footer_2">
        <nav className="footer__nav flex container">
          <div className="links flex">
            <div className="logo">
              <img src={logo} alt="BookMark" />
            </div>
            <ul className="footer_links flex">
              <li>
                <a href="/">Features</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <div className="social__icons flex">
            <FaFacebook />
            <FaTwitter />
          </div>
        </nav>
      </div>
    </>
  );
}

export default Footer;
