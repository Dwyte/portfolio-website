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
        <a className="nav-item nav-link active" href="#">
          Home
        </a>
        <a className="nav-item nav-link" href="#">
          Projects
        </a>
        <a className="nav-item nav-link" href="#">
          Skills
        </a>
        <a className="nav-item nav-link" href="#">
          Software
        </a>
      </div>
    </Nav>
  );
};

export default NavBar;
