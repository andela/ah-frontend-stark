import React from 'react';
import renderHTML from 'react-render-html';
import { Link } from 'react-router-dom';

const TopStory = (props) => {
  let slug;
  let topStoryTitle;
  let topStoryBody;
  if (props.topStory) {
    slug = props.topStory.slug;
    topStoryTitle = props.topStory.title;
    topStoryBody = renderHTML(props.topStory.body);
  }
  return (
    <div className="top-story topStory line">
    <Link to={`/article/${slug}`}>
        <h5 className="card-title">{topStoryTitle}</h5>
      </Link>
    <div className="card-text">{topStoryBody}</div>
    <p className="card-text">
      <small className="text-muted">25 Oct 2018</small>
    </p>
    <p className="card-text">
      <small className="text-muted">
        <a href="/">View more</a>
      </small>
    </p>
  </div>
  );
};
export default TopStory;
