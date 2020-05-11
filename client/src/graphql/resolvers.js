import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
    email: String!
    categories: [Category]
    employees: [Employee]
  }
`;

export const resolvers = (getState, setState) => {
  return {
    Mutation: {
      updateEmployees: (_root, { id }, { cache }) => {
        console.log(id);
      },
    },
  };
};
