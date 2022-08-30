//External components
import { useContext } from 'react';
import { Card, Divider, Row, Col, Typography, List } from 'antd';

//Internal components
import CountryContext from '../context/countriesContext';

const { Text, Title } = Typography;

function CountryInfo() {
  const { filterArray } = useContext(CountryContext);

  return (
    <Row>
      <Col span={24}>
        <Title level={1}>Pais seleccionado</Title>
          {!filterArray?.country?.length ? (
            <Title level={2}>Seleccione un pais por favor</Title>
          ) : (
            <List
              grid={{ gutter: 16, column: 2 }}
              dataSource={filterArray?.country}
              renderItem={({
                name,
                capital,
                emoji,
                languages,
                states,
                continent,
              }) => (
                <List.Item key={name}>
                  <Card
                    title={`${name} - ${emoji}`}
                    size='small'
                    headStyle={{ display: 'flex', justifyContent: 'center' }}
                    bodyStyle={{ padding: 20 }}
                  >
                    <Row>
                      <Text>Capital: {capital}</Text>
                    </Row>
                    <Divider />
                    <Row>
                      <Text>Continente: {continent.name}</Text>
                    </Row>
                    <Divider />
                    <Row>
                      <Text>Idiomas</Text>
                      <ul>
                        {languages.map(({ code, name }) => (
                          <li key={code}>{name}</li>
                        ))}
                      </ul>
                    </Row>
                    {!!states.length && (
                      <Row>
                        <Divider />
                        <Text>Provincias</Text>
                        <ul>
                          {states?.map(({ name }) => (
                            <li key={name}>{name}</li>
                          ))}
                        </ul>
                      </Row>
                    )}
                  </Card>
                </List.Item>
              )}
            />
          )}
      </Col>
      <Col span={24}>
        <Title level={1}>Continente seleccionado</Title>
        {!filterArray?.continent?.length ? (
          <Title level={2}>Seleccione un continente por favor</Title>
        ) : (
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={filterArray?.continent}
            renderItem={({
              name,
              capital,
              emoji,
              languages,
              states,
              continent,
            }) => (
              <List.Item key={name}>
                <Card
                  title={`${name} - ${emoji}`}
                  size='small'
                  headStyle={{ display: 'flex', justifyContent: 'center' }}
                  bodyStyle={{ padding: 20 }}
                >
                  <Row>
                    <Text>Capital: {capital}</Text>
                  </Row>
                  <Divider />
                  <Row>
                    <Text>Continente: {continent.name}</Text>
                  </Row>
                  <Divider />
                  <Row>
                    <Text>Idiomas</Text>
                    <ul>
                      {languages.map(({ code, name }) => (
                        <li key={code}>{name}</li>
                      ))}
                    </ul>
                  </Row>
                  {!!states.length && (
                    <Row>
                      <Divider />
                      <Text>Provincias</Text>
                      <ul>
                        {states?.map(({ name }) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    </Row>
                  )}
                </Card>
              </List.Item>
            )}
          />
        )}
      </Col>
      <Col span={24}>
        <Title level={1}>Currency seleccionada</Title>
        {!filterArray?.currency?.length ? (
          <Title level={2}>Seleccione una currency por favor</Title>
        ) : (
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={filterArray?.currency}
            renderItem={({
              name,
              capital,
              emoji,
              languages,
              states,
              continent,
            }) => (
              <List.Item key={name}>
                <Card
                  title={`${name} - ${emoji}`}
                  size='small'
                  headStyle={{ display: 'flex', justifyContent: 'center' }}
                  bodyStyle={{ padding: 20 }}
                >
                  <Row>
                    <Text>Capital: {capital}</Text>
                  </Row>
                  <Divider />
                  <Row>
                    <Text>Continente: {continent.name}</Text>
                  </Row>
                  <Divider />
                  <Row>
                    <Text>Idiomas</Text>
                    <ul>
                      {languages.map(({ code, name }) => (
                        <li key={code}>{name}</li>
                      ))}
                    </ul>
                  </Row>
                  {!!states.length && (
                    <Row>
                      <Divider />
                      <Text>Provincias</Text>
                      <ul>
                        {states?.map(({ name }) => (
                          <li key={name}>{name}</li>
                        ))}
                      </ul>
                    </Row>
                  )}
                </Card>
              </List.Item>
            )}
          />
        )}
      </Col>
    </Row>
  );
}

export default CountryInfo;
