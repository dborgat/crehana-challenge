//External components
import { useState, ReactElement } from 'react';
import { Row, Result, Spin } from 'antd';
import { useQuery } from '@apollo/client';

//Internal components
import { InputState } from '../types';
import { LIST_ALL_COUNTRIES_AND_CONTINENTS } from '../queries/allCountriesQuery';
import CountryContext from './countriesContext';

interface PropsProvider {
  children?: ReactElement | ReactElement[];
}

export default function ContextProvider({ children }: PropsProvider) {
  const [input, setInput] = useState<InputState>({
    country: undefined,
    continent: undefined,
    currency: undefined,
  });

  const { data, loading, error } = useQuery(LIST_ALL_COUNTRIES_AND_CONTINENTS);

  const onChangeInput = (
    key: string,
    e: React.ChangeEvent<HTMLInputElement> | string
  ) => {
    setInput({ ...input, [key]: e });
  };

  if (loading || error) {
    return (
      <Row className='loadView' justify='center' align='middle'>
        {error ? (
          <Result
            status='404'
            title='No se pudo obtener el país'
            subTitle='Lo lamento, por favor intente más tarde.'
          />
        ) : (
          <>
            <Spin size='large' />
            <h1>CARGANDO...</h1>
          </>
        )}
      </Row>
    );
    }

  return (
    <CountryContext.Provider
      value={{
        onChangeInput,
        code: input,
        countries: data.countries,
        continents: data.continents,
        input,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
}
