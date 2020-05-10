import React from 'react';
import { Helmet } from 'react-helmet';
import { MainContainer, MainContent, Link, Menu } from './styles';

const Main = () => (
  <>
    <Helmet>
      <title>Multiservices Global Company</title>
    </Helmet>
    <MainContainer>
      <MainContent>
        <h1>Welcome to Multiservices Global Company</h1>
        <Menu>
          <Link to="/employees">Employees dashboard</Link>
          <Link to="/employees/new">Register a new employee</Link>
        </Menu>
      </MainContent>
    </MainContainer>
  </>
);

export default Main;
