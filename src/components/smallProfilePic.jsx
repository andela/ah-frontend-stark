import React from 'react';

const SmallProfilePic = () => (
  <div className="col-sm-2">
    <img
      src={require('../images/2.png')}
      alt="profile-pic"
      className="rounded-circle"
      width="50"
      height="50"
    />
  </div>
);

export default SmallProfilePic;
