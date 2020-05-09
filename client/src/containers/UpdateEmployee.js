import React from 'react';
import { useQuery, useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import EmployeeForm from '../components/Forms/EmployeeForm';

const GET_DATA = gql`
  query getEmployee($id: ID!) {
    employee(id: $id) {
      id
      firstName
      lastName
      email
      salary
      city
      status
      categoryId
    }

    categories {
      id
      name
    }
  }
`;

const UPDATE_EMPLOYEE = gql`
  mutation updateEmployee($id: ID!, $input: EmployeeInput!) {
    updateEmployee(id: $id, input: $input) {
      success
    }
  }
`;

const UpdateEmployee = ({ id }) => {
  const { data, loading, error } = useQuery(GET_DATA, { variables: { id } });
  const [updateEmployee, mutation] = useMutation(UPDATE_EMPLOYEE, {
    variables: { id },
    onCompleted(_) {
      window.location.href = '/employees';
    },
  });

  if (error) return <p>Unexpected error</p>;

  if (loading) return <p>Loading...</p>;

  return (
    <EmployeeForm
      data={data}
      createOrUpdateEmployee={updateEmployee}
      loading={mutation.loading}
      error={mutation.error}
      title="Update employee"
    />
  );
};

export default UpdateEmployee;
