import React from 'react';

import SmallProfilePic from './smallProfilePic';

const ArticleHeader = () => (
  <div className="row">
    <div className="col-sm-1">
      <SmallProfilePic />
    </div>
    <div className="col-sm-4 text-left">
      {localStorage.getItem('username')}
      <br />
      Jun 3 | 3 min read
    </div>
  </div>
);

export default ArticleHeader;