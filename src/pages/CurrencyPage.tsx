//External components
import { Card, Divider, Row, Typography, List, Result, Spin, Col } from 'antd';

//Internal components
import useCurrencies from '../hooks/useCurrencies';

const { Text, Title } = Typography;

const CurrencyPage = () => {
  const [countryByCurrency] = useCurrencies();

  if (!countryByCurrency.length) {
    return (
      <Row
        style={{ height: '100vh', width: '100vw', padding: 50 }}
        justify='center'
        align='middle'
      >
        <Spin size='large' />
      </Row>
    );
  }

  return (
    <Row>
      {countryByCurrency?.map(({ name, code }) => (
        <Col key={code}>
          <Col span={24}>
            <Title level={3}>Continente seleccionado: {name}</Title>
          </Col>
          <Col span={24}>
            <Title level={3}>Codigo: {code}</Title>
          </Col>
          <Col span={24}>
            <Title level={3}>Paises: ({name})</Title>
          </Col>
        </Col>
      ))}
    </Row>
  );
};

export default CurrencyPage;
