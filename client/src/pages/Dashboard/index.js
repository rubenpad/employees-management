import React, { useState, useMemo } from 'react';

import Sidebar from '../../components/Sidebar';
import EmployeesList from '../../components/EmployeesList';
import { DashboardContainer } from './styles';

const Dashboard = ({ employees, categories }) => {
  const [checkedItems, setCheckedItems] = useState({});

  const handleChange = event => {
    // Destructuring properties from the event target
    // in this case is about checkbox inputs
    const { id, checked } = event.target;
    setCheckedItems({ ...checkedItems, [id]: checked });
  };

  const filteredEmployees = employees.filter(employee => {
    const { categoryId } = employee;
    const keys = Object.keys(checkedItems);

    if (keys.includes(categoryId) && checkedItems[categoryId] === true) {
      return employee;
    }
  });

  return (
    <DashboardContainer>
      <Sidebar handleChange={handleChange} categories={categories} />
      <EmployeesList
        employees={filteredEmployees.length ? filteredEmployees : employees}
      />
    </DashboardContainer>
  );
};

export default Dashboard;
