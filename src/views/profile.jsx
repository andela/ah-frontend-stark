import React from 'react';
import ProfilePage from '../components/userProfile';

const ViewProfile = username => (
  <React.Fragment>
    <ProfilePage username={username} />
  </React.Fragment>
);

export default ViewProfile;
