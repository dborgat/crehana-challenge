//External components
import { Typography, Col, Row } from 'antd';

//Internal components
import FilterByName from '../components/FilterByName';
import FilterByContinent from '../components/FilterByContinent';
import FilterByCurrencies from '../components/FilterByCurrencies';

const { Title } = Typography;

export default function HomePage() {
  return (
    <Row className='home-page-container'>
      <Col span={24}>
        <Title level={1}>Crehana Challenge</Title>
      </Col>
      <Col span={24}>
        <Row justify='space-around'>
          <Col>
            <Title level={3}>Buscar por nombre</Title>
            <FilterByName />
          </Col>
          <Col>
            <Title level={3}>Buscar por continente</Title>
            <FilterByContinent />
          </Col>
          <Col>
            <Title level={3}>Buscar por moneda</Title>
            <FilterByCurrencies />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
