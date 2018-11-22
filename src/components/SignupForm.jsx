import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUser } from '../actions/userActions';
import '../css/signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from '../store';
import Loader from 'react-loader-spinner';
import  toggleLoader   from '../common/functions';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      confirmpass: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  showValidationError = (errorMessage) => {
    toast.error(errorMessage, {
      position: toast.POSITION.TOP_CENTER,
      hideProgressBar:true
    });
  }

  inputIsValid = () =>{

    let usernameMatch = /^[a-zA-Z]+[a-z0-9]{4,}/
    let emailMatch =/(^[\w\d]+[\.\w\d_]+@[\.\w\d_]+\.[\w]{2,10}$)/

    let username = this.state.username;
    let email = this.state.email;
    let password = this.state.password;
    let confirmpassword = this.state.confirmpass;

    const errorMessages = [
      `The username must be a valid string atleast 5 characters long.
      It should start with letters and can optionally contain digits.`, 
      `Please enter a valid email address`,
      `The password must be atleast 8 characters long 
       and should contain a capital letter and digit`,
      `The passwords do not match`
    ]

    if (!username.match(usernameMatch)){
      this.showValidationError(errorMessages[0]);
      return false;

    } else if (!email.match(emailMatch)) {
      this.showValidationError(errorMessages[1]);
      return false;

    } else if (password !== confirmpassword){
      this.showValidationError(errorMessages[3]);
      return false;

    } else {
      let p_matches = [/^[a-zA-Z]+/,/[A-Z]+/,/[0-9]/,/.{8,}/]
      if (!password.match(p_matches[0]) ||
       !password.match(p_matches[1]) || !password.match(p_matches[2]) ||
        !password.match(p_matches[3])){
        this.showValidationError(errorMessages[2]);
        return false;
      }
    }
    return true;
  }

  onChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  onSubmit(evt) {
    evt.preventDefault();
    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    }
    if (!this.inputIsValid()){
      return;
    }
    toggleLoader('loader-div', 'block');
    this.props.createUser(user);
  }
  render() {
    
    return (
      <div className="container signup-box">
        <form onSubmit={this.onSubmit} className="container card col-lg-5">
          <div className="form-group p-4 m-2">
            <h3 className="head-text">Join Author's Haven</h3>
          </div>

          <div className="form-group">
            <input type="text" name="username" placeholder="Username" className="form-control" value={this.state.username} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email" className="form-control" value={this.state.email} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" className="form-control" value={this.state.password} onChange={this.onChange} required />
          </div>
          <div className="form-group">
          <input type="password" name="confirmpass" placeholder="Confirm password" className="form-control" value={this.state.confirmpass} onChange={this.onChange} required />
          </div>
          <div className="form-group">
            <input id ="signup-btn" type="submit" className="btn btn-signup" value="Signup" />
            <ToastContainer />
          </div>
          <div className="form-group p-2 m-1 align-content-center">
            <span>Already have an account? </span><Link to="/">Login</Link>
            <br/>
          </div>
        </form>
        <div id="loader-div"><Loader  type="ThreeDots" color="#8b3f08" height="80" width="80" /> </div>
      </div>
    );
  }
}
Signup.propTypes = {
  createUser: PropTypes.func.isRequired,
  user:PropTypes.shape({}),
};
const mapStateToProps = state => ({
  user: state.user,
});

store.subscribe(() => {
  const newState = store.getState();
  if (newState.users.IsRegistered){
    toggleLoader('loader-div', 'none');
    setTimeout(() => {
      window.location.replace('/');
    },4000) 
  }   
})

export default connect(mapStateToProps, { createUser })(Signup);
