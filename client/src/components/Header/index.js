import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../static/logo.png';
import Avatar from '../Avatar';
import { HeaderContainer, HeaderContent, LogoImage } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Link to="/">
          <LogoImage src={Logo} alt="Company Logo" />
        </Link>
        <Avatar />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
