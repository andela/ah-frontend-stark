import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

const BigCard = (props) => {
  let title;
  let body;
  let slug;
  if (props.big) {
    title = props.big.title;
    slug = props.big.slug;
    body = renderHTML(props.big.body);
  }
  return (
    <div className="card m-2 bg-light">
      <div className="card-image">
        <img
          className="card-img-top"
          src={require('../images/eiffel-tower.jpg')}
          alt="My Favorite Title"
        />
      </div>
      <div className="card-body line">
        <Link to={`/article/${slug}`}>
          <h5 className="card-title"><b>{title}</b></h5>
        </Link>
        <div className="card-text big-article text-truncate">{body}</div>

        <p className="card-text">
          <small className="text-muted">@Jamespete &nbsp; 3 mins read</small>
        </p>
      </div>
    </div>
  );
};

export default BigCard;
