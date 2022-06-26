import React from "react";
import Button from "../shared/Button";
import hero from "../images/hero.svg";
import "../UI/landing.css";

function Landing() {
  return (
    <section className="container" id="home">
      <div className="flex landing">
        <div className="landing__info">
          <h2>
            A Simple Bookmark <br /> Manager
          </h2>
          <p>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free
          </p>

          <div className="flex landing-flex">
            <Button
              bgColor={"#fff"}
              textColor={"hsl(231, 69%, 60%)"}
              border={" 2px solid hsl(231, 69%, 60%)"}
            >
              {"Get it on Chrome"}
            </Button>

            <Button
              bgColor={"#fff"}
              border={"2px solid hsl(229, 31%, 21%)"}
              textColor={"hsl(229, 31%, 21%)"}
            >
              {"Get it on Firefox"}
            </Button>
          </div>
        </div>

        <div className="landing__image">
          <img src={hero} alt="" />
          <div className="pseudo-img"></div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
