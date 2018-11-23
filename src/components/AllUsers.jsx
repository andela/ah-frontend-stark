import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavigationBar from './navigation/NavigationBar';
import { fetchUsers } from '../actions/usersActions';


export class AllUsers extends Component {
  componentWillMount() {
    if (this.props.fetchUsers()) {
    }
  }

  render() {
    const userList = this.props.userList;
    const showUsers = userList.map(user => (
      <div key={user.username}>
        <Link to={`/profile/${user.username}`}>
          <h4>{user.username}</h4>
        </Link>
        <h4>{user.bio}</h4>
        <p>{user.location}</p>
      </div>
    ));
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="jumbotron">
            <h1>Welcome to Authors Haven</h1>
            <p>
              Check out these awesome authors in our progressive community!!
            </p>
            <div>
              <div>
                <div>Users</div>
                {showUsers}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AllUsers.propTypes = {
  userList: PropTypes.array,
  fetchUsers: PropTypes.func,
};

const mapStateToProps = state => ({
  userList: state.users.userList,
});


export default connect(
  mapStateToProps,
  { fetchUsers },
)(AllUsers);
