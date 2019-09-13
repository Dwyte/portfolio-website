import React from "react";
import TitleLogo from "./components/TitleLogo";
import styled from "styled-components";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css'

const Padd = styled.div`
  font-family: 'Ubuntu', sans-serif;
  padding: 50px;
`;

const Container = styled.div`
  max-width: 720px;
  margin: auto;
  text-align: center;
  
  h1, h2 {
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
        <NavBar/>

        <TitleLogo />
        <About />

        <Projects/>
      </Container>
    </Padd>
  );
}

export default App;
