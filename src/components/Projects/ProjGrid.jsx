import styled from "styled-components";
import React from "react";

import Project from "./Project";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacing / 2}rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const Cell = styled.div``;

const ProjGrid = ({ projectGroups }) => {
  return (
    <Container>
      {projectGroups.map((row, rowIndex) =>
        row.map((project, projectIndex) => (
          <Cell key={projectIndex}>
            <Project {...project} />
          </Cell>
        ))
      )}
    </Container>
  );
};

export default ProjGrid;
