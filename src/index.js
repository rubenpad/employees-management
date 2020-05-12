import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const URI =
  process.env.NODE_ENV === 'production'
    ? process.env.URI
    : 'http://localhost:4000/graphql';

const container = document.getElementById('root');

const client = new ApolloClient({
  uri: URI,
  clientState: {
    defaults: {
      isLoggedIn: !!localStorage.getItem('token'),
      email: '',
    },
  },
  request: operation => {
    const token = localStorage.getItem('token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  onError: error => {
    const { networkError } = error;

    if (networkError && networkError.result.code === 'invalid_token') {
      localStorage.clear();
      window.location.href = '/login';
    }
  },
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  container
);
