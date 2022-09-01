//External components
import { Divider, Row, Typography, Col, Button, Result, Spin } from 'antd';
import { useQuery } from '@apollo/client';
import { useParams, Link, useNavigate } from 'react-router-dom';

//Internal components
import { LIST_SELECTED_COUNTINENT } from '../queries/allCountriesQuery';
import LoadingOrErrorView from '../components/LoadingOrErrorView';
import { Country } from '../types';

const { Text, Title } = Typography;

const ContinentPage = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const { data, loading, error } = useQuery(LIST_SELECTED_COUNTINENT, {
    variables: {
      continentCode: code,
    },
  });

  if (loading || error) {
    return (
      <Row className='loadView' justify='center' align='middle'>
        {error ? (
          <Result
            status='404'
            title='No se pudo obtener el continente'
            subTitle='Lo lamento, por favor intente más tarde.'
          />
        ) : (
          <>
            <Spin size='large' />
            <h1>CARGANDO...</h1>
          </>
        )}
      </Row>
    );
    }

  return (
    <Row justify='center' align='middle' className='main-container'>
      <Row className='main-container__card'>
        <Button onClick={() => navigate('/')}>Volver</Button>
        <Col span={24}>
          <Title level={1}>Continente: {data?.continent.name}</Title>
        </Col>
        <Divider />
        <Col span={24}>
          <Title level={3}>Codigo: {data?.continent.code}</Title>
        </Col>
        <Col span={24}>
          <Title level={3}>Paises: ({data?.continent.countries.length})</Title>
          {data?.continent.countries.map((country: Country) => (
            <Row
              className='main-container__mini-card'
              justify='center'
              align='middle'
              key={country.emoji}
            >
              <Text>
                {country.emoji} -{' '}
                <Link to={`/country/${country.code}`}>{country.name}</Link> -
                {country.capital}
              </Text>
            </Row>
          ))}
        </Col>
      </Row>
    </Row>
  );
};

export default ContinentPage;
