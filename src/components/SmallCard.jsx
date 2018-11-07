import React from 'react';

const SmallCard = () => (
  <div className="card row-lg-12 m-2 bg-light">
    <div className="row">
      <div className="col-md-4">
        <img
          height="100%"
          width="100%"
          src={require('../images/fantasy-2543658_1920.jpg')}
        />
      </div>
      <div className="col-md-8 p-2">
        <h6 className="card-title">This is my story</h6>
        <p className="card-text mr-4">
          Now I will tell you how it all began. How we got to the journey that
          forever changed our lives. On October ...
        </p>
        <small className="text-muted">@Jamespete &nbsp; 3 mins read</small>
      </div>
    </div>
  </div>
);

export default SmallCard;
