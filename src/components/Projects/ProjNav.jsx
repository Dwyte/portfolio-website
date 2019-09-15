import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  cursor: pointer;

  div {
    padding: 0.25rem 0.5rem;

    @media only screen and (max-width: 600px) {
      padding: 0.12rem 0.32rem;
      font-size: 14px;
    }

    ${({ isActive }) =>
      isActive &&
      `
        color: white !important;
        background: rgb(25,25,25);
        border-radius: 5px;
      `}

    :hover {
      color: ${({ isActive }) => (isActive ? `white` : `black`)} !important;
    }
  }
`;

const ProjNav = ({ filters, filterIndex, setFilter }) => {
  return (
    <ul className="nav justify-content-center">
      {filters.map(filter => (
        <NavItem
          key={filters.indexOf(filter)}
          className="nav-item"
          isActive={filters[filterIndex] === filter}
        >
          <div
            className="nav-link text-dark active"
            onClick={() => {
              setFilter(filters.indexOf(filter));
            }}
          >
            <i className={filter.icon} /> {filter.label}
          </div>
        </NavItem>
      ))}
    </ul>
  );
};

export default ProjNav;
