import styled from "styled-components";

import CountryList from "./components/CountriesList";

const App = () => {
  const AppContainer = styled.div`
    margin: 20px;
  `;

  const AppHeader = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    @media (min-width: 768px) {
      flex-direction: row-reverse;
    }

    background-color: #59bb64;
    padding: 10px 20px;
    margin-bottom: 30px;
  `;

  const AppTitle = styled.h1`
    color: #221924;
    border: 2px solid white;
    border-radius: 3px;
    color: #fff;
    padding: 10px;
    margin: 20px 0 0 0;
    @media (min-width: 768px) {
      margin-top: 0;
    }
  `;

  const AppLogo = styled.img`
    background-color: #59bb64;
    width: inherit;
    height: auto;
  `;

  return (
    <div className="App">
      <AppContainer>
        <AppHeader>
          <AppLogo src="https://images.victorianplumbing.co.uk/vp2019/images/victorian-plumbing-logo.png" />
          <AppTitle>List of Countries</AppTitle>
        </AppHeader>
        <CountryList />
      </AppContainer>
    </div>
  );
};

export default App;
