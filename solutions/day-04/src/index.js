import React from "react";
import ReactDOM from "react-dom";

// import media
import htmlImg from "./images/html.png";
import cssImg from "./images/css.png";
import reactImg from "./images/react.png";

import "./App.css";

const root = document.querySelector("#root");


// Hexadecimal color generator
const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {

  const bgColor = hexaColor();

  return (
    <section className="hex-container">
      <div className="hexcolor" style={{ backgroundColor: `${bgColor}` }}>{bgColor}</div>
    </section>
  )
}


const Technologies = () => (
  <section className="tech-container">
    <h2> Frontend Technologies </h2>
    <div className="technologies">
      <img src={htmlImg} alt="HTML" />
      <img src={cssImg} alt="css" />
      <img src={reactImg} alt="react" />
    </div>
  </section>
);

const Subscribe = () => (
  <section className="subscriber-container">
    <h1> Subscribe </h1>
    <p> Sign up with your email address to receive news and updates. </p>

    <div className="form">
      <input type="text" className="input-text" placeholder="First Name" />
      <input type="text" className="input-text" placeholder="Last Name" />
      <input type="email" className="input-text" placeholder="Email" />
    </div>
    
    <button className="btn"> Subscribe </button>
  </section>
);

const ProfileCard = () => (
  <section className="profile-card">

    <div className="profile-image"></div>

    <h1> Pankaj Sharma </h1>

    <p> Software Engineer, India </p>

    <h3> Skills </h3>

    <div className="skills">

      <span> HTML </span>
      <span> CSS </span>
      <span> JS </span>
      <span> Express </span>
      <span> NodeJS </span>
      <span> MongoDB </span>
      <span> MySql </span>
      <span> Postgres Sql </span>
      <span> Socket.io </span>
      <span> Microservices </span>
      <span> Rest API </span>
      <span> Materialize </span>
      <span> AngularJS </span>
      <span> React </span>

    </div>

    <p className="timeline">
      Joined on Sep, 2018
    </p>

  </section>
);

const app = (
  <div className="app">
    <Technologies />
    <Subscribe />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <HexaColor />
    <ProfileCard />
  </div>
);

ReactDOM.render(app, root);
