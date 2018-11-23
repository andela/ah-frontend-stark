import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import ProfilePic from "./profilePic";
import { updateProfile } from "../actions/profileActions";
import NavigationBar from './navigation/NavigationBar';

class ProfileUpdate extends Component {
  state = {
    profile: {
      username: this.props.profile.username,
      location: this.props.profile.username.location,
      bio: this.props.profile.bio,
      fun_fact: this.props.profile.fun_fact,
      image: this.props.profile.image
    }
  };

  handleState = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(prevState => {
      return {
        profile: {
          ...prevState.profile,
          [name]: value
        }
      };
    });
  };

  handleSubmit = e => {
    const userprofile = {
      profile: {
        username: this.state.profile.username,
        location: this.state.profile.location,
        bio: this.state.profile.bio,
        fun_fact: this.state.profile.fun_fact,
        image: this.state.profile.image
      }
    };
    const currentUser = localStorage.getItem('username');
    this.props.updateProfile(userprofile, currentUser);
    this.componentDidUpdate = () => {
      if (this.state.profile.username) {
        localStorage.setItem("username", this.state.profile.username);
      }
      let newUsername = localStorage.getItem("username");
      let profileUrl = "/profile/" + newUsername;
      window.location = profileUrl;
    };
  };

  handleUpload = () => {
    const imageview = window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
        folder: process.env.REACT_APP_FOLDER
      },
      (error, result) => {
        if (result.event === "success") {
          this.setState({
            profile: { image: result.info.secure_url }
          });

          imageview.close();
        }
      }
    );
    imageview.open();
  };

  render() {
    return (
      <React.Fragment>
        <NavigationBar />
        <br />
        <div className="container">
        <div className="empty-div"/>
          <div className="row text-center">
            <div className="col-sm-2" />
            <div className="col-sm-8">
              <span className="heading">Update your profile</span>
              <br />
              <br />
              <ProfilePic image={this.props.profile.image} />
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <button
              className="btn btn-outline-brown"
              onClick={this.handleUpload}
            >
              upload photo
            </button>
          </div>
          <br />
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
              <button
                type="button"
                className="btn btn-outline-brown"
                onClick={this.handleSubmit}
              >
                Update profile
              </button>
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
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

export default connect(
  mapStateToProps,
  { updateProfile },
)(ProfileUpdate);
