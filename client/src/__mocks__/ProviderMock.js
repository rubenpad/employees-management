import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MockedProvider, MockLink } from '@apollo/react-testing';
import { GET_EMAIL } from '../components/Header';

const mocks = [
  {
    request: {
      query: GET_EMAIL,
    },
    result: {
      data: {
        email: 'mail@mail.com',
      },
    },
  },
];

const ProviderMock = props => (
  <MockedProvider link={MockLink} mocks={mocks} addTypename={false}>
    <MemoryRouter>{props.children}</MemoryRouter>
  </MockedProvider>
);

export default ProviderMock;
