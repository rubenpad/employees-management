import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import DeleteEmployeeModal from '../components/Modals/DeleteEmployeeModal';

const DELETE_EMPLOYEE = gql`
  mutation($id: ID!) {
    deleteEmployee(id: $id) {
      success
      error
      message
    }
  }
`;

const DeleteEmployee = ({ employeeId, openModal, closeModal, modalMode }) => {
  const [deleteEmployee, { loading, error }] = useMutation(DELETE_EMPLOYEE, {
    variables: { id: employeeId },
    onCompleted(_) {
      window.location.reload();
    },
  });

  return (
    <DeleteEmployeeModal
      modalMode={modalMode}
      openModal={openModal}
      closeModal={closeModal}
      loading={loading}
      error={error}
      deleteEmployee={deleteEmployee}
    />
  );
};

export default DeleteEmployee;
