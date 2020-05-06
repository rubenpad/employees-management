import React from 'react';

import EmployeeForm from '../../components/Forms/EmployeeForm';
import { RegisterContainer } from './styles';

const Register = () => {
  return (
    <RegisterContainer>
      <EmployeeForm title="Register a new employee" />
    </RegisterContainer>
  );
};

export default Register;
