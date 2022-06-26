import React from "react";
import HeaderTitles from "../shared/HeaderTitles";
import Button from "../shared/Button";

import chrome from "../images/chrome.svg";
import firefox from "../images/firefox.svg";
import opera from "../images/opera.svg";
import dots from "../images/dots.svg";

import "../UI/install.css";

function Install() {
  return (
    <>
      <HeaderTitles
        heading={"Download The Extension"}
        text={
          "We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize. "
        }
      />

      <section className="container grid install">
        <article className="card">
          <img src={chrome} alt="chrome" />
          <h3>Add to Chrome</h3>
          <p>Minimun version 62</p>
          <img src={dots} alt="dotes" className="dots" />
          <Button
            bgColor={" hsl(231, 69%, 60%)"}
            textColor={"#fff"}
            border={"2px solid  hsl(231, 69%, 60%)"}
          >
            {"Add & Install Extension"}
          </Button>
        </article>
        <article className="card">
          <img src={firefox} alt="chrome" />
          <h3>Add to Firefox</h3>
          <p>Minimun version 55</p>
          <img src={dots} alt="dotes" className="dots" />
          <Button
            bgColor={" hsl(231, 69%, 60%)"}
            textColor={"#fff"}
            border={"2px solid  hsl(231, 69%, 60%)"}
          >
            {"Add & Install Extension"}
          </Button>
        </article>
        <article className="card">
          <img src={opera} alt="chrome" />
          <h3>Add to Opera</h3>
          <p>Minimun version 46</p>
          <img src={dots} alt="dotes" className="dots" />
          <Button
            bgColor={" hsl(231, 69%, 60%)"}
            textColor={"#fff"}
            border={"2px solid  hsl(231, 69%, 60%)"}
          >
            {"Add & Install Extension"}
          </Button>
        </article>
      </section>
    </>
  );
}

export default Install;
