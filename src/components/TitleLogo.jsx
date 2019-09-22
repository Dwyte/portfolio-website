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
        <h1>Dwyte</h1>
        <p>dwyte@tutanota.com</p>
      </HeaderDesc>
    </Section>
  );
};

export default TitleLogo;
