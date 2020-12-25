import React from "react";
import styled from "styled-components";
import Anchor from "../common/Anchor";

const TechCard = styled.div`
  color: ${({ theme }) => theme.fontColor};
  display: inline-block;

  img {
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25));
  }

  :hover {
    color: ${({ theme }) => theme.accentColor};
  }

  p {
    margin-bottom: 0 !important;
  }
`;

const Tech = ({ img, title, url }) => {
  return (
    <Anchor target="_blank" rel="noopener noreferrer" href={url}>
      <TechCard className="mx-4 p-2">
        <img alt={title} className="mb-3 p-1" src={img} width={75} />
        <br />
        <p>{title}</p>
      </TechCard>
    </Anchor>
  );
};

export default Tech;
