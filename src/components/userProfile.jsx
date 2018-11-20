/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ProfilePic from './profilePic';
import { fetchProfile } from '../actions/profileActions';
import NavigationBar from './navigation/NavigationBar';
import ReadingStatus from './readingStatus';

export class ProfilePage extends Component {
  componentDidMount() {
    this.props.fetchProfile();
  }

  render() {
    console.log(this.props.profile)
    const profile = this.props.profile || {};
    const {
      username, bio, location, fun_fact: funFact, image,
    } = profile;
    const newUsername = localStorage.getItem('username');
    const editUrl = '/profile/' + newUsername + '/edit';
    localStorage.setItem("image",image);

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
              <span>{bio ? bio : 'Your profile is incomplete...'}</span>
              <br />
              <span>{funFact ? funFact : 'Click the edit button to update it!'}</span>
              <br />
              <h6>Followers:0 | Following:0</h6>
              <i className="fa fa-map-marker-alt" />
              <span>{location ? location : 'Unknown'}</span>
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
        <ReadingStatus read={profile.articles_read} wrote={profile.articles_written} />
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
