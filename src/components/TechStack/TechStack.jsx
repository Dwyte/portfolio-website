import React from "react";

import HeaderDesc from "../common/HeaderDesc";
import Section from "../common/Section";
import Tech from "./Tech";

import reactjs from "../../assets/techstack/reactjs.png";
import mongodb from "../../assets/techstack/mongodb.png";
import nodejs from "../../assets/techstack/nodejs.png";
import python from "../../assets/techstack/python.png";

const techStack = [
  { title: "Node.js", img: nodejs, url: "http://nodejs.org" },
  { title: "React.js", img: reactjs, url: "http://reactjs.org" },
  { title: "MongoDB", img: mongodb, url: "http://mongodb.com" },
  { title: "Python", img: python, url: "http://python.org" },
];

const TechStack = () => {
  return (
    <Section id="techstack">
      <HeaderDesc>
        <h2> Technology Stack</h2>
        <p>Technologies that I can effectively work with.</p>
      </HeaderDesc>

      <div className="mt-4">
        {techStack.map((tech) => (
          <Tech key={techStack.indexOf(tech)} {...tech} />
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
