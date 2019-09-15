import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: rgba(25, 25, 25, 1);
  font-size: 24px;
  margin: 0px 25px;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin: 0px 20px;
  }

  :hover {
    color: ${({ color }) => color};
  }
`;

const Social = ({ icon, link, color }) => {
  return (
    <Anchor href={link} color={color} target="_blank" rel="noopener noreferrer">
      <i className={icon}></i>
    </Anchor>
  );
};

export default Social;
