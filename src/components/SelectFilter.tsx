//External components
import { ReactElement } from 'react';
import { Select } from 'antd';
import { useNavigate } from 'react-router-dom';
interface SelectProps {
  value?: string;
  type: string;
  children?: ReactElement | ReactElement[];
}

export default function SelectFilter({ value, type, children }: SelectProps) {
  const navigate = useNavigate();

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
      onChange={(e: string) => navigate(`${type}/${e}`)}
      allowClear
    >
      {children}
    </Select>
  );
}
