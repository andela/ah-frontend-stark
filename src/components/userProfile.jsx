import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import ProfilePic from './profilePic';
import ArticleCard from './ArticleCard';
import ProfileButton from './ProfileButton';
import {
  fetchProfile,
  getFollowers,
  follow,
  unfollow,
} from '../actions/profileActions';
import NavigationBar from './navigation/NavigationBar';
import ReadingStatus from './readingStatus';

var alreadyFollowing = false;
var newUsername = localStorage.getItem('username');
var editUrl = `/profile/${newUsername}/edit`;

export class ProfilePage extends Component {
  
  componentWillReceiveProps(nextProps) {
    const username = this.props.username.match.params.username;
    let followMessage = nextProps.followMessage
    const followString = `You're now following ${username}! You will receive notifications about their posts`;
    const unfollowString = `You have unfollowed ${username}`;
    if (followMessage === followString) {
      toast.success(followMessage, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar:true
  });
    } else if (followMessage === unfollowString) {
      toast.success(followMessage, {
        position: toast.POSITION.TOP_CENTER,
        hideProgressBar:true
    });
    }
  }
  
  componentDidMount() {
    const username = this.props.username.match.params.username;
    this.props.fetchProfile(username);
    const followList = ['followers', 'following'];
    for (let item in followList) {
      this.props.getFollowers(username, followList[item]);
    }
  }
 
  handleFollow = async event => {
    event.preventDefault();
    const username = this.props.username.match.params.username;
    const action = event.target.name;
    if (action === 'follow') {
      this.props.follow(username);
    } else if (action === 'unfollow') {
      this.props.unfollow(username);
    }
  }

  render() {
    console.log(this.props.profile)
    const profile = this.props.profile || {};
    const followers = this.props.followers || {};
    const following = this.props.following || {};
    let followersCount = this.props.followersCount || 0;
    const followingCount = this.props.followingCount || 0;
    const currentUser = localStorage.getItem('username');
    const {
      username, bio, location, fun_fact: funFact, image,
    } = profile;


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
              <h6>Followers: {followersCount} | Following: {followingCount}</h6>
              <i className="fa fa-map-marker-alt" />
              <span>{location ? location : 'Unknown'}</span>
              <br />
            </div>
            <div className="col-sm-2">
              <ProfileButton
                username={username}
                newUsername={newUsername}
                alreadyFollowing={alreadyFollowing}
                editUrl={editUrl}
                handleFollow={this.handleFollow} />
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
  getFollowers: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  profile: state.profile.profile,
  followers: state.profile.followers,
  following: state.profile.following,
  followMessage: state.profile.followMessage,
  followersCount: state.profile.followersCount,
  followingCount: state.profile.followingCount,
});

export default connect(
  mapStateToProps,
  {
    fetchProfile,
    getFollowers,
    follow,
    unfollow },
)(ProfilePage);
