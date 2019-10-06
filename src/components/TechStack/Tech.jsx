import React from "react";
import styled from "styled-components";
import Anchor from "../_Styled/Anchor";

const TechImg = styled.img`
  margin: 20px;

  transition: 250ms;

  :hover{
    transform: translateY(-7.5px)
  }
`;

const Tech = ({ img, title, url }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" href={url}>
      <TechImg data-tip={title} src={img} width={100} />
    </Anchor>
  );
};

export default Tech;
