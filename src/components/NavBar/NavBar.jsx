import React, { useState, useEffect } from "react";
import ScrollUp from "./ScrollUp";

import Section from "../common/Section";
import NavBarItem from "./NavBarItem";

const navs = [
  {
    id: 0,
    children: "showcase",
    href: "showcase",
    isHeader: false,
  },
  {
    id: 1,
    children: <b>Dwight</b>,
    href: "/",
    isHeader: true,
  },
  {
    id: 2,
    children: "techstack",
    href: "techstack",
    isHeader: false,
  },
];

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
      {scrollTop && <ScrollUp />}

      <nav>
        <ul className="nav justify-content-center">
          {navs.map(({ id, children, href, isHeader }) => (
            <NavBarItem key={id} href={href} isHeader={isHeader}>
              {children}
            </NavBarItem>
          ))}
        </ul>
      </nav>
    </Section>
  );
};

export default NavBar;
