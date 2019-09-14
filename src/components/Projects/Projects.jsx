import React, { useState } from "react";
import HeaderDesc from "../common/HeaderDesc";
import Section from "../common/Section";
import ProjGrid from "./ProjGrid";
import ProjNav from "./ProjNav";
import underDevImg from "../../assets/projects/development.jpg"
import _ from "lodash";
import getProjects from "../../services/projects";

const projects = getProjects()

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
  const filteredProjects = _.filter(
    projects,
    filters[filterIndex].filterMethod
  );

  if (filteredProjects.length % 2 !== 0) {
    filteredProjects.push({
      title: "🚧 Under Development 🚧",
      logo: underDevImg,
      type: "python3",
      description:
        "More Useful Applications to be released, developed and worked upon soon!"
    });
  }

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
