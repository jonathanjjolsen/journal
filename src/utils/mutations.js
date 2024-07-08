import { gql } from '@apollo/client';

export const ADD_ENTRY = gql`
  mutation CreateEntry($body: String!) {
    createEntry(body: $body) {
      id
      body
      createdAt
    }
  }
`;