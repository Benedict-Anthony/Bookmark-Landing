import React from "react";

function HeaderTitles({ heading, text }) {
  return (
    <section className="container title" style={headingStyles}>
      <h1 style={titleStyle}>{heading}</h1>
      <p style={ParaStyles}>{text}</p>
    </section>
  );
}

const headingStyles = {
  textAlign: "center",
  paddingBottom: "30px",
};

const ParaStyles = {
  color: "hsl(229, 8%, 60%)",
  fontSize: "18px",
};

const titleStyle = {
  color: "hsl(229, 31%, 21%)",
  fontSize: "22px",
  fontWeight: "500",
};

export default HeaderTitles;
