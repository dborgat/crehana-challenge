//External components
import { useEffect, useState, useContext } from 'react';

//Internal components
import CountryContext from '../context/countriesContext';
import { filterByCurrencies } from '../helpers/filterByCurrencies';

export default function useFilterByCurrencies() {
  const { countries } = useContext(CountryContext);
  const [currencies, setCurrencies] = useState<object>({});

  useEffect(() => {
    setCurrencies(filterByCurrencies(countries));
  }, [countries]);

  return [currencies];
}
