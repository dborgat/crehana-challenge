//External components
import { Typography, Col } from 'antd';

//Internal components
import FilterByName from './FilterByName';
import FilterByContinent from './FilterByContinent';
import FilterByCurrencies from './FilterByCurrencies';

const { Title } = Typography;

export default function CountrySelectHeader() {

  return (
    <>
      <Col>
        <Title
          level={5}
          style={{ margin: 0, color: 'white', textAlign: 'center' }}
        >
          Buscar por nombre
        </Title>
        <FilterByName />
      </Col>
      <Col>
        <Title
          level={5}
          style={{ margin: 0, color: 'white', textAlign: 'center' }}
        >
          Buscar por continente
        </Title>
          <FilterByContinent />
      </Col>
      <Col>
        <Title
          level={5}
          style={{ margin: 0, color: 'white', textAlign: 'center' }}
        >
          Buscar por moneda
        </Title>
          <FilterByCurrencies />
      </Col>
    </>
  );
}
