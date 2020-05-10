import React from 'react';
import { Helmet } from 'react-helmet';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import SignupForm from '../../components/Forms/SignupForm';
import { Container } from './styles';

const SIGNUP = gql`
  mutation signup($input: CompanyCredentials!) {
    signup(input: $input) {
      message
    }
  }
`;

const Signup = () => {
  const [signup, { loading, error }] = useMutation(SIGNUP, {
    onCompleted({ signup }) {
      window.location.href = '/login';
    },
  });

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <Container>
        <SignupForm loading={loading} error={error} signup={signup} />
      </Container>
    </>
  );
};

export default Signup;
