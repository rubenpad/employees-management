import React from 'react';
import { Helmet } from 'react-helmet';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Loader from '../../components/Loader';
import GetDashboardData from '../../containers/GetDashboardData';
import { DashboardContainer } from './styles';

export const GET_DATA = gql`
  query getData {
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
  const { data, client, loading, error } = useQuery(GET_DATA);

  if (loading) return <Loader />;

  if (error) return <p>{error.message}</p>;

  client.writeData({
    data: {
      employees: [...data.employees],
      categories: [...data.categories],
    },
  });
  return (
    <>
      <Helmet>
        <title>MGC - Dashboard</title>
      </Helmet>
      <DashboardContainer>
        <GetDashboardData {...data} />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
