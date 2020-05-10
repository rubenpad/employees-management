import React from 'react';
import { Helmet } from 'react-helmet';
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
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true, email: login.email } });
    },
  });

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Container>
        <LoginForm login={login} loading={loading} error={error} />
      </Container>
    </>
  );
};

export default Login;
