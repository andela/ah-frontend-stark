import React from "react";

const ProfileNav = () => (
  <React.Fragment>
    <div className="row margin-left">
      <div className="col-sm-2" />
      <div className="col-sm-1">
        <a href="#">Published</a>
      </div>{" "}
      |
      <div className="col-sm-1">
        <a href="#">Read</a>
      </div>{" "}
      |
      <div className="col-sm-1">
        <a href="#">Bookmarks</a>
      </div>
    </div>
  </React.Fragment>
);

export default ProfileNav;
