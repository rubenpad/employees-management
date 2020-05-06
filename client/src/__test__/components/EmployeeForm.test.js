import React from 'react';
import { mount } from 'enzyme';
import EmployeeForm from '../../components/Forms/EmployeeForm';

describe('EmployeeForm component tests', () => {
  let employeeForm = null;

  beforeEach(() => {
    employeeForm = mount(<EmployeeForm title="Register a new employee" />);
  });

  test('Should renders the EmployeeForm component', () => {
    expect(employeeForm.length).toBe(1);
  });

  test('Should renders the form title in a h2 tag', () => {
    expect(employeeForm.find('h2')).toHaveLength(1);
    expect(employeeForm.find('h2').text()).toBe('Register a new employee');
  });

  test('Should renders the inputs needed to register the employee with its respective label tag', () => {
    expect(employeeForm.find('label')).toHaveLength(8);
    expect(employeeForm.find('input')).toHaveLength(5);
    expect(employeeForm.find('select')).toHaveLength(3);
  });

  test('Should renders the submit button', () => {
    expect(employeeForm.find('button')).toHaveLength(1);
    expect(employeeForm.find('button').text()).toBe('Register a new employee');
  });
});
