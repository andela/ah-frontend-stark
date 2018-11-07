import React from "react";

const BigCard = () => (
  <div className="card m-2 bg-light">
    <div className="card-image">
      <img
        className="card-img-top"
        src={require("../images/fantasy-2543658_1920.jpg")}
        alt="My Favorite Title"
      />
    </div>
    <div className="card-body">
      <h5 className="card-title">The world as we know it</h5>
      <p className="card-text">
        The world happens to be a little more complex that we often make it out
        to be.
      </p>

      <p className="card-text">
        <small className="text-muted">@Jamespete &nbsp; 3 mins read</small>
      </p>
    </div>
  </div>
);

export default BigCard;
