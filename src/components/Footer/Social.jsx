import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: rgba(25, 25, 25, 1);
  margin: 0px 25px;
`;

const Social = ({ icon, link }) => {
  return (
    <Anchor href={link}>
      <i class={icon}></i>
    </Anchor>
  );
};

export default Social;
