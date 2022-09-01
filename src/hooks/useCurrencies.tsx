//External components
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

//Internal components
import CountryContext from '../context/countriesContext';
import { Country } from '../types';

const useCurrencies = () => {
  const { code } = useParams();

  const { countries } = useContext(CountryContext);

  const [countryByCurrency, setCountryByCurrency] = useState<Array<Country>>([]);

  const filterByCurrency = (array: Array<Country>, code: string) => {
    return array.filter((c) => c.currency === code);
  };

  useEffect(() => {
    if (countries && code) {
      setCountryByCurrency(filterByCurrency(countries, code));
    }
  }, [code, countries]);

  return [countryByCurrency];
};

export default useCurrencies;
