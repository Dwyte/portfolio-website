import React from "react";
import ReactTooltip from "react-tooltip";
import Tech from "./Tech";
import Section from "../common/Section";
import HeaderDesc from "../common/HeaderDesc";
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
  { title: "Node.js", img: nodejs, width: 100 },
  { title: "React.js", img: reactjs, width: 100 },
  { title: "MongoDB", img: mongodb, width: 100 },
  { title: "Python", img: python, width: 100 },
  { title: "Unity3d", img: unity, width: 100 }
];

const roadmap = [
  { title: "Truffle Suite", img: truffle, width: 100 },
  { title: "Solidity", img: solidity, width: 100 },
  { title: "GraphQL", img: graphql, width: 100 },
  { title: "Redux", img: redux, width: 100 }
];

const TechStack = () => {
  return (
    <Section id="techstack">
      <ReactTooltip place="bottom" type="dark" effect="solid" />

      <HeaderDesc>
        <h2> Technology Stack</h2>
        <p>Frameworks/Languages I'm familiar working with</p>
      </HeaderDesc>

      {techStack.map(tech => (
        <Tech key={techStack.indexOf(tech)} {...tech} />
      ))}

      <HeaderDesc>
        <h2>Roadmap</h2>
        <p>Technologies I'm interested learning in the future</p>
      </HeaderDesc>

      {roadmap.map(tech => (
        <Tech key={roadmap.indexOf(tech)} {...tech} />
      ))}
    </Section>
  );
};

export default TechStack;
