import React from 'react';
import SearchAllCountries from './SearchAllCountries';
import FilterByContinent from './FilterByContinent';
import FilterByCurrencies from './FilterByCurrencies';

function CountrySelect() {
  return (
    <>
      <SearchAllCountries />
      <FilterByContinent />
      <FilterByCurrencies />
    </>
  );
}

export default CountrySelect;
