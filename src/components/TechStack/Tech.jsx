import React from "react";
import styled from "styled-components";

const TechImg = styled.img`
  margin: 20px;
`;

const Tech = ({ img, width }) => {
  return <TechImg src={img} width={width} />;
};

export default Tech;
