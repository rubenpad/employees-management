import React from 'react';
import { HomeContainer, HomeContent, Link, Menu } from './styles';

const Home = () => (
  <HomeContainer>
    <HomeContent>
      <h1>Welcome to Multiservices Global Company</h1>
      <Menu>
        <Link to="/employees">Employees dashboard</Link>
        <Link to="/employees/new">Register a new employee</Link>
      </Menu>
    </HomeContent>
  </HomeContainer>
);

export default Home;
