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
  // Provide an instance of apollo client to write if user company
  // is logged in and its email to show the avatar in header
  const client = useApolloClient();
  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted({ login }) {
      localStorage.setItem('token', login.token);
      client.writeData({ data: { isLoggedIn: true, email: login.email } });
    },
    // If login fail return the error
    onError(error) {
      return error;
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
