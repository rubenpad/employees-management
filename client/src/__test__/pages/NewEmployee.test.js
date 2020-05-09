import React from 'react';
import { mount } from 'enzyme';
import NewEmployee from '../../pages/NewEmployee';
import EmployeeForm from '../../components/Forms/EmployeeForm';

describe('Register container tests', () => {
  test('Register should renders the CommonForm component', () => {
    const register = mount(<NewEmployee />);
    expect(register.find(EmployeeForm)).toHaveLength(1);
  });
});
