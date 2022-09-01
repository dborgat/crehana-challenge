import { gql } from '@apollo/client';

export const LIST_ALL_COUNTRIES_AND_CONTINENTS = gql`
query GetAllCountriesAndContinents
  {
    countries {
      code
      name
      continent{
        name
        code
      }
      native
      capital
      emoji
      currency
      states{
        name
      }
      languages {
        code
        name
      }
    }
    continents {
      code
      name
    }
  }
`;

export const LIST_SELECTED_COUNTRY = gql`
  query GetCountry($countryCode: ID!){
    country(code: $countryCode) {
      code
      name
      continent{
        name
        code
      }
      native
      capital
      emoji
      currency
      states{
        name
      }
      languages {
        code
        name
      }
    }
  }
`
export const LIST_SELECTED_COUNTINENT = gql`
  query GetContinent($continentCode: ID!){
    continent(code: $continentCode) {
      name
      code
      countries
        {
          code
          name
          native
          capital
          currency
          languages
          {
            code
            name
          }
          emoji
          states
          {
            name
            code
          }
          
        }
      }
  }
`

