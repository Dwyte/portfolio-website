import { animateScroll } from "react-scroll";
import styled from "styled-components";
import React from "react";

const Button = styled.button`
  box-shadow: 1px 0px 5px -1px #000;
  border-radius: ${({ theme }) => theme.borderRadius};
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.fontColor};
  padding: 0.33rem 1rem;
  font-size: 1.25rem;
  border: none;

  :focus {
    outline: 0;
    outline-style: none;
    outline-width: 0;
  }

  :hover {
    background: ${({ theme }) => theme.accentColor};
    color: ${({ theme }) => theme.foreground};
  }
`;

const Container = styled.div`
  position: fixed;
  z-index: 99999;
  bottom: 50px;
  right: 75px;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1s both;
`;

const ScrollUp = () => {
  return (
    <Container>
      <Button onClick={animateScroll.scrollToTop}>
        <i className="fas fa-angle-double-up"></i>
      </Button>
    </Container>
  );
};

export default ScrollUp;
