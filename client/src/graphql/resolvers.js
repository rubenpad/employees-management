import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    email: String!
    categories: [Category]
  }
`;

export const resolvers = {};
