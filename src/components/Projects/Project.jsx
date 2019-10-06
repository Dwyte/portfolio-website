import React from "react";
import styled from "styled-components";
import Anchor from "../_Styled/Anchor";

const Container = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  background: #000;
  padding: 12px;
  border-radius: 12px;
  line-height: 15px;
  font-size: 12px;
  box-shadow: 1px 0px 5px -1px #000;
  cursor: pointer;
`;

const Media = styled(Container)`
  img {
    border-radius: 12px;
    margin-right: 5px !important;

    @media only screen and (max-width: 600px) {
      width: 56px;
      margin-right: 3px !important;
    }
  }

  h6 {
    font-weight: bold;
    margin: 0px;
  }

  transition-duration: 250ms;

  :hover {
    transform: scale3d(1.025, 1.025, 1.025);
  }
`;

const Project = ({ title, logo, description, projectUrl }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" href={projectUrl}>
      <Media className="media text-left">
        <img src={logo} width={64} alt="..." />
        <div className="media-body">
          <h6 className="mt-0">{title}</h6>
          {description}
        </div>
      </Media>
    </Anchor>
  );
};

export default Project;
