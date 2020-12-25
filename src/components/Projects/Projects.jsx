import React, { useState } from "react";
import _ from "lodash";

import underDevImg from "../../assets/projects/development.jpg";
import getProjects from "../../services/projects";

import HeaderDesc from "../common/HeaderDesc";
import Container from "../common/Container";
import Section from "../common/Section";

import Pagination from "../Pagination";
import ProjGrid from "./ProjGrid";
import ProjNav from "./ProjNav";

const projects = getProjects();

const Projects = () => {
  const [filterIndex, setFilter] = useState(0);
  const filters = [
    { icon: "fas fa-star-of-life", label: "all", filterMethod: null },
    {
      icon: "fab fa-python",
      label: "python",
      filterMethod: ({ type }) => type === "python3",
    },
    {
      icon: "fas fa-globe",
      label: "web",
      filterMethod: ({ type }) => type === "webapp",
    },
    {
      icon: "fas fa-mobile",
      label: "mobile",
      filterMethod: ({ type }) => type === "mobile",
    },
  ];
  const [activePage, setActivePage] = useState(0);

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
      title: "To Be Developed",
      logo: underDevImg,
      type: "python3",
      description:
        "More applications to be developed, worked on and released soon.",
    });
  }

  // Paginate Projects
  const filteredProjectsCopy = [...filteredProjects];
  const paginatedProjects = [];
  while (filteredProjectsCopy.length !== 0) {
    paginatedProjects.push(filteredProjectsCopy.splice(0, 4));
  }

  return (
    <Section isDark={true}>
      <Container id="showcase">
        <HeaderDesc isDark={true}>
          <h2>Showcase</h2>
          <p>Projects that I have developed or worked on.</p>
        </HeaderDesc>

        <ProjNav
          filters={filters}
          filterIndex={filterIndex}
          setFilter={setFilter}
          resetPagination={() => setActivePage(0)}
        />

        <ProjGrid
          projectGroups={sliceArrayIntoGroups(paginatedProjects[activePage], 2)}
        />

        <Pagination
          totalItems={filteredProjects.length}
          itemsPerPage={4}
          activePage={activePage}
          setActivePage={setActivePage}
        />
      </Container>
    </Section>
  );
};

export default Projects;
