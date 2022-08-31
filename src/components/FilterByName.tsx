//External components
import { useContext } from 'react';
import { Select } from 'antd';

//Internal components
import CountryContext from '../context/countriesContext';
import SelectFilter from './SelectFilter';

const { Option } = Select;

export default function FilterByName() {
  const { countries, input } = useContext(CountryContext);

  return (
    <SelectFilter value={input?.country} type='country'>
      {countries?.map((country) => (
        <Option key={country.code} value={country.code}>
          {`${country.emoji} - ${country.name.toLocaleUpperCase()}`}
        </Option>
      ))}
    </SelectFilter>
  );
}
