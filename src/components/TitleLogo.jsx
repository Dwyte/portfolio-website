import styled from "styled-components";
import React from "react";

import logo from "../assets/logo.jpg";

import HeaderDesc from "./common/HeaderDesc";
import Section from "./common/Section";
import Anchor from "./common/Anchor";

const Img = styled.img`
  margin-bottom: 1rem;
  border-radius: ${({ theme }) => theme.borderRadius};

  @keyframes enlarge {
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

  animation: enlarge 1.5s;
`;

const Header = styled.h1`
  ::after {
    content: "Dwight";

    @keyframes animateAfter {
      from {
        content: "Dwight";
      }
      20% {
        content: "01000100";
      }
      40% {
        content: "ZHd5dGU=";
      }
      60% {
        content: "드와이트";
      }
      80% {
        content: "ドワイト";
      }
      to {
        content: "Ɖωιɢнт";
      }
    }

    animation: animateAfter 1s;
  }

  animation: enlarge 1s;
`;

const iamURL = "https://iam-web-client.herokuapp.com/";

const appcon2020URL =
  "https://www.facebook.com/appcon2019/photos/a.702937983408567/1108157709553257";

const TitleLogo = () => {
  return (
    <Section>
      <Img src={logo} width={150} alt="Dwyte Martin Logo" />
      <HeaderDesc>
        <Header></Header>
        <p>
          I'm currently a BS Computer Science student at Cavite State University. 
          The most notable project I've worked on recently is{" "}
          <Anchor
            target="_blank"
            rel="noopener noreferrer"
            href={iamURL}
            isText
          >
            iam
          </Anchor>
          , which is a blockchain-based credential system that I co-developed for
          AppCon 2020 and has won the{" "}
          <Anchor
            target="_blank"
            rel="noopener noreferrer"
            href={appcon2020URL}
            isText
          >
            "Best Technology"
          </Anchor>{" "}
          award. <br />
        </p>
      </HeaderDesc>
    </Section>
  );
};
export default TitleLogo;
