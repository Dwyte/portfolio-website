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
        <Media className="media text-left p-3">
          <img src={logo} width={64} alt="..." />
          <div className="media-body">
            <h6>{title}</h6>
            {description}
          </div>
        </Media>
      </Card>
    </Anchor>
  );
};

export default Project;
