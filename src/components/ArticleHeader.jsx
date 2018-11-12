/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';

import SmallProfilePic from './smallProfilePic';

class ArticleHeader extends Component {
  state = {};

  render() {
    return (
      <div className="row">
        <div className="col-sm-1">
          <SmallProfilePic image={this.props.image} />
        </div>
        <div className="col-sm-4 text-left">
          {localStorage.getItem("username")}
          <br />
          Jun 3 | 3 min read
        </div>
      </div>
    );
  }
}

export default ArticleHeader;