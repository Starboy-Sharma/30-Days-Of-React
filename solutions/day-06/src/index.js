import React from "react";
import ReactDOM from "react-dom";


import "./App.css";

const root = document.querySelector("#root");

const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
];

let worldTotalPopulation = tenHighestPopulation.find(el => el.country === 'World');
worldTotalPopulation = worldTotalPopulation.population;

const getPopulationPercentage = (population) => {

  let populationPercentage = (population / worldTotalPopulation ) * 100;

  populationPercentage = populationPercentage.toFixed(2);

  return populationPercentage;
}

const Bar = ({bar}) => {

  const { country, population } = bar;
  const percentage = getPopulationPercentage(population);

  const graphStyle = {
    width: percentage + '%',
  };

  return (
    <div className="bar-container">

      <span className="country">{country}</span>

      <div className="bar" style={graphStyle}>
          {/* {percentage} */}
      </div>

      <span className="population">{population}</span>      

    </div>
  )

}

const BarGraph = ({ tenHighestPopulation }) => {

  console.log(tenHighestPopulation);

  return (
    <section className="country-graph">

      {tenHighestPopulation.map(el =>  <Bar bar={el} /> )}

    </section>
  );
}


const Header = () => (
  <header>
    <h1> 30 Days of React </h1>

    <h3> World Population </h3>

    <p> Ten most populated countries </p>
  </header>
);


const app = (
  <div className="app">
   
    <Header />

    <BarGraph tenHighestPopulation={tenHighestPopulation} />

  </div>
);

ReactDOM.render(app, root);
