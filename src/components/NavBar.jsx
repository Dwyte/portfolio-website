import React from "react";
import styled from "styled-components";

const Surname = styled.span`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const NavBar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#home">
          <b>Dwyte <Surname>Martin</Surname></b>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#projects">
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-dark" href="#techstack">
          TechStack
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
