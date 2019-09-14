import React from "react";
import styled from "styled-components";

const Sect = styled.section`
  margin-top: 50px;
`;

const Section = ({ children, id }) => {
  return <Sect id={id}>{children}</Sect>;
};

export default Section;
