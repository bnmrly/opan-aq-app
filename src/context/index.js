import React, { useState, useEffect } from "react";

const CountryContext = React.createContext();

const CountryProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState([]);

  const url = `https://api.openaq.org/v1/countries`;

  const fetchCountries = () => {
    fetch(url)
      .then((response) => response.json())
      .then((countryData) => {
        console.dir(countryData.results);
        setCountries(countryData.results);
      })
      .catch((error) => console.log(error.message));
  };

  useEffect(() => {
    fetchCountries();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CountryContext.Provider
      value={{
        loading,
        setLoading,
        countries,
        setCountries,
      }}
    >
      {props.children}
    </CountryContext.Provider>
  );
};

export { CountryProvider, CountryContext };
