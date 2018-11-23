
import React from 'react';
import NavigationBar from './navigation/NavigationBar';
import AllArticles from './AllArticles';

const TempHome = () => (
  <div>
    <NavigationBar />
    <div className="container">
      <div className="jumbotron jumb">
        <h1>Welcome to Authors Haven</h1>
        <p>
          Click your username to view your profile or write articles
        </p>
      </div>
      <div className="create_article1"></div>
      < AllArticles />
    </div>
  </div>
);

export default TempHome;
