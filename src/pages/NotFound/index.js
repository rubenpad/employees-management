import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import { colors } from '../../styles';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80vh;

  h2 {
    text-align: center;
    margin-bottom: 1rem;
  }

  a {
    color: ${colors.dark};
    text-decoration: underline;
  }
`;

const NotFound = () => {
  return (
    <Container>
      <Helmet>
        <title>404 | Not Found</title>
      </Helmet>
      <h2>Page Not Found</h2>
      <Link to="/">Go to Home</Link>
    </Container>
  );
};

export default NotFound;
