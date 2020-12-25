import styled from "styled-components";
import React from "react";
import Container from "./common/Container";

const PageList = styled.ul`
  list-style-type: none;
  padding: 0px;

  margin-top: ${({ theme }) => theme.spacing / 2}rem;
`;

const PageNav = styled.i`
  color: ${({ disabled, theme }) =>
    disabled ? theme.fontColorSecondary : theme.fontColor};

  :hover {
    cursor: pointer;
    color: ${({ disabled, theme }) => !disabled && theme.accentColor};
  }
`;

const Page = styled.li`
  background: ${({ theme }) => theme.foreground};
  color: ${({ theme }) => theme.fontColor};
  padding: 0.25rem 0.75rem;
  border-radius: 0.2rem;
  display: inline;
`;

const Pagination = ({
  totalItems,
  itemsPerPage,
  activePage,
  setActivePage,
}) => {
  const lastPage = Math.ceil(totalItems / itemsPerPage) - 1;

  function handlePageChange(page) {
    if (page > lastPage || page < 0) return;

    setActivePage(page);
  }

  return (
    <Container>
      <PageList>
        <PageNav
          className="fas fa-step-backward mx-2"
          onClick={() => handlePageChange(activePage - 1)}
          disabled={activePage === 0}
        ></PageNav>
        <Page className="mx-2">Page {activePage + 1}</Page>
        <PageNav
          className="fas fa-step-forward mx-2"
          onClick={() => handlePageChange(activePage + 1)}
          disabled={activePage === lastPage}
        ></PageNav>
      </PageList>
    </Container>
  );
};

export default Pagination;
