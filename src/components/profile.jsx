import React, { Component } from "react";

import Card from './card';
import ProfilePic from './profilePic';
import ProfileNav from "./navProfile";

class Profile extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
      <div className="row top">
      <div className="col-sm-3"></div>
      <ProfilePic />
        <div className="col-sm-3">
          <a href="#">prossienakimera</a><br/>
          <span>Artist. Designer. Christian. Servant.</span><br/>
          <span>I love dancing monkeys and travelling</span>
            <h6>Followers:2 | Following:1</h6>
          </div>
        <div className="col-sm-2">
          <button>Edit profile</button>
        </div>
        <div className="col-sm-2"></div>
      </div>
      <hr/>
      <ProfileNav />
      <div className="row top">
        <div className="col-sm-8">
            <Card />
            <Card />
        </div>
      </div>
      
      </React.Fragment>
    );
  }
}

export default Profile;
