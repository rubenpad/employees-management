import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import EmployeesListItem from '../EmployeesListItem';

import { Container, Top, SearchLabel, Link } from './styles';

const EmployeesList = ({ employees }) => {
  const [query, setQuery] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  // Filter employees by first name and last name
  useMemo(() => {
    const results = employees.filter(employee => {
      return `${employee.firstName} ${employee.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setFilteredEmployees(results);
  }, [employees, query]);

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
            placeholder="Search..."
          />
        </SearchLabel>
        <Link to="/employees/new">Register Employee</Link>
      </Top>
      <ul>
        {filteredEmployees.map(employee => (
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
