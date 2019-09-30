import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin-bottom: 0px;
  max-width: 720px;
  margin: auto;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const About = () => {
  return (
    <P>
      {/* A student & developer studying computer science at the Cavite State University */}
    </P>
  );
};

export default About;
