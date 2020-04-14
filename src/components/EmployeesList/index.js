import React from 'react';
import PropTypes from 'prop-types';
import EmployeesListItem from '../EmployeesListItem';

import { Container, Top, Button, Search } from './styles';

const EmployeesList = ({ employees }) => {
  return (
    <Container>
      <Top>
        <Search type="text" placeholder="Search an employee..." />
        <Button href="/employees/new">Register Employee</Button>
      </Top>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            <EmployeesListItem employee={employee} />
          </li>
        ))}
      </ul>
    </Container>
  );
};

EmployeesList.defaultProps = {
  employees: [],
};

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object),
};

export default EmployeesList;
