import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'node-fetch';
import { typeDefs, resolvers } from '../graphql/resolvers';


const token = localStorage.getItem('token');
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
  link: new HttpLink({
    uri: '/graphql',
    fetch,
  }),
});

cache.writeData({
  data: {
    isLoggedIn: !!token,
    email: '',
  },
});

const ProviderMock = props => (
  <ApolloProvider client={client}>
    <MemoryRouter>{props.children}</MemoryRouter>
  </ApolloProvider>
);

export default ProviderMock;
