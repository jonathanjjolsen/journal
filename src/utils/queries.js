import { gql } from '@apollo/client';

export const GET_ENTRIES = gql`
  query GetEntries {
    getEntries {
      id
      body
      createdAt
    }
  }
`;