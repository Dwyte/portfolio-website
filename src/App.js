import React from "react";
import TitleLogo from "./components/TitleLogo";
import styled from "styled-components";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";

const Padd = styled.div`
  font-family: "Ubuntu", sans-serif;
  padding: 50px;

  @media only screen and (max-width: 600px) {
      padding: 25px;
  }
`;

const Container = styled.div`
  max-width: 720px;
  margin: auto;
  text-align: center;

  h1,
  h2 {
    font-weight: bold;
  }

  div {
    width: 100%;
  }
`;

function App() {
  return (
    <Padd>
      <Container>
        <NavBar />

        <TitleLogo />
        <About />

        <Projects />

        <TechStack />

        <Footer />
      </Container>
    </Padd>
  );
}

export default App;
