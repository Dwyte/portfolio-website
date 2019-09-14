import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: relative;
  margin-bottom: 25px;

  h1,
  h2,
  h3,
  h4 {
    font-weight: bold;
  }

  p {
    position: absolute;
    left: 0px;
    right: 0px;

    margin-left: auto;
    margin-right: auto;
    z-index: -1;
    margin-top: -18px;
    color: rgba(75, 75, 75, 0.75);
  }
`;

const HeaderDesc = ({ children }) => {
  return <Div>{children}</Div>;
};

export default HeaderDesc;
