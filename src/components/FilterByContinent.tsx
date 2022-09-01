//External components
import { useContext } from 'react';
import { Select } from 'antd';

//Internal components
import CountryContext from '../context/countriesContext';
import SelectFilter from './SelectFilter';

const { Option } = Select;

export default function FilterByContinent() {
  const { continents, input } = useContext(CountryContext);

  return (
    <SelectFilter value={input?.continent} type='continent'>
      {continents?.map(({ code, name }) => (
        <Option key={code} value={code}>
          {name}
        </Option>
      ))}
    </SelectFilter>
  );
}
