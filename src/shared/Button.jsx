import React, { useState } from "react";
import PropTypes from "prop-types";
import "../UI/button.css";
function Button({ bgColor, textColor, border, type, children }) {
  const [isHover, setIsHover] = useState(false);

  const hover = () => setIsHover(true);
  const rmHover = () => setIsHover(false);
  const buttonStyles = {
    background: !isHover ? bgColor : textColor,
    color: !isHover ? textColor : bgColor,
    border: border,
  };
  return (
    <button
      style={buttonStyles}
      type={type}
      onMouseEnter={hover}
      onMouseLeave={rmHover}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  bgColor: "hsl(231, 69%, 60%)",
  textColor: "#fff",
  text: "Button",
  border: "2px solid #000",
  type: "submit",
};

Button.propTypes = {
  text: PropTypes.node,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
};

export default Button;
