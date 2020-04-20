import React from 'react';

import CommonForm from '../../components/CommonForm';
import { RegisterContainer } from './styles';

const Register = () => {
  return (
    <RegisterContainer>
      <CommonForm title="Register a new employee" />
    </RegisterContainer>
  );
};

export default Register;
