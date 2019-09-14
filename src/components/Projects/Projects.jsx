import React from "react";
import sample from "../../assets/sampleLogo.png";
import HeaderDesc from "../common/HeaderDesc";
import Section from "../common/Section";
import ProjGrid from "./ProjGrid";

const projects = [
  {
    title: "ProjectApp #1",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #2",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #3",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #4",
    logo: sample,
    type: "WebApp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  }
];

const Projects = () => {
  function sliceArrayIntoGroups(arr, size) {
    var step = 0,
      sliceArr = [],
      len = arr.length;
    while (step < len) {
      sliceArr.push(arr.slice(step, (step += size)));
    }

    return sliceArr;
  }

  return (
    <Section id="projects">
      <HeaderDesc>
        <h2>Projects</h2>
        <p>I have developed and worked on</p>
      </HeaderDesc>

      <ProjGrid projectGroups={sliceArrayIntoGroups(projects, 2)} />
    </Section>
  );
};

export default Projects;
