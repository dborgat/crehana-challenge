import { useContext } from 'react';
import CountryContext from '../context/countriesContext';

import { Select } from 'antd';

const { Option } = Select;

export default function FilterByContinent() {
  const { onChangeInput, continents, input } = useContext(CountryContext);

  return (
    <Select
      value={input?.continent}
      showSearch
      style={{ width: 200 }}
      placeholder='Search to Select'
      optionFilterProp='children'
      filterOption={(input, option) => {
        return (option!.children as unknown as string).includes(input);
      }}
      onChange={(e) => onChangeInput && onChangeInput('continent', e)}
      allowClear
    >
      {continents?.map((continent) => (
        <Option key={continent.code} value={continent.code}>
          {continent.name}
        </Option>
      ))}
    </Select>
  );
}
