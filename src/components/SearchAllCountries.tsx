import { useContext } from 'react';
import CountryContext from '../context/countriesContext';

import { Select } from 'antd';

const { Option } = Select;

export default function SearchAllCountries() {
  const { onChangeInput, countries, input } = useContext(CountryContext);

  return (
    <Select
      showSearch
      value={input?.country}
      style={{ width: 200 }}
      placeholder='Search to Select'
      optionFilterProp='children'
      filterOption={(input, option) => {
        return (option!.children as unknown as string).includes(
          input.toLocaleUpperCase()
        );
      }}
      onChange={(e) => onChangeInput && onChangeInput('country', e)}
      allowClear
    >
      {countries?.map((country) => (
        <Option key={country.code} value={country.code}>
          {country.name.toLocaleUpperCase()}
        </Option>
      ))}
    </Select>
  );
}
