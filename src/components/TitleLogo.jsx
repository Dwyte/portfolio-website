import React from "react";
import logo from "../assets/logo-shadow.png";
import HeaderDesc from "./_Styled/HeaderDesc";
import Section from "./_Styled/Section";
import styled from "styled-components";
import Resume from "../assets/resume.pdf";
import Anchor from "./_Styled/Anchor";

const Img = styled.img`
  margin-bottom: 40px;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale3d(1, 1, 1);
    }

    50% {
      opacity: 0.5;
      transform: scale3d(1.05, 1.05, 1.05);
    }
    to {
      opacity: 1;
      transform: scale3d(1, 1, 1);
    }
  }

  animation: fadeIn 1.25s;
`;

const Button = styled.button`
  @media only screen and (max-width: 600px) {
    font-size: 14px!important;
  }
`

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
        <Button className="btn btn btn-primary">
          <i className="fas fa-file-download"></i> View Resume
        </Button>
      </Anchor>
    </Section>
  );
};
export default TitleLogo;
