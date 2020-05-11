import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { typeDefs, resolvers } from './graphql/resolvers';

const URI =
  process.env.NODE_ENV === 'production'
    ? process.env.URI
    : 'http://localhost:4000/graphql';

const container = document.getElementById('root');
const token = localStorage.getItem('token');
const cache = new InMemoryCache();

// Initial state
const data = {
  isLoggedIn: !!token,
  email: '',
};

// Helper function to set data in cache
const setState = data => {
  return cache.writeData({ data });
};

// Initialize cache with initial state
setState(data);

const client = new ApolloClient({
  cache,
  typeDefs,
  resolvers,
  link: new HttpLink({
    uri: URI,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  }),
});

// Function that get called when client.restoreCache function
// is called in our application
client.onResetStore(() => {
  setState({ data });
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  container
);
