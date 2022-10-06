import styled from "styled-components";
import React from "react";

const Anchor = styled.a`
  color: ${({ theme }) => theme.fontColor};
  font-size: 1.25rem;
  margin: 0px 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 20px;
    margin: 0px 20px;
  }

  transition: 200ms;
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
