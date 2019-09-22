import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  margin-top: 50px;
  @media only screen and (max-width: 600px) {
    margin-top: 25px;
  }

  ${({ isLast }) =>
    isLast &&
    `
    margin-bottom: 50px;

    @media only screen and (max-width: 600px) {
      margin-bottom: 25px;
    }
  `}

  ${({ isDark }) =>
    isDark &&
    `
    background: rgb(25,25,25);
    padding: 50px 0px;
    color: white;
  `}
`;

const Section = ({ children, id, isLast, isDark }) => {
  return (
    <Sect id={id} isLast={isLast} isDark={isDark}>
      {children}
    </Sect>
  );
};

export default Section;
