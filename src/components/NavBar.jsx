import React from "react";
import styled from "styled-components";
import Section from "./common/Section";

const Surname = styled.span`
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const navs = [
  {
    children: (
      <b>
        Dwyte <Surname>Martin</Surname>
      </b>
    ),
    href: "#home"
  },
  {
    children: "Projects",
    href: "#projects"
  },
  {
    children: "TechStack",
    href: "#techstack"
  },
  {
    children: "Blog",
    href: "#blog"
  }
];

const NavItem = ({ children, href }) => {
  return (
    <Section>
      <li className="nav-item">
        <a className="nav-link text-dark" href={href}>
          {children}
        </a>
      </li>
    </Section>
  );
};

const NavBar = () => {
  return (
    <ul className="nav justify-content-center">
      {navs.map(nav => (
        <NavItem {...nav} />
      ))}
    </ul>
  );
};

export default NavBar;
