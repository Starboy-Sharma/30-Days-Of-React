import React from "react";

const ProfileCard = (props) => {

    return (
      <section className="profile-card">
    
        <div className="profile-image"></div>
    
        <h1> {props.username} </h1>
    
        <p> {props.designation}, {props.location} </p>
    
        <h3> Skills </h3>
    
        <div className="skills">
    
          {props.skills.map((skill, index) => <span key={index}> {skill} </span>)}
    
        </div>
    
        <p className="timeline">{props.joined}</p>
    
      </section>
    );
};

export default ProfileCard;