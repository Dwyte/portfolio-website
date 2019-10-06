import React, { useState } from "react";
import HeaderDesc from "../_Styled/HeaderDesc";
import Section from "../_Styled/Section";
import ProjGrid from "./ProjGrid";
import ProjNav from "./ProjNav";
import underDevImg from "../../assets/projects/development.jpg";
import _ from "lodash";
import getProjects from "../../services/projects";
import Container from "../_Styled/Container";

const projects = getProjects();

const Projects = () => {
  const [filterIndex, setFilter] = useState(0);
  const filters = [
    { icon: "fas fa-star-of-life", label: "All of 'em", filterMethod: null },
    {
      icon: "fab fa-python",
      label: "Python",
      filterMethod: ({ type }) => type === "python3"
    },
    {
      icon: "fas fa-globe",
      label: "Web",
      filterMethod: ({ type }) => type === "webapp"
    },
    {
      icon: "fas fa-mobile",
      label: "Mobile",
      filterMethod: ({ type }) => type === "mobile"
    }
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
      title: "Under Development 🚧",
      logo: underDevImg,
      type: "python3",
      description:
        "More Useful Applications to be released, developed and worked upon soon!"
    });
  }

  return (
    <Section id="projects" isDark={true}>
      <Container>
        <HeaderDesc isDark={true}>
          <h2>Projects</h2>
          <p>I have developed and worked on</p>
        </HeaderDesc>

        <ProjNav
          filters={filters}
          filterIndex={filterIndex}
          setFilter={setFilter}
        />

        <ProjGrid projectGroups={sliceArrayIntoGroups(filteredProjects, 2)} />
      </Container>
    </Section>
  );
};

export default Projects;
