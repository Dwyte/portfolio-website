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
    margin-top: -12px;
    color: ${({ isDark }) =>
      isDark ? `white!important;` : `rgba(75,75,75,0.75)`};
  }
`;

const HeaderDesc = ({ children, isDark }) => {
  return <Div isDark={isDark}>{children}</Div>;
};

export default HeaderDesc;
