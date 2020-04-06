import React from 'react';

import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import EmployeesList from '../../components/EmployeesList';

import { DashboardContainer } from './styles';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header />
      <Sidebar />
      <EmployeesList />
    </DashboardContainer>
  );
};

export default Dashboard;
