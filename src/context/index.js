import React, { useState, useEffect } from "react";

const CountryContext = React.createContext();

const CountryProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const url = `https://api.openaq.org/v2/countries?limit=50&page=${pageNumber}`;

  const fetchCountries = () => {
    fetch(url)
      .then((response) => response.json())
      .then((countryData) => {
        console.dir(countryData.results);
        setCountries(countryData.results);
        setLoading(!loading);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  return (
    <CountryContext.Provider
      value={{
        loading,
        setLoading,
        countries,
        setCountries,
        fetchCountries,
        pageNumber,
        setPageNumber,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
