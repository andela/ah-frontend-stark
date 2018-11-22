import React from 'react';

const TagsList = ({ tags }) => tags.map(tag => <li className="article-tag">{tag}</li>);

export default TagsList;
