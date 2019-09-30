import React from "react";
import logo from "../assets/logo-shadow.png";
import HeaderDesc from "./common/HeaderDesc";
import Section from "./common/Section";
import styled from "styled-components";

const Img = styled.img`
  margin-bottom: 40px;
`;

const TitleLogo = () => {
  return (
    <Section>
      <Img src={logo} width={150} alt="Dwyte Martin Logo" />

      <HeaderDesc>
        <h1>Dwyte Martin</h1>
        <p>
          A student & developer self-learning web technologies with interest on
          finance, cryptography, and distributed ledger technology.
        </p>
      </HeaderDesc>
    </Section>
  );
};
export default TitleLogo;
