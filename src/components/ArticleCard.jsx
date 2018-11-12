import React, { Component } from 'react';

import ArticleHeader from './ArticleHeader';
class ArticleCard extends Component {
  state = {};
  render() {
    return (
      <div className="profile-card text-left">
        <ArticleHeader image={this.props.image} />
        <div>
        <br />
          <h5>How I have managed to adapt to bootcamp.</h5>
        </div>
        <div>
          <p>
            Joining university is one of the many achievements I celebrated with
            so much pride. I had to let the whole clan know that I had made it
            in life. 
          </p>
        </div>
            {/* Icons bar goes here */}
      </div>
    );
  }
}

export default ArticleCard;