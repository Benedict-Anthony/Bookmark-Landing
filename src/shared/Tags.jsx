import React from "react";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";

import "../UI/tags.css";

function Tags({ image, headingTitle, text }) {
  return (
    <AnimatePresence>
      <motion.section
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 0.5 }}
        className="container grid tags"
      >
        <div className="tags__img">
          <img src={image} alt="" />
          <div className="pseudo-img"></div>
        </div>

        <div className="tags__info">
          <h2>{headingTitle}</h2>
          <p>{text}</p>
          <Button
            bgColor={"hsl(231, 69%, 60%)"}
            text={"#fff"}
            border={"1px solid hsl(231, 69%, 60%)"}
            width={"25%"}
          >
            {"More info"}
          </Button>
        </div>
      </motion.section>
    </AnimatePresence>
  );
}

export default Tags;
