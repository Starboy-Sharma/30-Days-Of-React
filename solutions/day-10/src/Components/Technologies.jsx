import React from 'react';

// import media
import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import reactImg from "../images/react.png";

export default function Technologies() {
  return (
    <section className="tech-container">
    <h2> Frontend Technologies </h2>
    <div className="technologies">
      <img src={htmlImg} alt="HTML" />
      <img src={cssImg} alt="css" />
      <img src={reactImg} alt="react" />
    </div>
  </section>
  )
}
