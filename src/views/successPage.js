import React from 'react';
import MtSvgLines from 'react-mt-svg-lines';
import NavigationBar from '../components/navigation/NavigationBar';


const SuccessPage = () => (
  <div className="container-fluid">
    <NavigationBar />
    <div className="Row">
      <div className="col-sm-4 offset-3">
        <MtSvgLines id="image" animate duration={500}>
          <svg viewBox="0 0 100 100">
            <path stroke="green" strokeWidth="10" fill="none" d="M20.8,51c0,0,20.8,18.2,21.5,18.2c0.6,0,33.3-38.5,33.3-38.5" />
          </svg>
        </MtSvgLines>
        <p className="lead text-center">
                  A Link has been sent to your email
        </p>
      </div>
    </div>
  </div>
);


export default SuccessPage;
