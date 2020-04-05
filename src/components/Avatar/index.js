import React from 'react';
import PropTypes from 'prop-types';
import gravatar from '../../utils/gravatar';

const DEFAULT_EMAIL = 'any@mail.com';

const Avatar = ({ email = DEFAULT_EMAIL }) => {
  const urlSrc = gravatar(email);

  return (
    <div>
      <img src={urlSrc} alt="User avatar" />
    </div>
  );
};

Avatar.propTypes = {
  email: PropTypes.string,
};

export default Avatar;
