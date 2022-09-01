//External components
import { Divider, Row, Typography, Col, Button } from 'antd';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { Link, useNavigate } from 'react-router-dom';

//Internal components
import { LIST_SELECTED_COUNTRY } from '../queries/allCountriesQuery';
import LoadingOrErrorView from '../components/LoadingOrErrorView';

const { Title } = Typography;

const CountryPage = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const { data, loading, error } = useQuery(LIST_SELECTED_COUNTRY, {
    variables: {
      countryCode: code,
    },
  });

  if (loading || error) {
    return <LoadingOrErrorView error={error} />;
  }

  return (
    <Row justify='center' align='middle' className='main-container'>
      <Row className='main-container__card'>
        <Button onClick={() => navigate('/')}>Volver</Button>
        <Col span={24}>
          <Title level={1}>
            {data?.country.name} - {data?.country.code} - {data?.country.emoji}
          </Title>
        </Col>
        <Divider />
        <Col span={24}>
          <Title level={3}>
            Moneda:
            <Link to={`/currency/${data?.country.currency}`}>
              {data?.country.currency}
            </Link>
          </Title>
        </Col>
        <Divider />
        <Col span={24}>
          <Title level={3}>
            Continente:
            <Link to={`/continent/${data?.country.continent.code}`}>
              {data?.country.continent.name}
            </Link>
          </Title>
        </Col>
        <Divider />
        <Col span={24}>
          <Title level={3}>Capital: {data?.country.capital}</Title>
        </Col>
        <Divider />
        <Col span={24}>
          <Title level={3}>Lenguas:</Title>
          <ul>
            {data?.country.languages.map(
              ({ code, name }: { code: string; name: string }) => (
                <li key={code}>{name}</li>
              )
            )}
          </ul>
        </Col>
        {!!data?.country.states.length && (
          <Col span={24}>
            <Title level={3}>Provincias: ({data?.country.states.length})</Title>
            <ul>
              {data?.country.states?.map(
                ({ name }: { name: string }, i: number) => (
                  <li key={i}>{name}</li>
                )
              )}
            </ul>
          </Col>
        )}
      </Row>
    </Row>
  );
};

export default CountryPage;
