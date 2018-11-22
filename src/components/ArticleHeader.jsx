/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import ConvertDate from '../utils/convertDate';
import SmallProfilePic from './smallProfilePic';

class ArticleHeader extends Component {
  state = {};

  render() {
    const createdDate=ConvertDate(this.props.date);
    return (
      <div className="row">
        <div className="col-sm-1">
          <SmallProfilePic image={this.props.image} />
        </div>
        <div className="col-sm-4 text-left">
          {this.props.author}
          <br />
          {createdDate } | 3 min read
       </div>
      </div>
    );
  }
}

export default ArticleHeader;