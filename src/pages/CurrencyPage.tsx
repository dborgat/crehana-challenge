//External components
import { Divider, Row, Typography, Spin, Col, Button } from 'antd';
import { useParams, Link, useNavigate } from 'react-router-dom';

//Internal components
import useCurrencies from '../hooks/useCurrencies';

const { Title } = Typography;

const CurrencyPage = () => {
  const navigate = useNavigate();
  const { code } = useParams();

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
    <Row
      justify='center'
      align='middle'
      className='main-container'
      gutter={[32, 32]}
    >
      <Button onClick={() => navigate('/')}>
        Volver
      </Button>
      <Col>
        <Title level={1}>Moneda: {code}</Title>
      </Col>
      <Divider />

      {countryByCurrency?.map(({ name, emoji, code, capital }) => (
        <Col key={code} span={8}>
          <Row className='main-container__card' justify='center' align='middle'>
            <Col span={24}>
              <Title level={3}>
                {emoji} - <Link to={`/country/${code}`}>{name}</Link> -{capital}
              </Title>
            </Col>
          </Row>
        </Col>
      ))}
    </Row>
  );
};

export default CurrencyPage;
