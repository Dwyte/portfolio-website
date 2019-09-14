import React from "react";
import Project from "./Project";
import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px !important;
  padding-right: 0px !important;
`;

const ColSm = styled.div`
  padding: 5px !important;
`;

const ProjGrid = ({ projectGroups }) => {
  return (
    <Container className="container">
      {projectGroups.map(row => (
        <div key={projectGroups.indexOf(row)} className="row">
          {row.map(project => (
            <ColSm key={row.indexOf(project)} className="col-sm">
              <Project {...project} />
            </ColSm>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default ProjGrid;
