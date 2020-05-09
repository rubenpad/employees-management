import React from 'react';

import EmployeeForm from '../../components/Forms/EmployeeForm';
import { Container } from './styles';

const EditEmployee = () => {
  return (
    <Container>
      <EmployeeForm title="Edit employee data" />
    </Container>
  );
};

export default EditEmployee;
