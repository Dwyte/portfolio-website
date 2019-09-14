import React from "react";
import Project from "./Project";
import sample from "../../assets/sampleLogo.png";
import HeaderDesc from "../common/HeaderDesc";
import Section from "../common/Section";

const projects = [
  {
    title: "ProjectApp #1",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Explicabo pariatur quasi delectus quia saepe 
    omnis. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #2",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Explicabo pariatur quasi delectus quia saepe 
    omnis. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #3",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Explicabo pariatur quasi delectus quia saepe 
    omnis. Molestiae ut aliquid asperiores optio et.`
  }
];

const Projects = () => {
  return (
    <Section id="projects">
      <HeaderDesc>
        <h2>Projects</h2>
        <p>I have developed and worked on</p>
      </HeaderDesc>
      {projects.map(project => (
        <Project {...project} />
      ))}
    </Section>
  );
};

export default Projects;
