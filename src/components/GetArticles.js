import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import renderHTML from 'react-render-html';
import { fetchArticles, myArticles } from '../actions/ArticleAction';
import ArticleCard from './ArticleCard1';
import NavigationBar from './navigation/NavigationBar';

class GetArticles extends Component {
  componentDidMount() {
    if (this.props.articlesTypes === 'All Articles') {
      this.props.fetchArticles();
    } else if (this.props.articlesTypes === 'My Articles') {
      this.props.myArticles();
    }
  }

  componentWillUpdate() {
    if (this.props.articlesTypes === 'All Articles') {
      this.props.fetchArticles();
    } else if (this.props.articlesTypes === 'My Articles') {
      this.props.myArticles();
    }
  }

  render() {
    const data = this.props.articles;
    const showArticles = data.map(article => (
      <div key={article.slug}>
        <ArticleCard
          date={article.createdAt}
          title={article.title}
          slug={article.slug}
          description={article.description}
          body={renderHTML(article.body)}
          update={this.props.update}
        />
      </div>
    ));

    return (
      <div>
          <NavigationBar />
        <div className="container">
        <div className="create_article"><span className="heading">{this.props.articlesTypes}</span></div>
          {showArticles}
        </div>
      </div>
    );
  }
}
GetArticles.propTypes = {
  articles: PropTypes.isRequired,
  fetchArticles: PropTypes.func.isRequired,
  myArticles: PropTypes.func.isRequired,
  articlesTypes: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps, { fetchArticles, myArticles })(GetArticles);
