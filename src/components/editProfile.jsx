import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProfilePic from "./profilePic";
import { updateProfile } from "../actions/profileActions";

class ProfileUpdate extends Component {
  state = {
    profile: {
      username: "",
      location: "",
      bio: "",
      fun_fact: ""
    }
  };

  handleState = e => {
    this.setState({
      profile: {
        [e.target.name]: e.target.value
      }
    });
  };

  handleSubmit = e => {
    const userprofile = {
      profile: {
        username: this.state.profile.username,
        location: this.state.profile.location,
        bio: this.state.profile.bio,
        fun_fact: this.state.profile.fun_fact
      }
    };
    this.props.updateProfile(userprofile);
  };

  render() {
    console.log("My props", this.props);
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        <br />
        <div className="container">
          <div className="row text-center">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <span className="heading">Update your profile</span>
              <br />
              <br />
              <ProfilePic />
            </div>
          </div>

          <div className="row">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <br />
              username
              <br />
              <input
                defaultValue={this.props.profile.username}
                className="long"
                name="username"
                type="text"
                onChange={this.handleState}
              />
              <br />
              location
              <br />
              <input
                defaultValue={this.props.profile.location}
                className="long"
                name="location"
                type="text"
                onChange={this.handleState}
              />
              <br />
              bio
              <br />
              <input
                defaultValue={this.props.profile.bio}
                className="long"
                name="bio"
                type="text"
                onChange={this.handleState}
              />
              <br />
              fun fact
              <br />
              <input
                defaultValue={this.props.profile.fun_fact}
                className="long"
                name="fun_fact"
                type="text"
                onChange={this.handleState}
              />
            </div>
          </div>
          <br />
          <div className="row text-center">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <Link to="/profile/prossienakimera/">
                <button
                  type="button"
                  className="btn btn-outline-brown"
                  onClick={this.handleSubmit}
                >
                  Update profile
                </button>
              </Link>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProfileUpdate.propTypes = {
  updateProfile: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile.profile
});

export default connect(
  mapStateToProps,
  { updateProfile }
)(ProfileUpdate);
