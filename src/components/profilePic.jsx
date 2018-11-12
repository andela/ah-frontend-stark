import React from 'react';
import PropTypes from 'prop-types';

const ProfilePic = ({ image }) => (
  <img
    src={image}
    alt="profile-pic"
    className="rounded-circle"
    width="200"
    height="200"
  />
);

ProfilePic.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ProfilePic;
