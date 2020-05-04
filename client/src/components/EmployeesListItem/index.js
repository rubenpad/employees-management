import React from 'react';
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
          <span>{employee.position}</span>
          <span>{employee.salary}</span>
          <span>
            {`${employee.createdAt} - ${
              employee.isActive ? 'Active' : employee.updatedAt
            }`}
          </span>
        </Information>
        <Action>
          <a href="/employees/edit">EDIT</a>
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
