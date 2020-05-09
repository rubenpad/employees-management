import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks';
import React from 'react';
import ReactDOM from 'react-dom';

const cache = new InMemoryCache();
const link = new HttpLink({ uri: process.env.URI });
const client = new ApolloClient({ cache, link });

import App from './App';

const rootContainer = document.getElementById('root');

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootContainer
);
