import { gql } from '@apollo/client';

export const ADD_ENTRY = gql`
  mutation AddEntry($content: String!) {
    addEntry(content: $content) {
      id
      content
      createdAt
    }
  }
`;