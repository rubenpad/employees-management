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
      categoryId
    }

    categories {
      id
      name
    }
  }
`;

const Dashboard = () => {
  const { data, loading, error } = useQuery(GET_DATA, {
    fetchPolicy: 'network-only',
  });

  if (loading) return <Loader />;

  if (error) return <p>Try again</p>;

  const { employees, categories } = data;

  // Mark categories with hasEmployee property if has
  // one or more employees associate to it
  const markedCategories = categories.map(category => {
    employees.forEach(employee => {
      if (employee.categoryId === category.id) {
        category.hasEmployee = true;
      }
    });

    return category;
  });

  return (
    <>
      <Helmet>
        <title>MGC - Dashboard</title>
      </Helmet>
      <DashboardContainer>
        <GetDashboardData categories={markedCategories} employees={employees} />
      </DashboardContainer>
    </>
  );
};

export default Dashboard;
