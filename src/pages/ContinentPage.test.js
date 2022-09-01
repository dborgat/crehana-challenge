import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import {
  BrowserRouter as Router,
  MemoryRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LIST_SELECTED_COUNTINENT } from '../queries/allCountriesQuery';
import ContinentPage from './ContinentPage';

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
      query: LIST_SELECTED_COUNTINENT,
    },
  },
];

it('should render Continent view', async () => {
  const mockSelectedCountry = [
    {
      request: {
        query: LIST_SELECTED_COUNTINENT,
        variables: {
          continentCode: 'AN',
        },
      },
      result: {
        data: {
          continent: {
            name: 'Antarctica',
            code: 'AN',
            countries: [
              {
                code: 'AQ',
                name: 'Antarctica',
                native: 'Antarctica',
                capital: null,
                currency: null,
                languages: [],
                emoji: '🇦🇶',
                states: [],
                __typename: 'Country',
              },
              {
                code: 'BV',
                name: 'Bouvet Island',
                native: 'Bouvetøya',
                capital: null,
                currency: 'NOK',
                languages: [
                  {
                    code: 'no',
                    name: 'Norwegian',
                    __typename: 'Language',
                  },
                  {
                    code: 'nb',
                    name: 'Norwegian Bokmål',
                    __typename: 'Language',
                  },
                  {
                    code: 'nn',
                    name: 'Norwegian Nynorsk',
                    __typename: 'Language',
                  },
                ],
                emoji: '🇧🇻',
                states: [],
                __typename: 'Country',
              },
              {
                code: 'GS',
                name: 'South Georgia and the South Sandwich Islands',
                native: 'South Georgia',
                capital: 'King Edward Point',
                currency: 'GBP',
                languages: [
                  {
                    code: 'en',
                    name: 'English',
                    __typename: 'Language',
                  },
                ],
                emoji: '🇬🇸',
                states: [],
                __typename: 'Country',
              },
              {
                code: 'HM',
                name: 'Heard Island and McDonald Islands',
                native: 'Heard Island and McDonald Islands',
                capital: null,
                currency: 'AUD',
                languages: [
                  {
                    code: 'en',
                    name: 'English',
                    __typename: 'Language',
                  },
                ],
                emoji: '🇭🇲',
                states: [],
                __typename: 'Country',
              },
              {
                code: 'TF',
                name: 'French Southern Territories',
                native: 'Territoire des Terres australes et antarctiques fr',
                capital: 'Port-aux-Français',
                currency: 'EUR',
                languages: [
                  {
                    code: 'fr',
                    name: 'French',
                    __typename: 'Language',
                  },
                ],
                emoji: '🇹🇫',
                states: [],
                __typename: 'Country',
              },
            ],
            __typename: 'Continent',
          },
        },
      },
    },
  ];

  render(
    <MockedProvider mocks={mockSelectedCountry} addTypename={false}>
      <MemoryRouter initialEntries={['/continent/AN']}>
        <Routes>
          <Route path='/continent'>
            <Route path=':code' element={<ContinentPage />} />
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
        <ContinentPage />
      </Router>
    </MockedProvider>
  );
  expect(await screen.findByText('CARGANDO...')).toBeInTheDocument();
});

it('error view when fetching is failed', async () => {
  const errorMock = [
    {
      request: {
        query: LIST_SELECTED_COUNTINENT,
        variables: {
          continentCode: 'AF',
        },
      },
      error: new Error('An error occurred'),
    },
  ];
  render(
    <MockedProvider mocks={errorMock} addTypename={false}>
      <Router>
        <ContinentPage />
      </Router>
    </MockedProvider>
  );
  expect(
    await screen.findByText('No se pudo obtener el continente')
  ).toBeInTheDocument();
});
