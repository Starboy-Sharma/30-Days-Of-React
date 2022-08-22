import React from "react";
import ReactDOM from "react-dom";

// import Components
import ProfileCard from "./Components/ProfileCard";
import HexaColor from "./Components/HexaColor";
import Technologies from "./Components/Technologies";
import Subscribe  from "./Components/Subscribe";

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

const app = (
  <div className="app">
    <ProfileCard
      username="Pankaj Sharma"
      designation="Software Engineer"
      location="India"
      skills={skills}
      joined="Joined on Sep, 2018"
    />
    <Technologies />
    <Subscribe />
    <HexaColor color={hexaColor()} />
    <HexaColor color={hexaColor()} />
    <HexaColor color={hexaColor()} />
    <HexaColor color={hexaColor()} />
  </div>
);

ReactDOM.render(app, root);
