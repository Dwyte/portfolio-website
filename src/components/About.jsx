import React from "react";
import styled from "styled-components";

const P = styled.p`
  margin-bottom: 0px;
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const About = () => {
  return (
    <P>
      🚧 Still a work in progress.. 🚧
    </P>
  );
};

export default About;
