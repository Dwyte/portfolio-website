import React from "react";
import reactjs from "../../assets/techstack/reactjs.png";
import nodejs from "../../assets/techstack/nodejs.png";
import mongodb from "../../assets/techstack/mongodb.png";
import unity from "../../assets/techstack/unity.png";
import python from "../../assets/techstack/python.png";
import Tech from "./Tech";
import Section from "../common/Section";
import HeaderDesc from "../common/HeaderDesc";

const techStack = [
  { img: nodejs, width: 75 },
  { img: reactjs, width: 75 },
  { img: mongodb, width: 75 },
  { img: python, width: 75 },
  { img: unity, width: 75 }
];

const TechStack = () => {
  return (
    <Section id="techstack">
      <HeaderDesc>
        <h2>Technology Stack</h2>
        <p>Frameworks/Languages I'm familiar working with</p>
      </HeaderDesc>

      {techStack.map(tech => (
        <Tech {...tech} />
      ))}
    </Section>
  );
};

export default TechStack;
