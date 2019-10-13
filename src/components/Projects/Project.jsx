import React from "react";
import styled from "styled-components";
import Anchor from "../_Styled/Anchor";
import Badge from "../_Styled/Badge";

const Media = styled(Badge)`
  img {
    border-radius: 12px;
    margin-right: 5px !important;

    @media only screen and (max-width: 600px) {
      width: 56px;
      margin-right: 3px !important;
    }
  }
`;

const Project = ({ title, logo, description, projectUrl }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" href={projectUrl}>
      <Media className="media text-left p-3">
        <img src={logo} width={64} alt="..." />
        <div className="media-body">
          <h6>{title}</h6>
          {description}
        </div>
      </Media>
    </Anchor>
  );
};

export default Project;
