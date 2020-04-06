import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '../Avatar';

const EmployeesListItem = ({ employee }) => {
  return (
    <div>
      <div>
        <Avatar email={employee.email}/>
        <div>
          <h2>{employee.name}</h2>
          <span>{employee.jobTitle}</span>
          <span>{employee.salary}</span>
          <span>{employee.isActive}</span>
        </div>
        <div>
          <button type="button">EDIT</button>
          <button type="button">DELETE</button>
        </div>
      </div>
    </div>
  );
};

EmployeesListItem.defaultProps = {
  employee: {},
};

EmployeesListItem.propTypes = {
  employee: PropTypes.object,
};

export default EmployeesListItem;
