import React from 'react';

import Logo from '../../static/logo.png';
import Avatar from '../Avatar';
import { HeaderContainer, HeaderContent, LogoImage } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <LogoImage src={Logo} alt="Company Logo" />
        <Avatar />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
