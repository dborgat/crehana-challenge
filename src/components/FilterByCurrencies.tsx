//External components
import { useEffect, useState, useContext } from 'react';
import { Select } from 'antd';

//Internal components
import CountryContext from '../context/countriesContext';
import SelectFilter from './SelectFilter';
import { Country } from '../types';

const { Option } = Select;

interface ObjectCurrencies {
  [index: string]: string;
}

export default function FilterByCurrencies() {
  const { countries, input } = useContext(CountryContext);

  const [currencies, setCurrencies] = useState<object>({});

  const filterByCurrencies = (countryList: Array<Country> | undefined) => {
    let objectToArray: ObjectCurrencies = {};

    countryList?.forEach((country) => {
      if (!objectToArray[country.currency]) {
        objectToArray[country.currency] = country.currency;
      }
    });
    return objectToArray;
  };

  useEffect(() => {
    setCurrencies(filterByCurrencies(countries));
  }, [countries]);

  return (
    <SelectFilter value={input?.currency} type='currency'>
      {Object.keys(currencies).map((currency, index) => (
        <Option key={index} value={currency}>
          {currency}
        </Option>
      ))}
    </SelectFilter>
  );
}
