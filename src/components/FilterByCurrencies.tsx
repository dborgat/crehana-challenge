//External components
import { useContext } from 'react';
import { Select } from 'antd';

//Internal components
import CountryContext from '../context/countriesContext';
import SelectFilter from './SelectFilter';
import useFilterByCurrencies from '../hooks/useFilterByCurrencies';

const { Option } = Select;

export default function FilterByCurrencies() {
  const { input } = useContext(CountryContext);
  const [currencies] = useFilterByCurrencies();

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
