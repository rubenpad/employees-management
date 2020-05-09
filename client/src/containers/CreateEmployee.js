import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import EmployeeForm from '../components/Forms/EmployeeForm';

const CREATE_EMPLOYEE = gql`
  mutation createEmployee($input: EmployeeInput!) {
    createEmployee(input: $input) {
      success
      error
      message
    }
  }
`;

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
    }
  }
`;

const CreateEmployee = () => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const [createEmployee, mutation] = useMutation(CREATE_EMPLOYEE, {
    onCompleted(_) {
      window.location.href = '/employees';
    },
  });

  // Next are error and loading when fetching categories
  if (error) return <p>Unexpected error</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <EmployeeForm
      data={data}
      loading={mutation.loading}
      error={mutation.error}
      createOrUpdateEmployee={createEmployee}
      title="Create a new employee"
    />
  );
};

export default CreateEmployee;
