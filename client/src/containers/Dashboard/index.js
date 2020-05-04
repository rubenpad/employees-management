import React, { useState, useMemo } from 'react';

import Sidebar from '../../components/Sidebar';
import EmployeesList from '../../components/EmployeesList';
import { DashboardContainer } from './styles';

import employeesMock from '../../__mocks__/employeesMock';

const Dashboard = () => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    // Destructuring properties from the event target
    // in this case is about checkbox inputs
    const { name, checked } = event.target;
    setCheckedItems({ ...checkedItems, [name]: checked });
  };

  const filteredEmployees = employeesMock.filter(employee => {
    const { category } = employee;
    const keys = Object.keys(checkedItems);

    if (keys.includes(category) && checkedItems[category] === true) {
      return employee;
    }
  });

  return (
    <DashboardContainer>
      <Sidebar handleChange={handleChange} />
      <EmployeesList
        employees={filteredEmployees.length ? filteredEmployees : employeesMock}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
