import React from 'react';

import EmployeeForm from '../../components/Forms/EmployeeForm';
import { Container } from './styles';

const NewEmployee = () => {
  return (
    <Container>
      <EmployeeForm title="Register a new employee" />
    </Container>
  );
};

export default NewEmployee;
