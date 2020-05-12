import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Logo from '../../static/logo.png';
import Avatar from '../Avatar';
import {
  HeaderContainer,
  HeaderContent,
  LogoImage,
  Logout,
  Profile,
} from './styles';

// Get the email from apollo client local state
export const GET_EMAIL = gql`
  query {
    email @client
  }
`;

const Header = () => {
  const { data } = useQuery(GET_EMAIL);

  // Helper function to get logged out
  const handleClick = () => {
    localStorage.clear();
    window.location.href = '/login';
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <LogoImage src={Logo} alt="Company Logo" />
        </Link>
        <Profile>
          <Logout type="button" onClick={handleClick}>
            Log out
          </Logout>
          <Avatar email={data && data.email} />
        </Profile>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
