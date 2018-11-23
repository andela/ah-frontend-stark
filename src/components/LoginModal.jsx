import React, { Component } from 'react';
import '../style/signin.css';
import LoginForm from './LoginForm';
import $ from 'jquery';

class LoginModal extends Component {

  toggleModal = () => (
    $('#authModal').modal('toggle')
  );

  render() {
    return (
      <div>
        <div className="modal fade" id="authModal" tabIndex="1">
          <div className="modal-dialog">
            <div className="modal-form">
            <LoginForm 
            toggleModal={this.toggleModal} 
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginModal;
