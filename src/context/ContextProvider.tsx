//External components
import { useState, ReactElement } from 'react';
import { useQuery } from '@apollo/client';

//Internal components
import { Country, InputState, InputObject } from '../types';
import { LIST_ALL_COUNTRIES_AND_CONTINENTS } from '../queries/allCountriesQuery';
import CountryContext from './countriesContext';

//Styles
import 'antd/dist/antd.css';

interface PropsProvider {
  children?: ReactElement | ReactElement[];
}

export default function ContextProvider({ children }: PropsProvider) {
  const [input, setInput] = useState<InputState>({
    country: undefined,
    continent: undefined,
    currency: undefined,
  });
  const [filterObject, setFilterObject] = useState<InputObject>({
    country: [],
    continent: [],
    currency: [],
  });
  const { data } = useQuery(LIST_ALL_COUNTRIES_AND_CONTINENTS);

  const filterFunction = (
    countryList: Array<Country>,
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    let result = countryList?.filter((country) =>
      key === 'currency'
        ? country[key as keyof Country] === e
        : key === 'country'
        ? country.code === e
        : key === 'continent'
        ? country.continent.code === e
        : []
    );
    setFilterObject({ ...filterObject, [key]: result });
  };

  const onChangeInput = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    setInput({ ...input, [key]: e });
    filterFunction(data.countries, key, e);
  };

  return (
    <CountryContext.Provider
      value={{
        onChangeInput,
        code: input,
        countries: data.countries,
        continents: data.continents,
        filterObject,
        input,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
