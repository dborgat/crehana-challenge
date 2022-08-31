import { gql } from '@apollo/client';

export const LIST_ALL_COUNTRIES_AND_CONTINENTS = gql`
  {
    countries {
      code
      name
      native
      continent {
        code
        name
      }
      capital
      currency
      languages {
        name
        native
        code
      }
      states {
        name
      }
      emoji
    }
    continents {
      code
      name
      countries {
        code
        name
        capital
        native
        languages {
          name
          native
        }
        emoji
      }
    }
  }
`;
