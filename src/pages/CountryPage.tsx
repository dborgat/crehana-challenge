//External components
import { Card, Divider, Row, Typography, List, Result, Spin, Col } from 'antd';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

//Internal components
import { LIST_SELECTED_COUNTRY } from '../queries/allCountriesQuery';

const { Text, Title } = Typography;

const CountryPage = () => {
  const { code } = useParams();
  const { data, loading, error } = useQuery(LIST_SELECTED_COUNTRY, {
    variables: {
      countryCode: code,
    },
  });

  if (loading || error) {
    return (
      <Row
        style={{ height: '100vh', width: '100vw', padding: 50 }}
        justify='center'
        align='middle'
      >
        {error ? (
          <Result
            status='404'
            title='No se pudo obtener la el país'
            subTitle='Lo lamento, por favor intente más tarde.'
          />
        ) : (
          <Spin size='large' />
        )}
      </Row>
    );
  }

  return (
    <Row  justify='center' align='middle'>
      <Col span={10}>
        <Title level={3}>Pais seleccionado: {data?.country.name}</Title>
      </Col>
      <Col span={10}>
        <Title level={3}>codigo: {data?.country.code}</Title>
      </Col>
      <Col span={10}>
        <Title level={3}>moneda: {data?.country.currency}</Title>
      </Col>
      <Col span={10}>
        <Title level={3}>continente: {data?.country.continent.name}</Title>
      </Col>
      <Col span={10}>
        <Title level={3}>capital: {data?.country.capital}</Title>
      </Col>
      <Col span={10}>
        <Title level={3}>lenguas:</Title>
        <ul>
          {data?.country.languages.map(
            ({ code, name }: { code: string; name: string }) => (
              <li key={code}>{name}</li>
            )
          )}
        </ul>
      </Col>
      <Col span={10}>
        {!!data?.country.states.length && (
          <Row>
            <Text>Provincias: ({data?.country.states.length})</Text>
            <ul>
              {data?.country.states?.map(
                ({ name }: { name: string }, i: number) => (
                  <li key={i}>{name}</li>
                )
              )}
            </ul>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default CountryPage;
