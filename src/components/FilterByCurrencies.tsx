import React, { useEffect, useState, useContext } from 'react';
import CountryContext from '../context/countriesContext';
import { Country } from '../types';

import { Select } from 'antd';

const { Option } = Select;

interface ObjectCurrencies {
  [index: string]: string;
}

export default function FilterByCurrencies() {
  const { onChangeInput, countries, input } = useContext(CountryContext);

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
    <Select
      value={input?.currency}
      showSearch
      style={{ width: 200 }}
      placeholder='Search to Select'
      optionFilterProp='children'
      filterOption={(input, option) => {
        return (option!.children as unknown as string).includes(
          input.toLocaleUpperCase()
        );
      }}
      filterSort={(optionA, optionB) =>
        (optionA!.children as unknown as string)
          .toLowerCase()
          .localeCompare((optionB!.children as unknown as string).toLowerCase())
      }
      allowClear
      onChange={(e) => onChangeInput && onChangeInput('currency', e)}
    >
      {Object.keys(currencies).map((currency) => (
        <Option key={currency} value={currency}>
          {currency}
        </Option>
      ))}
    </Select>
  );
}
