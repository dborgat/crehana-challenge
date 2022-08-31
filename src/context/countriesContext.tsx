import { createContext } from 'react';
import { SelectedCountryContext } from '../types'



const CountryContext = createContext<Partial<SelectedCountryContext>>({})

export default CountryContext;
