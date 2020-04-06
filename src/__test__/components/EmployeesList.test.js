import React from 'react';
import { shallow } from 'enzyme';
import EmployeesList from '../../components/EmployeesList';
import employeesMock from '../../__mocks__/employeesMock';

describe('EmployeesList component tests', () => {
  let employeesList;

  beforeEach(() => {
    employeesList = shallow(<EmployeesList employees={employeesMock} />);
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
        <a href="/employees/new">NEW EMPLOYEE</a>
      )
    ).toBe(true);
  });
});
