import React from "react";
import reactjs from "../../assets/techstack/reactjs.png";
import nodejs from "../../assets/techstack/nodejs.png";
import mongodb from "../../assets/techstack/mongodb.png";
import unity from "../../assets/techstack/unity.png";
import python from "../../assets/techstack/python.png";
import Tech from "./Tech";

const techStack = [
  { img: nodejs, width: 75 },
  { img: reactjs, width: 75 },
  { img: mongodb, width: 75 },
  { img: python, width: 75 },
  { img: unity, width: 75 }
];

const TechStack = () => {
  return (
    <React.Fragment>
      <h2>Technology Stack</h2>

      {techStack.map(tech => <Tech {...tech}/>)}
    </React.Fragment>
  );
};

export default TechStack;
