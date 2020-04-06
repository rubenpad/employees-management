import React from 'react';
import { shallow } from 'enzyme';
import EmployeesListItem from '../../components/EmployeesListItem';
import Avatar from '../../components/Avatar';

describe('EmployeesListItem tests', () => {
  let employeesListItem;

  beforeEach(() => {
    employeesListItem = shallow(<EmployeesListItem />);
  });

  test('Should renders the EmployeesListItem component', () => {
    expect(employeesListItem.length).toBe(1);
  });

  test('Should has an Avatar component', () => {
    expect(employeesListItem.exists(Avatar)).toBe(true);
  });
});
