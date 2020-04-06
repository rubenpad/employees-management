import React from 'react';
import PropTypes from 'prop-types';
import EmployeesListItem from '../EmployeesListItem';

const EmployeesList = ({ employees }) => {
  return (
    <div>
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
    </div>
  );
};

EmployeesList.defaultProps = {
  employees: [],
};

EmployeesList.propTypes = {
  employees: PropTypes.arrayOf(PropTypes.object),
};

export default EmployeesList;
