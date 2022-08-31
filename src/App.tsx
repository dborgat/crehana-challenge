//External components
import { Layout, Spin, Row, Result } from 'antd';
import { useQuery } from '@apollo/client';

//Internal components
import { LIST_ALL_COUNTRIES_AND_CONTINENTS } from './queries/allCountriesQuery';
import ContextProvider from './context/ContextProvider';
import CountrySelectHeader from './components/CountrySelectHeader';
import CountryInfo from './components/CountryInfo';

//Styles
import 'antd/dist/antd.css';

const { Header, Content } = Layout;

function App() {
  const { loading, error } = useQuery(LIST_ALL_COUNTRIES_AND_CONTINENTS);

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
            title='No se pudo obtener la lista de países'
            subTitle='Lo lamento, por favor intente más tarde.'
          />
        ) : (
          <Spin size='large' />
        )}
      </Row>
    );
  }

  return (
    <ContextProvider>
      <Layout>
        <Header
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: 50,
          }}
        >
          <CountrySelectHeader />
        </Header>
        <Content style={{ height: 'auto', minHeight: '100vh', padding: 50 }}>
          <CountryInfo />
        </Content>
      </Layout>
    </ContextProvider>
  );
}

export default App;
