import React from 'react';
import PropTypes from 'prop-types';
import gravatar from '../../utils/gravatar';

import { Image } from './styles';

const Avatar = ({ email }) => {
  const urlSrc = gravatar(email);

  return <Image src={urlSrc} alt="User avatar" />;
};

Avatar.defaultProps = {
  email: 'any@mail.com',
};

Avatar.propTypes = {
  email: PropTypes.string,
};

export default Avatar;
