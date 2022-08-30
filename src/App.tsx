import { Layout } from 'antd';
import { useState } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Country, InputState, InputArray } from './types';

import CountryContext from './context/countriesContext';
import CountrySelect from './components/CountrySelect';
import CountryInfo from './components/CountryInfo';
import './App.css';
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

const LIST_ALL_COUNTRIES_AND_CONTINENTS = gql`
  {
    countries {
      code
      name
      native
      continent {
        code
        name
      }
      capital
      currency
      languages {
        name
        native
        code
      }
      states {
        name
      }
      emoji
    }
    continents {
      code
      name
      countries {
        code
        name
        capital
        native
        languages {
          name
          native
        }
        emoji
      }
    }
  }
`;

function App() {
  const [input, setInput] = useState<InputState>({
    country: undefined,
    continent: undefined,
    currency: undefined,
  });
  const [filterArray, setFilterArray] = useState<InputArray>({
    country: [],
    continent: [],
    currency: [],
  });
  const { data, loading, error } = useQuery(LIST_ALL_COUNTRIES_AND_CONTINENTS);

  const filterByCurrencyFunction = (
    countryList: Array<Country>,
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    let result = countryList.filter(({ currency }) => currency === e);
    setFilterArray({ ...filterArray, [key]: result });
  };

  const filterByCountryFunction = (
    countryList: Array<Country>,
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    let result = countryList.filter(({ code }) => code === e);
    setFilterArray({ ...filterArray, [key]: result });
  };

  const filterByContinentFunction = (
    countryList: Array<Country>,
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    let result = countryList.filter(({ continent }) => continent.code === e);
    setFilterArray({ ...filterArray, [key]: result });
  };

  const onChangeInput = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    setInput({ ...input, [key]: e });
    if (key === 'currency')
      return filterByCurrencyFunction(data.countries, key, e);
    if (key === 'country')
      return filterByCountryFunction(data.countries, key, e);
    if (key === 'continent')
      return filterByContinentFunction(data.countries, key, e);
  };

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <>
      <CountryContext.Provider
        value={{
          onChangeInput,
          code: input,
          countries: data.countries,
          continents: data.continents,
          filterArray,
          input,
        }}
      >
        <Layout>
          <Header
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <CountrySelect />
          </Header>
          <Content style={{ height: 'auto', padding: 50 }}>
            <CountryInfo />
          </Content>
        </Layout>
      </CountryContext.Provider>
    </>
  );
}

export default App;
