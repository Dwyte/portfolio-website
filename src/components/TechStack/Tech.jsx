import React from "react";
import styled from "styled-components";
import Anchor from "../_Styled/Anchor";
import Badge from "../_Styled/Badge";

const TechBadge = styled(Badge)`
  display: inline-block;

  @media only screen and (max-width: 600px) {
    img {
      width: 75px;
    }

    h6 {
      font-size: 14px;
    }
  }
`;

const Tech = ({ img, title, url }) => {
  return (
    <TechBadge bgColor="rgb(25,25,25)" className="m-2 p-3">
      <Anchor target="_blank" rel="noopener noreferrer" href={url}>
        <img alt={title} className="mb-3 p-1" src={img} width={75} />
      </Anchor>
      <br />
      <h6>{title}</h6>
    </TechBadge>
  );
};

export default Tech;
