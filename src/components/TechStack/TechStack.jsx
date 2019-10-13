import React from "react";
import Tech from "./Tech";
import Section from "../_Styled/Section";
import HeaderDesc from "../_Styled/HeaderDesc";
import reactjs from "../../assets/techstack/reactjs.png";
import nodejs from "../../assets/techstack/nodejs.png";
import mongodb from "../../assets/techstack/mongodb.png";
import unity from "../../assets/techstack/unity.png";
import python from "../../assets/techstack/python.png";
import truffle from "../../assets/techstack/truffle.png";
import redux from "../../assets/techstack/redux.png";
import solidity from "../../assets/techstack/solidity.png";
import graphql from "../../assets/techstack/graphql.png";

const techStack = [
  { title: "Node.js", img: nodejs, url: "http://nodejs.org" },
  { title: "React.js", img: reactjs, url: "http://reactjs.org" },
  { title: "MongoDB", img: mongodb, url: "http://mongodb.com" },
  { title: "Python", img: python, url: "http://python.org" },
  { title: "Unity3d", img: unity, url: "http://unity.com" }
];

const roadmap = [
  { title: "Truffle", img: truffle, url: "http://trufflesuite.com" },
  { title: "Solidity", img: solidity, url: "http://ethereum.org" },
  { title: "GraphQL", img: graphql, url: "http://graphql.org" },
  { title: "Redux", img: redux, url: "http://react-redux.js.org" }
];

const TechStack = () => {
  return (
    <Section id="techstack">
      <HeaderDesc>
        <h2> Technology Stack</h2>
        <p>Frameworks/Languages I'm familiar working with</p>
      </HeaderDesc>

      <div className="my-3">
        {techStack.map(tech => (
          <Tech key={techStack.indexOf(tech)} {...tech} />
        ))}
      </div>

      <HeaderDesc>
        <h2>Roadmap</h2>
        <p>Technologies I'm interested learning in the future</p>
      </HeaderDesc>

      <div className="mt-3">
        {roadmap.map(tech => (
          <Tech key={roadmap.indexOf(tech)} {...tech} />
        ))}
      </div>
    </Section>
  );
};

export default TechStack;
