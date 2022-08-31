//External components
import { Card, Divider, Row, Typography, List } from 'antd';

//Internal components
import { Country } from '../types';
const { Text } = Typography;

interface Props {
  data: Array<Country>;
}

const ListOfCountrySelected = ({ data }: Props) => {
  return (
    <List
      grid={{ gutter: 16, column: 2 }}
      dataSource={data}
      renderItem={({
        code,
        name,
        capital,
        emoji,
        currency,
        languages,
        states,
        continent,
      }) => (
        <List.Item key={name}>
          <Card
            title={`${name} - ${code} - ${emoji}`}
            size='small'
            headStyle={{ display: 'flex', justifyContent: 'center' }}
            bodyStyle={{ padding: 20 }}
          >
            <Row>
              <Text>Capital: {capital}</Text>
            </Row>
            <Divider />
            <Row>
              <Text>Moneda: {currency}</Text>
            </Row>
            <Divider />
            <Row>
              <Text>Continente: {continent.name}</Text>
            </Row>
            <Divider />
            <Row>
              <Text>Idiomas:</Text>
              <ul>
                {languages.map(({ code, name }) => (
                  <li key={code}>{name}</li>
                ))}
              </ul>
            </Row>
            {!!states.length && (
              <Row>
                <Divider />
                <Text>Provincias:</Text>
                <ul>
                  {states?.map(({ name }, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </Row>
            )}
          </Card>
        </List.Item>
      )}
    />
  );
};

export default ListOfCountrySelected;
