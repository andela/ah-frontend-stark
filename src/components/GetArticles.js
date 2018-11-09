import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { fetchArticles } from '../actions/ArticleAction';

class GetArticles extends Component {
  componentWillMount() {
    this.props.fetchArticles();
  }

  render() {
    const data = this.props.articles;
    const showArticles = data.map(article => (
      <div key={article.slug}>
        <Link to={`/article/${article.slug}`}>
          <h1>{article.title}</h1>
        </Link>
        <h3>{article.description}</h3>
        <p>{article.body}</p>
      </div>
    ));

    return (
      <div>
        <h1>POSTS</h1>
        {showArticles}
      </div>
    );
  }
}
GetArticles.propTypes = {
  articles: PropTypes.array,
  fetchArticles: PropTypes.func,
};
const mapStateToProps = state => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps, { fetchArticles })(GetArticles);
