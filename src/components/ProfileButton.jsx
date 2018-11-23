import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class ProfileButton extends Component {
  render() {
    const username = this.props.username || {};
    const newUsername = this.props.newUsername || {};
    const alreadyFollowing = this.props.alreadyFollowing || {};
    const editUrl = this.props.editUrl || {};
    { if (username === newUsername) {
      return (
        <Link to={editUrl}>
          <button type="submit" className="btn btn-outline-brown">
                    Edit profile
          </button>
        </Link>
      );
    }
    if (alreadyFollowing === true) {
      return (
        <button
          type="button"
          name="unfollow"
          onClick={this.props.handleFollow}
          className="btn btn-outline-brown"
        >
                Unfollow
        </button>
      );
    }
    return (
      <button
        type="button"
        name="follow"
        onClick={this.props.handleFollow}
        className="btn btn-outline-brown"
      >
                Follow
      </button>
    );
    }
  }
}

ProfileButton.propTypes = {
  handleFollow: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  alreadyFollowing: state.profile.alreadyFollowing,
});

export default connect(
  mapStateToProps,
  {},
)(ProfileButton);
