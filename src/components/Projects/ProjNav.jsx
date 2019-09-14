import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  cursor: pointer;

  div {
    ${({ isActive }) => isActive && `color: black!important;`}

    :hover {
      color: black !important;
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
              console.log("!");
              setFilter(filters.indexOf(filter));
            }}
          >
            {filter.label}
          </div>
        </NavItem>
      ))}
    </ul>
  );
};

export default ProjNav;
