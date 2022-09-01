import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';

import { LIST_ALL_COUNTRIES_AND_CONTINENTS } from '../queries/allCountriesQuery';
import ContextProvider from './ContextProvider';

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };

const mockCountriesAndContinentData = [
  {
    request: {
      query: LIST_ALL_COUNTRIES_AND_CONTINENTS,
    },
  },
];

it('loading view while fetching data', async () => {
  render(
    <MockedProvider mocks={mockCountriesAndContinentData} addTypename={false}>
      <ContextProvider />
    </MockedProvider>
  );
  expect(await screen.findByText('CARGANDO...')).toBeInTheDocument();
});

it('error view when fetching is failed', async () => {
  const errorMock = [
    {
      request: {
        query: LIST_ALL_COUNTRIES_AND_CONTINENTS,
      },
      error: new Error('An error occurred'),
    },
  ];
  render(
    <MockedProvider mocks={errorMock} addTypename={false}>
      <ContextProvider />
    </MockedProvider>
  );
  expect(
    await screen.findByText('No se pudo obtener el país')
  ).toBeInTheDocument();
});
