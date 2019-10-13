import React from "react";
import styled from "styled-components";

const NavItem = styled.li`
  cursor: pointer;

  div {
    padding: 0.25rem 0.5rem;
    color: white !important;

    @media only screen and (max-width: 600px) {
      padding: 0.15rem 0.32rem;
      font-size: 14px;
    }

    ${({ isActive }) =>
      isActive &&
      `
        box-shadow: 1px 0px 5px -1px #000;
        background: rgb(0,0,0);
        border-radius: 5px;
      `}
  }
`;

const ProjNav = ({ filters, filterIndex, setFilter, resetPagination }) => {
  return (
    <ul className="nav justify-content-center">
      {filters.map(filter => (
        <NavItem
          key={filters.indexOf(filter)}
          className="nav-item mx-1"
          isActive={filters[filterIndex] === filter}
        >
          <div
            className="nav-link text-dark active"
            onClick={() => {
              resetPagination();
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
