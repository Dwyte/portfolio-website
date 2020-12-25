import styled, { ThemeContext } from "styled-components";
import React from "react";

import TechStack from "./components/TechStack/TechStack";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import TitleLogo from "./components/TitleLogo";
import NavBar from "./components/NavBar";

import theme from "./theme";

const Container = styled.div`
  background: ${({ theme }) => theme.background};
  padding: ${({ theme }) => theme.spacing}rem;
  text-align: center;

  h1,
  h2 {
    font-weight: bold;
  }

  @media only screen and (max-width: 800px) {
    padding: ${({ theme }) => theme.spacing / 2}rem;
    font-size: 12px;
  }
`;

function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <Container>
        <NavBar />
        <TitleLogo />
        <Projects />
        <TechStack />
        <Footer />
      </Container>
    </ThemeContext.Provider>
  );
}

export default App;
