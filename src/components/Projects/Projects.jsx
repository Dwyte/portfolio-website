import React, { useState } from "react";
import sample from "../../assets/sampleLogo.png";
import HeaderDesc from "../common/HeaderDesc";
import Section from "../common/Section";
import ProjGrid from "./ProjGrid";
import ProjNav from "./ProjNav";
import _ from "lodash";

const projects = [
  {
    title: "ProjectApp #1",
    logo: sample,
    type: "webapp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #2",
    logo: sample,
    type: "python3",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #3",
    logo: sample,
    type: "mobile",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  },
  {
    title: "ProjectApp #4",
    logo: sample,
    type: "webapp",
    description: `Veniam deserunt quaerat voluptas fugiat maiores 
    cupiditate et id. Molestiae ut aliquid asperiores optio et.`
  }
];

const Projects = () => {
  const [filterIndex, setFilter] = useState(0);
  const filters = [
    { label: "All of 'em", filterMethod: null },
    { label: "Python3", filterMethod: ({ type }) => type === "python3" },
    { label: "WebApps", filterMethod: ({ type }) => type === "webapp" },
    { label: "MobileApps", filterMethod: ({ type }) => type === "mobile" }
  ];

  function sliceArrayIntoGroups(arr, size) {
    var step = 0,
      sliceArr = [],
      len = arr.length;
    while (step < len) {
      sliceArr.push(arr.slice(step, (step += size)));
    }

    return sliceArr;
  }

  // Filter Projects
  const filteredProjects = _.filter(projects, filters[filterIndex].filterMethod)

  return (
    <Section id="projects">
      <HeaderDesc>
        <h2>Projects</h2>
        <p>I have developed and worked on</p>
      </HeaderDesc>

      <ProjNav
        filters={filters}
        filterIndex={filterIndex}
        setFilter={setFilter}
      />

      <ProjGrid projectGroups={sliceArrayIntoGroups(filteredProjects, 2)} />
    </Section>
  );
};

export default Projects;
