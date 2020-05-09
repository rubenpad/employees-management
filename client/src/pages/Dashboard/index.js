import React, { useState, useMemo } from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Loader from '../../components/Loader';
import GetDashboardData from '../../containers/GetDashboardData';
import { DashboardContainer } from './styles';

const GET_DATA = gql`
  query {
    employees {
      id
      firstName
      lastName
      email
      salary
      status
      city
    }

    categories {
      id
      name
    }
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_DATA);

  if (loading) return <Loader />;

  if (error) return <p>Error</p>;

  return (
    <DashboardContainer>
      <GetDashboardData {...data} />
    </DashboardContainer>
  );
};

export default Dashboard;
