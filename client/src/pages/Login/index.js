import React from 'react';
import { useApolloClient, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoginForm from '../../components/Forms/LoginForm';
import { Container } from './styles';

const LOGIN = gql`
  mutation login($input: CompanyCredentials!) {
    login(input: $input) {
      token
      email
    }
  }
`;

const Login = () => {
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ token, email }) {
      localStorage.setItem('token', token);
      client.writeData({ data: { isLoggedIn: true, email } });
    },
  });

  return (
    <Container>
      <LoginForm login={login} loading={loading} error={error} />
    </Container>
  );
};

export default Login;
