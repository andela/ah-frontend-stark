import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

const SmallCard = (props) => {
  let smallTitle;
  let slug;
  let smallBody;
  if (props.small1) {
    smallTitle = props.small1.title;
    slug = props.small1.slug;
    smallBody = renderHTML(props.small1.body);
  }
  return (
    <div className="card row-lg-12 m-2 bg-light">
      <div className="row">
        <div className="col-md-4">
          <img
            height="100%"
            width="100%"
            src={require('../images/panorama.jpg')}
            alt="Authors heaven"
          />
        </div>
        <div className="col-md-8 p-2 line">
          <Link to={`/article/${slug}`}>
            <h6 className="card-title"><b>{smallTitle}</b></h6>
          </Link>
          <div className="card-text mr-4 small">
            { smallBody }
          </div>
          <small className="text-muted">@Jamespete &nbsp; 3 mins read</small>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
