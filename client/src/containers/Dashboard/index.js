import React from 'react';

import Sidebar from '../../components/Sidebar';
import EmployeesList from '../../components/EmployeesList';

import { DashboardContainer } from './styles';

import employeesMock from '../../__mocks__/employeesMock';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <EmployeesList employees={employeesMock} />
    </DashboardContainer>
  );
};

export default Dashboard;
