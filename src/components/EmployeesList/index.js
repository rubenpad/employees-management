import React from 'react';
import PropTypes from 'prop-types';
import EmployeesListItem from '../EmployeesListItem';

import { Container } from './styles';

const EmployeesList = ({ employees }) => {
  return (
    <Container>
      <div>
        <a href="/employees/new">NEW EMPLOYEE</a>
      </div>
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
