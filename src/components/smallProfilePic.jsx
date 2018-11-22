import React from 'react';
import PropTypes from 'prop-types';

const SmallProfilePic = ({ image }) => (
  <div className="col-sm-2">
    <img
      src={image ? image : require('../images/A.png')}
      alt="profile-pic"
      className="rounded-circle"
      width="50"
      height="50"
    />
  </div>
);

SmallProfilePic.propTypes = {
  image: PropTypes.string.isRequired,
};

export default SmallProfilePic;
