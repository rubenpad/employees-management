import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import EmployeesList from '../../components/EmployeesList';

const employeesMock = [
  {
    id: 1,
    firstName: 'Mark',
    lastName: 'Manson',
    email: 'manson@mail.com',
    salary: 4000,
    status: 'Active',
    city: 'New York',
    companyId: 1,
  },
];

describe('EmployeesList component tests', () => {
  let employeesList;

  beforeEach(() => {
    employeesList = mount(
      // See https://reacttraining.com/react-router/web/guides/testing
      <MemoryRouter>
        <EmployeesList employees={employeesMock} />
      </MemoryRouter>
    );
  });

  test('Should render the EmployeesList component', () => {
    expect(employeesList.length).toBe(1);
  });

  test('Should renders the employees list', () => {
    expect(employeesList.find('ul').children()).toHaveLength(
      employeesMock.length
    );
  });

  test('Should has a button to add a new employee', () => {
    expect(
      employeesList.containsMatchingElement(
        <a href="/employees/new">Register Employee</a>
      )
    ).toBe(true);
  });
});
