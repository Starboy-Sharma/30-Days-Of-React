// index.js
import React, { useState } from "react";
import ReactDOM from "react-dom";

const Season = () => {
  const getSeason = (currentMonth) => {
    const seasons = {
      w: "Winter",
      sp: "Spring",
      m: "Monsoon",
      sm: "Summer",
    };

    let body = document.querySelector('body');

    // Winter season
    if (currentMonth == 12 || currentMonth == 1) {
      body.classList.add(seasons['w']);
      return seasons['w'];
    }

    if (currentMonth >= 2 && currentMonth <= 3) {
      body.classList.add(seasons['sp']);
      return seasons['sp'];
    }

    if (currentMonth >=4 && currentMonth <= 6) {
      body.classList.add(seasons['sm']);
      return seasons['sm'];
    }

    body.classList.add(seasons['m']);
    return seasons['m'];

  };



  const currentMonth = new Date().getMonth() + 1;

  // 👇️ Get Name of Current Month
  const nameOfMonth = new Date().toLocaleString(
    'default', {month: 'long'}
  );
  
  return <section className="season">
    <h2> Current Season is: {getSeason(currentMonth)} </h2>
    <p> Current Month is: {nameOfMonth} </p>
  </section>;
};

const Time = () => {

  const getCurrentTime = () => {
    var dt = new Date();
    var h =  dt.getHours(), m = dt.getMinutes();
    var _time = (h > 12) ? (h-12 + ':' + m +' PM') : (h + ':' + m +' AM');

    return _time;
  }

  let today = new Date();
  let curHr = today.getHours();

  return (
    <section className="time">
      <h2> Current time is: {getCurrentTime()} </h2>
      <p> { curHr < 12 ? "Good Morning 🌄 Pankaj Sharma"
            : curHr < 18 ?  "Good Afternoon ☀️ Pankaj Sharma"
            : "Good Evening 🌇"
      } </p>
    </section>
  );
};

const App = () => (
  <div className="container">

    <h1> 30 Days of React </h1>

    <div className="app">

      <Season />
      <Time />

    </div>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
