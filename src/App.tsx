//External components
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//Internal components
import ContextProvider from './context/ContextProvider';
import HomePage from './pages/HomePage';
import CountryPage from './pages/CountryPage';
import ContinentPage from './pages/ContinentPage';
import CurrencyPage from './pages/CurrencyPage';

//Styles
import './styles/index.scss';
import 'antd/dist/antd.css';

function App() {
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
