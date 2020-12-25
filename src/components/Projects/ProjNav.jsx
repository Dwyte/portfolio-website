import React from "react";

import styled from "styled-components";

const Container = styled.div`
  margin: ${({ theme }) => theme.spacing / 2}rem 0;
`;

const NavItem = styled.li`
  cursor: pointer;

  color: ${({ isActive, theme }) =>
    isActive ? theme.accentColor : theme.fontColor};

  :hover {
    color: ${({ theme }) => theme.accentColor};
  }
`;

const ProjNav = ({ filters, filterIndex, setFilter, resetPagination }) => {
  return (
    <Container>
      <div className="nav justify-content-center">
        {filters.map((filter) => (
          <NavItem
            key={filters.indexOf(filter)}
            className="nav-item mx-2"
            isActive={filters[filterIndex] === filter}
            onClick={() => {
              resetPagination();
              setFilter(filters.indexOf(filter));
            }}
          >
            <i className={filter.icon} /> {filter.label}
          </NavItem>
        ))}
      </div>
    </Container>
  );
};

export default ProjNav;
