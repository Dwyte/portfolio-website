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
        <div className="row">
          {row.map(project => (
            <ColSm className="col-sm">
              <Project {...project} />
            </ColSm>
          ))}
        </div>
      ))}
    </Container>
  );
};

export default ProjGrid;
