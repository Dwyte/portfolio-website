import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: rgba(25, 25, 25, 1);
  margin: 0px 25px;
  font-size: 24px;

  :hover {
    color: ${({color}) => color}
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
