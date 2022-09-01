import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { BrowserRouter as Router } from 'react-router-dom';

import { LIST_ALL_COUNTRIES_AND_CONTINENTS } from '../queries/allCountriesQuery';
import HomePage from './HomePage';

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

it('renders without error', async () => {
  render(
    <MockedProvider mocks={mockCountriesAndContinentData} addTypename={false}>
      <Router>
        <HomePage />
      </Router>
    </MockedProvider>
  );
  expect(await screen.findByText('Crehana Challenge')).toBeInTheDocument();
});
