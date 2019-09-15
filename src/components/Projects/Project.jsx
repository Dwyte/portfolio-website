import React from "react";
import styled from "styled-components";

const Media = styled.div`
  color: white;
  width: 100%;
  background: rgba(25, 25, 25, 1);
  padding: 12px;
  border-radius: 12px;
  line-height: 15px;
  font-size: 12px;

  img {
    border-radius: 12px;
    margin-right: 5px!important;

    @media only screen and (max-width: 600px) {
      width: 56px;
      margin-right: 2px!important;
    }
  }

  h6 {
    font-weight: bold;
    margin: 0px;
  }
`;

const Project = ({ title, logo, description }) => {
  return (
    <Media className="media text-left">
      <img src={logo} width={64} alt="..." />
      <div className="media-body">
        <h6 className="mt-0">{title}</h6>
        {description}
      </div>
    </Media>
  );
};

export default Project;
