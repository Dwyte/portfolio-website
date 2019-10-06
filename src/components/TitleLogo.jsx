import React from "react";
import logo from "../assets/logo-shadow.png";
import HeaderDesc from "./_Styled/HeaderDesc";
import Section from "./_Styled/Section";
import styled from "styled-components";
import Resume from "../assets/resume.pdf";
import Anchor from "./_Styled/Anchor";

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

      <Anchor target="_blank" rel="noopener noreferrer" href={Resume}>
        <button className="btn btn btn-primary">
          <i className="fas fa-file-download"></i> View Resume
        </button>
      </Anchor>
    </Section>
  );
};
export default TitleLogo;
