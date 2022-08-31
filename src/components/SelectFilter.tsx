//External components
import { useContext, ReactElement } from 'react';
import { Select } from 'antd';

//Internal components
import CountryContext from '../context/countriesContext';

interface SelectProps {
  value?: string;
  type: string;
  children?: ReactElement | ReactElement[];
}

export default function SelectFilter({ value, type, children }: SelectProps) {
  const { onChangeInput } = useContext(CountryContext);

  return (
    <Select
      showSearch
      value={value}
      style={{ width: 200 }}
      placeholder='Busqueda'
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
      onChange={(e) => onChangeInput && onChangeInput(type, e)}
      allowClear
    >
      {children}
    </Select>
  );
}
