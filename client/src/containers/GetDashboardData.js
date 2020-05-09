import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Dashboard from '../pages/Dashboard';

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

const GetDashboardData = () => {
  const { data, loading, error } = useQuery(GET_DATA);

  if (error) return <p>{error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return <Dashboard employees={data.employees} categories={data.categories} />;
};

export default GetDashboardData;
