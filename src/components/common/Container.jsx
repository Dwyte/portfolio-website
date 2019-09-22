import React from "react";
import styled from "styled-components";

const Cont = styled.div`
  max-width: 720px;

  display: inline-block;
  text-align: center;

  div {
    width: 100%;
  }
`;

const Container = ({ children }) => {
  return <Cont>{children}</Cont>;
};

export default Container;
