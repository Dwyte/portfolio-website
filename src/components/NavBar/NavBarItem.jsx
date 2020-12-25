import { Link } from "react-scroll";
import styled, { css } from "styled-components";
import React from "react";

const SmoothLink = styled(Link)`
  color: ${({ theme }) => theme.fontColor};

  :hover {
    color: ${({ theme }) => theme.accentColor};
    cursor: pointer;
  }

  ${({ theme, isHeader }) =>
    isHeader &&
    css`
      border-bottom: 1px dashed ${theme.accentColor};
      color: ${theme.accentColor};
      letter-spacing: 2px;
      font-size: 1rem;
    `}
`;

const NavItem = ({ children, href, isHeader }) => {
  return (
    <li className="nav-item">
      <SmoothLink
        className="nav-link"
        isHeader={isHeader}
        duration={1000}
        smooth={true}
        offset={-25}
        spy={true}
        to={href}
      >
        {children}
      </SmoothLink>
    </li>
  );
};

export default NavItem;
