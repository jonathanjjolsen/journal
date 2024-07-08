import { gql } from '@apollo/client';

export const ADD_ENTRY = gql`
  mutation createEntry($content: String!) {
    createEntry(content: $content) {
      id
      content
      createdAt
    }
  }
`;