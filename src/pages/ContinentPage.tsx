//External components
import { Card, Divider, Row, Typography, List, Result, Spin, Col } from 'antd';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';

//Internal components
import { LIST_SELECTED_COUNTINENT } from '../queries/allCountriesQuery';

const { Text, Title } = Typography;

const ContinentPage = () => {
  const { code } = useParams();
  const { data, loading, error } = useQuery(LIST_SELECTED_COUNTINENT, {
    variables: {
      continentCode: code,
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
    <Row>
      <Col span={24}>
        <Title level={3}>Continente seleccionado: {data?.continent.name}</Title>
      </Col>
      <Col span={24}>
        <Title level={3}>Codigo: {data?.continent.code}</Title>
      </Col>
      <Col span={24}>
        <Title level={3}>Paises: ({data?.continent.countries.length})</Title>
      </Col>
    </Row>
  );
};

export default ContinentPage;
