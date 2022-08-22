import React from 'react';

  const HexaColor = (props) => {
  
    const bgColor = props.color;
  
    return (
      <section className="hex-container">
        <div className="hexcolor" style={{ backgroundColor: `${bgColor}` }}>{bgColor}</div>
      </section>
    )
  }

  export default HexaColor;