import styled from "styled-components";
import React from "react";

import Anchor from "../common/Anchor";
import Card from "../common/Card";

const Media = styled.div`
  img {
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-right: 0.5rem;
  }
`;

const Project = ({ title, logo, description, projectUrl }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" href={projectUrl}>
      <Card>
        <Media className="d-flex align-items-center p-3">
          <div className="flex-shrink-0">
          <img src={logo} width={64} alt="..." />
          </div>
          <div className="flex-grow-1 text-start ms-3">
            <h6>{title}</h6>
            {description}
          </div>
          
        </Media>
      </Card>
    </Anchor>
  );
};

export default Project;
