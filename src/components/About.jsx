import React from "react";
import styled from "styled-components";

const P = styled.p`
  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const About = () => {
  return (
    <P>
      I'm a self-taught developer, started out developing games about 3 years
      ago. Currently a first year computer science student, learning emerging
      web technologies with interests on finance, cryptography and distributed
      ledger technology.
    </P>
  );
};

export default About;
