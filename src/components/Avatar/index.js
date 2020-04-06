import React from 'react';
import PropTypes from 'prop-types';
import gravatar from '../../utils/gravatar';

const Avatar = ({ email }) => {
  const urlSrc = gravatar(email);

  return (
    <div>
      <img src={urlSrc} alt="User avatar" />
    </div>
  );
};

Avatar.defaultProps = {
  email: 'any@mail.com',
};

Avatar.propTypes = {
  email: PropTypes.string,
};

export default Avatar;
