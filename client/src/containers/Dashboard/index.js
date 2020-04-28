import React from 'react';

import Sidebar from '../../components/Sidebar';
import EmployeesList from '../../components/EmployeesList';

import { DashboardContainer } from './styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <EmployeesList />
    </DashboardContainer>
  );
};

export default Dashboard;
