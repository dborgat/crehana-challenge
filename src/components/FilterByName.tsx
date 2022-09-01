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
      {countries?.map(({ code, name, emoji }) => (
        <Option key={code} value={code}>
          {`${emoji} - ${name.toLocaleUpperCase()}`}
        </Option>
      ))}
    </SelectFilter>
  );
}
