import React from "react";
import styled from "styled-components";

const TechImg = styled.img`
  margin: 20px;
`;

const Tech = ({ img, width, title }) => {
  return (
    <span>
      <TechImg data-tip={title} src={img} width={width} />
    </span>
  );
};

export default Tech;
