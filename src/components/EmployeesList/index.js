import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EmployeesListItem from '../EmployeesListItem';

import employeesMock from '../../__mocks__/employeesMock';

import { Container, Top, SearchLabel, Button } from './styles';

const EmployeesList = ({ employees }) => {
  const [query, setQuery] = useState('');

  const onChange = event => setQuery(event.target.value);

  return (
    <Container>
      <Top>
        <SearchLabel>
          Search an employee
          <input
            type="text"
            value={query}
            onChange={onChange}
            placeholder="Search an employee..."
          />
        </SearchLabel>
        <Button>Register Employee</Button>
      </Top>
      <ul>
        {employeesMock.map(employee => (
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
