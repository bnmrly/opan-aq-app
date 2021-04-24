import React, { Fragment, useContext } from "react";
import { CountryContext } from "../context/index";

const CountryList = () => {
  const appContext = useContext(CountryContext);
  const { loading, countries } = appContext;
  console.log("this is countries", countries);

  return (
    <Fragment>
      <h1>List of Country cards</h1>
      {/* {loading && <h1>loading...</h1>} */}
      {countries.length > 0 &&
        countries.map((country) => (
          <div key={country.code}>
            <h2>{country.name}</h2>
            <h3>{country.locations}</h3>
          </div>
        ))}
    </Fragment>
  );
};

export default CountryList;
