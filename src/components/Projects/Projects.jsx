import React from "react";
import Project from "./Project";
import sample from "../../assets/sampleLogo.png";
import styled from "styled-components"

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

const Div = styled.div`
  margin: 50px 0px;
  h2 {
    margin-bottom: 25px;
  }
`

const Projects = () => {
  return (
    <Div>
      <h2>Projects</h2>
      {projects.map(project => (
        <Project {...project} />
      ))}
    </Div>
  );
};

export default Projects;
