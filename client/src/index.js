import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { typeDefs, resolvers } from './graphql/resolvers';

const container = document.getElementById('root');
const token = localStorage.getItem('token');
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  resolvers,
  typeDefs,
  link: new HttpLink({
    uri: process.env.URI,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  }),
  onError: error => {
    if (error && error.networkError.result.code === 'invalid_token') {
      localStorage.clear();
      window.location.href = '/login';
    }
  },
});

cache.writeData({
  data: {
    isLoggedIn: !!token,
    email: '',
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  container
);
