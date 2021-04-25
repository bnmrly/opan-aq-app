import React, { Fragment, useContext } from "react";
import { CountryContext } from "../context/index";
import styled from "styled-components";

// Styled Components
const PaginationContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
`;

const NoResultsMessage = styled.p`
  margin: 0 10px 0 0;
`;

const PageButton = styled.button`
  cursor: pointer;
`;

const PageNumber = styled.p`
  margin: 0 10px;
`;

const Pagination = () => {
  const appContext = useContext(CountryContext);
  const {
    countries,
    fetchCountries,
    pageNumber,
    setPageNumber,
    loading,
    setLoading,
  } = appContext;

  const handlePrevButtonClick = () => {
    setLoading(!loading);
    setPageNumber(pageNumber - 1);
    fetchCountries();
  };

  const handleNextButtonClick = () => {
    setLoading(!loading);
    setPageNumber(pageNumber + 1);
    fetchCountries();
  };

  return (
    <Fragment>
      <PaginationContainer>
        {!countries.length && (
          <NoResultsMessage>No more results</NoResultsMessage>
        )}
        <PageButton onClick={handlePrevButtonClick} disabled={pageNumber < 2}>
          Prev Page
        </PageButton>
        <PageNumber>Page {pageNumber}</PageNumber>
        <PageButton
          onClick={handleNextButtonClick}
          disabled={!countries.length}
        >
          Next Page
        </PageButton>
      </PaginationContainer>
    </Fragment>
  );
};

export default Pagination;
