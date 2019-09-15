import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  margin-top: 50px;

  @media only screen and (max-width: 600px) {
    margin-top: 25px;
  }
`;

const Section = ({ children, id }) => {
  return <Sect id={id}>{children}</Sect>;
};

export default Section;
