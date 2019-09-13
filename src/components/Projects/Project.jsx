import React from "react";
import styled from "styled-components";

const Media = styled.div`
  margin-bottom: 25px;
  
  h5 {
    font-weight: bold;
    margin: 0px;
  }
`


const Project = ({title, logo, description}) => {
  return (
    <Media className="media text-left">
      <img src={logo} width={64} className="mr-3" alt="..." />
      <div className="media-body">
        <h5 className="mt-0">{title}</h5>
        {description}
      </div>
    </Media>
  );
};

export default Project;
