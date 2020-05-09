import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import EmployeeForm from '../../components/Forms/EmployeeForm';
import { Container } from './styles';

const CREATE_EMPLOYEE = gql`
  mutation createEmployee($input: EmployeeInput!) {
    createEmployee(input: $input) {
      success
      error
      message
    }
  }
`;

const NewEmployee = () => {
  const [createEmployee, { loading, error }] = useMutation(CREATE_EMPLOYEE, {
    onCompleted(_) {
      window.location.href = '/employees';
    },
  });

  return (
    <Container>
      <EmployeeForm
        createOrUpdateEmployee={createEmployee}
        loading={loading}
        error={error}
        title="Register a new employee"
      />
    </Container>
  );
};

export default NewEmployee;
