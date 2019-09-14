import React from "react";

const NavBar = () => {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <a className="nav-link text-dark" href="#home">
          <b>Dwyte Martin</b>
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
