import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LIST_SELECTED_COUNTRY } from '../queries/allCountriesQuery';
import CountryPage from './CountryPage';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const mockCountries = [
  {
    request: {
      query: LIST_SELECTED_COUNTRY,
    },
  },
];

it('should render country', async () => {
  const mockSelectedCountry = [
    {
      request: {
        query: LIST_SELECTED_COUNTRY,
        variables: {
          countryCode: 'AR',
        },
      },
      result: {
        data: {
          country: {
            code: 'AR',
            name: 'Argentina',
            continent: {
              name: 'South America',
              code: 'SA',
              __typename: 'Continent',
            },
            native: 'Argentina',
            capital: 'Buenos Aires',
            emoji: '🇦🇷',
            currency: 'ARS',
            states: [
              {
                name: 'Ciudad Autónoma de Buenos Aires',
                __typename: 'State',
              },
              {
                name: 'Buenos Aires',
                __typename: 'State',
              },
              {
                name: 'Catamarca',
                __typename: 'State',
              },
              {
                name: 'Chaco',
                __typename: 'State',
              },
              {
                name: 'Chubut',
                __typename: 'State',
              },
              {
                name: 'Córdoba',
                __typename: 'State',
              },
              {
                name: 'Corrientes',
                __typename: 'State',
              },
              {
                name: 'Entre Ríos',
                __typename: 'State',
              },
              {
                name: 'Formosa',
                __typename: 'State',
              },
              {
                name: 'Jujuy',
                __typename: 'State',
              },
              {
                name: 'La Pampa',
                __typename: 'State',
              },
              {
                name: 'La Rioja',
                __typename: 'State',
              },
              {
                name: 'Mendoza',
                __typename: 'State',
              },
              {
                name: 'Misiones',
                __typename: 'State',
              },
              {
                name: 'Neuquén',
                __typename: 'State',
              },
              {
                name: 'Río Negro',
                __typename: 'State',
              },
              {
                name: 'Salta',
                __typename: 'State',
              },
              {
                name: 'San Juan',
                __typename: 'State',
              },
              {
                name: 'San Luis',
                __typename: 'State',
              },
              {
                name: 'Santa Cruz',
                __typename: 'State',
              },
              {
                name: 'Santa Fe',
                __typename: 'State',
              },
              {
                name: 'Santiago del Estero',
                __typename: 'State',
              },
              {
                name: 'Tierra del Fuego, Antártida e Islas del Atlántico Sur',
                __typename: 'State',
              },
              {
                name: 'Tucumán',
                __typename: 'State',
              },
            ],
            languages: [
              {
                code: 'es',
                name: 'Spanish',
                __typename: 'Language',
              },
              {
                code: 'gn',
                name: 'Guarani',
                __typename: 'Language',
              },
            ],
            __typename: 'Country',
          },
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mockSelectedCountry} addTypename={false}>
      <MemoryRouter initialEntries={['/country/AR']}>
        <Routes>
          <Route path='/country'>
            <Route path=':code' element={<CountryPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    </MockedProvider>
  );
  expect(await screen.findByText('CARGANDO...')).toBeInTheDocument();
  expect(await screen.findByText('Volver')).toBeInTheDocument();
});

it('loading view while fetching data', async () => {
  render(
    <MockedProvider mocks={mockCountries} addTypename={false}>
      <Router>
        <CountryPage />
      </Router>
    </MockedProvider>
  );
  expect(await screen.findByText('CARGANDO...')).toBeInTheDocument();
});

it('error view when fetching is failed', async () => {
  const errorMock = [
    {
      request: {
        query: LIST_SELECTED_COUNTRY,
        variables: {
          countryCode: 'BR',
        },
      },
      error: new Error('An error occurred'),
    },
  ];
  render(
    <MockedProvider mocks={errorMock} addTypename={false}>
      <Router>
        <CountryPage />
      </Router>
    </MockedProvider>
  );
  expect(
    await screen.findByText('No se pudo obtener el país')
  ).toBeInTheDocument();
});
