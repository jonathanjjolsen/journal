import {gql} from 'apollo-server';

const typeDefs = gql`
    type Entry {
        id: ID!
        createdAt: String!
        body: String!
    }

    input EntryInput {
        body: String!
    }

    type Query {
        getEntries(entry: ID!): [Entry]
    }

    type Mutation {
        createEntry(body: String!): Entry!
        deleteEntry(entryId: ID!): String!
        editEntry(entryId: ID!, body: String!): Entry!
    }
`;

export default typeDefs;