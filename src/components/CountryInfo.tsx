//External components
import { useContext } from 'react';
import { Row, Col, Typography, Divider } from 'antd';

//Internal components
import ListOfCountrySelected from './ListOfCountrySelected';
import CountryContext from '../context/countriesContext';

const { Title } = Typography;

function CountryInfo() {
  const { filterObject } = useContext(CountryContext);

  return (
    <Row gutter={[16, 48]}>
      <Col span={24}>
        <Title level={1}>País seleccionado</Title>
        {!filterObject?.country?.length ? (
          <Title level={4}>Por favor, seleccione un país.</Title>
        ) : (
          <ListOfCountrySelected data={filterObject?.country} />
        )}
      </Col>
      <Divider />
      <Col span={24}>
        <Title level={1}>Continente seleccionado</Title>
        {!filterObject?.continent?.length ? (
          <Title level={4}>Por favor, seleccione un continente. </Title>
        ) : (
          <ListOfCountrySelected data={filterObject?.continent} />
        )}
      </Col>
      <Divider />
      <Col span={24}>
        <Title level={1}>Moneda seleccionada</Title>
        {!filterObject?.currency?.length ? (
          <Title level={4}>Por favor, seleccione una moneda. </Title>
        ) : (
          <ListOfCountrySelected data={filterObject?.currency} />
        )}
      </Col>
    </Row>
  );
}

export default CountryInfo;
