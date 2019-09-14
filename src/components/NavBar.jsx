import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: inline-block !important;

  .nav-item {
    text-align: center;
  }
`;

const NavBar = () => {
  return (
    <Nav className="navbar navbar-expand navbar-light bg-none">
      <div className="navbar-nav">
        <a className="nav-item nav-link active" href="#home">
          Home
        </a>
        <a className="nav-item nav-link" href="#projects">
          Projects
        </a>
        <a className="nav-item nav-link" href="#techstack">
          TechStack
        </a>
        <a className="nav-item nav-link" href="#software">
          Software
        </a>
      </div>
    </Nav>
  );
};

export default NavBar;
