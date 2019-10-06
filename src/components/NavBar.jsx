import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Section from "./_Styled/Section";
import { Link, animateScroll as scroll } from "react-scroll";

const ScrollUp = styled.div`
  bottom: 50px;
  right: 75px;
  position: fixed;
  z-index: 99999;

  button {
    font-size: 16px;
    box-shadow: 1px 0px 5px -1px #000;
  }

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

const SmoothLink = styled(Link)`
  cursor: pointer;
`;

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
    href: "/"
  },
  {
    children: "Projects",
    href: "projects"
  },
  {
    children: "TechStack",
    href: "techstack"
  }
];

const NavItem = ({ children, href }) => {
  return (
    <li className="nav-item">
      <SmoothLink
        className="nav-link text-dark"
        to={href}
        spy={true}
        smooth={true}
        duration={1000}
      >
        {children}
      </SmoothLink>
    </li>
  );
};

const NavBar = () => {
  const [scrollTop, setScrollTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleScroll() {
    if (document.documentElement.scrollTop >= 25) {
      setScrollTop(true);
    } else setScrollTop(false);
  }

  return (
    <Section>
      {scrollTop && (
        <ScrollUp>
          <button onClick={scroll.scrollToTop} className="btn btn-dark">
            <i className="fas fa-arrow-up"></i>
          </button>
        </ScrollUp>
      )}

      <nav>
        <ul className="nav justify-content-center">
          {navs.map(nav => (
            <NavItem key={navs.indexOf(nav)} {...nav} />
          ))}
        </ul>
      </nav>
    </Section>
  );
};

export default NavBar;
