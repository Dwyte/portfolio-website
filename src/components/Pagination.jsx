import React from "react";
import styled from "styled-components";

const PageList = styled.ul`
  list-style-type: none;
  padding: 0px !important;
`;

const PageNav = styled.i`
  cursor: pointer;
  color: ${({ disabled }) => disabled && "rgb(75, 75, 75)"};
`;

const Page = styled.li`
  display: inline;
  padding: 5px 10px;
  border-radius: 5px;
  box-shadow: 1px 0px 5px -1px #000;
  cursor: pointer;
  background: black;
  color: white;
`;

const Pagination = ({
  totalItems,
  itemsPerPage,
  activePage,
  setActivePage
}) => {
  const lastPage = Math.ceil(totalItems / itemsPerPage) - 1;

  function handlePageChange(page) {
    if (page > lastPage || page < 0) return;

    setActivePage(page);
  }

  return (
    <PageList className="mt-3">
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
  );
};

export default Pagination;
