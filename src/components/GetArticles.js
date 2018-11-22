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

  componentDidUpdate() {
    const { articlesTypes } = this.props;
    if (articlesTypes === 'My Articles') {
      this.props.myArticles();
    }
  }

  render() {
    let noArticles;
    const { update, articles, articlesTypes } = this.props;
    const data = articles.results || articles;
    if (data.length === 0) {
      noArticles = 'NO ARTICLES TO DISPLAY';
    }
    let showArticles = null;
    if (data) {
      showArticles = data.map(article => (
        <div key={article.slug}>
          <ArticleCard
            date={article.createdAt}
            title={article.title}
            slug={article.slug}
            author={article.author_name}
            description={article.description}
            body={renderHTML(article.body)}
            update={update}
            next={articles.next}
            previous={articles.previous}
          />
        </div>
      ));
    }
    return (
      <div>
        <NavigationBar />
        <div className="container">
          <div className="create_article"><span className="heading">{articlesTypes}</span></div>
          {showArticles}
          {noArticles
            ? <div className="jumbotron"><center>{noArticles}</center></div> : ''}
          <center>
            <div className="paginationButton">
              {articles.next
                ? <button type="button" className="btn btn-outline-brown paginationButton-button" onClick={() => { this.props.fetchArticles(this.props.articles.next); }}>Next Page</button> : ''}
              {articles.previous
                ? <button type="button" className="btn btn-outline-brown paginationButton-button" onClick={() => { this.props.fetchArticles(this.props.articles.previous); }}>Prev Page</button> : ''}
            </div>
          </center>
        </div>
        <br />
      </div>
    );
  }
}
GetArticles.propTypes = {
  fetchArticles: PropTypes.func.isRequired,
  myArticles: PropTypes.func.isRequired,
  articlesTypes: PropTypes.string.isRequired,
};
const mapStateToProps = state => ({
  articles: state.articles.articles,
});

export default connect(mapStateToProps, { fetchArticles, myArticles })(GetArticles);
