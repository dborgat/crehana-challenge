//External components
import { Typography, Col, Row } from 'antd';

//Internal components
import FilterByName from '../components/FilterByName';
import FilterByContinent from '../components/FilterByContinent';
import FilterByCurrencies from '../components/FilterByCurrencies';

const { Title } = Typography;

export default function HomePage() {
  return (
    <Row style={{ backgroundColor: 'navy', height: '100vh', width: '100vw' }} justify="space-around" align="middle">
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
    </Row>
  );
}
