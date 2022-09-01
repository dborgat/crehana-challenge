//External components
import { Spin, Row, Result } from 'antd';
import { useQuery } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Internal components
import { LIST_ALL_COUNTRIES_AND_CONTINENTS } from './queries/allCountriesQuery';
import ContextProvider from './context/ContextProvider';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import ContinentPage from './pages/ContinentPage';
import CurrencyPage from './pages/CurrencyPage';

//Styles
import './styles/index.scss';
import 'antd/dist/antd.css';

function App() {
  const { loading, error } = useQuery(LIST_ALL_COUNTRIES_AND_CONTINENTS);

  if (loading || error) {
    return (
      <Row className='loadView' justify='center' align='middle'>
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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/country'>
            <Route path=':code' element={<CountryPage />} />
          </Route>
          <Route path='/continent'>
            <Route path=':code' element={<ContinentPage />} />
          </Route>
          <Route path='/currency'>
            <Route path=':code' element={<CurrencyPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
