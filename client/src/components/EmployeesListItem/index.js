import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Avatar from '../Avatar';
import { ItemContainer, ItemContent, Information, Action } from './styles';

const EmployeesListItem = ({ employee }) => {
  return (
    <ItemContainer>
      <ItemContent>
        <Avatar email={employee.email} />
        <Information>
          <h2>{`${employee.firstName} ${employee.lastName}`}</h2>
          <span>{`USD ${employee.salary}`}</span>
          <span>{employee.status}</span>
          <span>{employee.city}</span>
        </Information>
        <Action>
          <Link to={`/employees/edit/${employee.id}`}>EDIT</Link>
          <button type="button">DELETE</button>
        </Action>
      </ItemContent>
    </ItemContainer>
  );
};

EmployeesListItem.defaultProps = {
  employee: {},
};

EmployeesListItem.propTypes = {
  employee: PropTypes.object,
};

export default EmployeesListItem;
