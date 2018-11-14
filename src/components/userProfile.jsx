/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProfilePic from './profilePic';
import ArticleCard from './ArticleCard';
import { fetchProfile } from '../actions/profileActions';
import NavigationBar from './navigation/NavigationBar';

export class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    const profile = this.props.profile || {};
    const {
      username, bio, location, fun_fact: funFact, image,
    } = profile;
    const newUsername = localStorage.getItem('username');
    const editUrl = '/profile/' + newUsername + '/edit';

    return (
      <React.Fragment>
        <NavigationBar />
        <div className="container">
          <div className="row center-block align-items-center text-center profile">
            <div className="col-sm-1" />
            <div className="col-sm-3">
              <ProfilePic image={image} />
            </div>
            <div className="col-sm-5">
              <span className="heading">{username}</span>
              <br />
              <span>{bio}</span>
              <br />
              <span>{funFact}</span>
              <br />
              <h6>Followers:2 | Following:1</h6>
              <i className="fa fa-map-marker" />
              <span>{location}</span>
              <br />
            </div>
            <div className="col-sm-2">
              <Link to={editUrl}>
                <button type="submit" className="btn btn-outline-brown">
                  Edit profile
                </button>
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-10">Latest</div>
          </div>
          <br />
          <div className="row">
            <div className="col-sm-1" />
            <div className="col-sm-10">
              <ArticleCard image={image} />
              <ArticleCard image={image} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

ProfilePage.propTypes = {
  fetchProfile: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

export default connect(
  mapStateToProps,
  { fetchProfile },
)(ProfilePage);
