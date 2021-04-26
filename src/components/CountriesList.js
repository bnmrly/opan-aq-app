import React, { Fragment, useContext } from "react";
import { CountryContext } from "../context";
import styled from "styled-components";

// Components

import SkeletonCountryCard from "./SkeletonCountryCard";

// Styled Components
const CountriesCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  row-gap: 30px;
  column-gap: 15px;
`;

const CountryCard = styled.div`
  background-color: #59bb64;
  color: #fff;
  padding: 25px 20px;
`;

const CountryCardName = styled.h2`
  margin: 0 0 10px 0;
`;

const CountryCardNameLocations = styled.h3`
  margin: 0 0 10px 0;
`;

const CountryList = () => {
  const appContext = useContext(CountryContext);
  const { loading, countries } = appContext;

  return (
    <Fragment>
      <CountriesCardContainer>
        {loading &&
          [...Array(50)].map((_el, i) => <SkeletonCountryCard key={i} />)}
        {countries.length > 0 &&
          countries.map((country) => (
            <CountryCard key={country.code}>
              <CountryCardName>{country.name}</CountryCardName>
              <CountryCardNameLocations>
                Locations: {country.locations}
              </CountryCardNameLocations>
            </CountryCard>
          ))}
      </CountriesCardContainer>
    </Fragment>
  );
};

export default CountryList;
