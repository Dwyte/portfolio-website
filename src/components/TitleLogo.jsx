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

  animation: fadeIn 1.5s;
`;

const Header = styled.h1`
  ::after {
    content: "Dwyte Martin";

    @keyframes animateAfter {
      from {
        content: "Дуайт Мартин";
      }

      25% {
        content: "드와이트 마틴";
      }

      50% {
        content: "ドワイト・マーティン";
      }

      75% {
        content: "44 77 79 74 65";
      }

      to {
        content: "01000100 01001101";
      }
    }

    animation: animateAfter 1.25s;
  }

  animation: fadeIn 1.25s;
`;

const TitleLogo = () => {
  return (
    <Section>
      <Img src={logo} width={150} alt="Dwyte Martin Logo" />
      <HeaderDesc>
        <Header></Header>
        <p>
          A Software Developer, 18y/o, currently taking Computer Science at
          Cavite State University.
          <br />
          <span>
            I built CoinMarketSignals, an indicator platform for traders,
            discord bots for my trader clients and a lot more you can see below.
          </span>
        </p>
      </HeaderDesc>

      <Anchor target="_blank" rel="noopener noreferrer" href={Resume}>
        <button type="button" className="btn btn btn-primary">
          <i className="fas fa-file-download"></i> View Resume
        </button>
      </Anchor>
    </Section>
  );
};
export default TitleLogo;
