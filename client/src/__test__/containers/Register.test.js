import React from 'react';
import { mount } from 'enzyme';
import Register from '../../containers/Register';
import EmployeeForm from '../../components/Forms/EmployeeForm';

describe('Register container tests', () => {
  test('Register should renders the CommonForm component', () => {
    const register = mount(<Register />);
    expect(register.find(EmployeeForm)).toHaveLength(1);
  });
});
