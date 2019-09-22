import React from "react";
import TitleLogo from "./components/TitleLogo";
import styled from "styled-components";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar";
import TechStack from "./components/TechStack/TechStack";
import Footer from "./components/Footer/Footer";


const Container = styled.div`
  font-family: "Ubuntu", sans-serif;

  text-align: center;
  h1,
  h2 {
    font-weight: bold;
  }
`;

function App() {
  return (
    <Container>
      <NavBar />

      <TitleLogo />
      <About />

      <Projects />

      <TechStack />
      <Footer />
    </Container>
  );
}

export default App;
