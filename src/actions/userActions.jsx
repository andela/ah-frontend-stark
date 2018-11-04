import { toast } from 'react-toastify';
import { Object } from 'core-js';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';
import toggleLoader from '../common/functions';

const baseURL = 'https://ah-backend-stark-staging.herokuapp.com';
const redirectURL = 'https://ah-frontend-stark.herokuapp.com/signup/verify/';

export const createUser = userData => dispatch => {
  fetch(`${baseURL}/api/users/`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      RedirectTo: `${redirectURL}`
    },
    body: JSON.stringify({ user: userData })
  })
    .then(response =>
      response.json().then(data => ({
        data: data,
        status: response.status,
      }))
    )
    .then((results) => {
      if (results.status === 201) {
        toast.success(
          `You've registered successfully.
    Please check your email for the verification link`,
          {
            hideProgressBar: true,
            position: toast.POSITION.TOP_CENTER,
          }
        );
        dispatch({
          type: SIGNUP_SUCCESS,
          payload: results.data,
        });
      } else if (results.status === 400) {
        toggleLoader('loader-div', 'none')
        const errors = results.data['errors'];
        var errorMsg = '';
        Object.keys(errors).forEach(key => {
          errorMsg += errors[key];
        });
        toast.error(errorMsg, {
          hideProgressBar: true,
          position: toast.POSITION.TOP_CENTER,
        });
        dispatch({
          type: SIGNUP_FAILURE,
          payload: results.data,
        });
       
      }
    })
    .catch(error => {
      console.log(error);
    });
};

export default createUser;
