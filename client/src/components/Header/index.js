import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Logo from '../../static/logo.png';
import Avatar from '../Avatar';
import { HeaderContainer, HeaderContent, LogoImage } from './styles';

export const GET_EMAIL = gql`
  query {
    email @client
  }
`;

const Header = () => {
  const { data } = useQuery(GET_EMAIL);

  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <LogoImage src={Logo} alt="Company Logo" />
        </Link>
        <Avatar email={data && data.email} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
