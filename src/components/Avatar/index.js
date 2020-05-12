import React from 'react';
import PropTypes from 'prop-types';
import gravatar from '../../utils/gravatar';

import { Image } from './styles';

/**
 *
 * @param {string} email Email from the user company logged
 */
const Avatar = ({ email }) => {
  const urlSrc = gravatar(email);

  return <Image src={urlSrc} alt="User avatar" />;
};

Avatar.defaultProps = {
  email: '',
};

Avatar.propTypes = {
  email: PropTypes.string,
};

export default Avatar;
