import React, { useState } from "react";
import ReactDOM from "react-dom";

// import media
import htmlImg from "./images/html.png";
import cssImg from "./images/css.png";
import reactImg from "./images/react.png";

import { countriesData } from "./data/countries";

import "./App.css";

const root = document.querySelector("#root");


// DATA STORE
const skills = [
   'HTML',
   'CSS', 
   'JS', 
   'Express', 
   'NodeJS', 
   'MongoDB', 
   'MySql', 
   'Postgres', 
   'Socket',
   'Microservices', 
   'Rest', 
   'Materialize', 
   'AngularJS', 
   'React'
];

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

const HexaColor = (props) => {

  const bgColor = props.color;

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


function getRandomCountry() {
  return countriesData[Math.floor(Math.random() * countriesData.length)];
}

const Country = () => {

  const [country, setCountry] = useState(getRandomCountry())

  console.log(getRandomCountry());

  const handleSelectCountry = () => {

    let newCountry = getRandomCountry();

    setCountry(newCountry);
  };

  return (
    <section className="random-country">
      

      <div className="country-card">

        <img src={country.flag} alt="Country" />

        <p> <b>Capital: </b> {country.capital} </p>
        <p> <b>Language: </b> {country.languages} </p>
        <p> <b>Population: </b> {country.population} </p>
        <p> <b>Currency: </b> {country.currency} </p>

      </div>

      <button onClick={handleSelectCountry}> Select Country </button>
    </section>
  )

}

const ProfileCard = (props) => {


  const [theme, setTheme] = useState('light-theme');
  const [toggleTheme, setToggleTheme] = useState(false);

  const handleToggleThemeChange = () => {

    console.log('setting toggle theme');

    setToggleTheme(!toggleTheme);

    if (toggleTheme) {
      setTheme('light-theme');
    } else {
      setTheme('dark-theme');
    }

    return true;
  }

  return (
    <section className={`profile-card ${theme}`}>
  
      <div className="profile-image"></div>
  
      <h1> {props.username} </h1>
  
      <p> {props.designation}, {props.location} </p>
  
      <h3> Skills </h3>
  
      <div className="skills">
  
        {skills.map((skill, index) => <span key={index}> {skill} </span>)}
  
      </div>
  
      <p className="timeline">{props.joined}</p>

      <button onClick={handleToggleThemeChange}> Toggle Theme </button>
  
    </section>
  );
}

const app = (
  <div className="app">
    {/* <Technologies />
    <Subscribe />
    <HexaColor color={hexaColor()} />
    <HexaColor color={hexaColor()} />
    <HexaColor color={hexaColor()} />
    <HexaColor color={hexaColor()} /> */}

    <Country />

    <ProfileCard
      username="Pankaj Sharma"
      designation="Software Engineer"
      location="India"
      skills={skills}
      joined="Joined on Sep, 2018"
    />
  </div>
);

ReactDOM.render(app, root);
