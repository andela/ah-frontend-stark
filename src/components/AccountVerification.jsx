import React from 'react';
import { Link } from 'react-router-dom';

const AccountVerification = () => (
  <React.Fragment>
    <h3 className="form-control isValid ">
      Your account has been successfully verified.
      <Link to="/"> Login </Link>
    </h3>
  </React.Fragment>
);
export default AccountVerification;
