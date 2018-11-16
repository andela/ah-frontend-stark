import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import { singleArticle } from '../actions/ArticleAction';
import NavigationBar from './navigation/NavigationBar';


class Article extends Component {
  componentDidMount() {
    if (this.props.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.singleArticle(slug);
    }
  }

  render() {
    const data1 = Object.values(this.props.article);
    const articles = data1.map(article => (
      <div key={article.slug}>
        <br />
        <div className="row">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <div className="center"><h3>{article.title}</h3></div>
            <div className="center"><h5>{article.description}</h5></div>
            <center><img src={require('../images/a1.jpg')} /></center>
            <br />
            <div>
              {renderHTML(article.body)}
            </div>
            <center>
            <div className="row article fixed-bottom">
              
                <div className="col-lg-1">
                dislikes:
                {article.dislikes}
              </div>
                <div className="col-lg-1">
                        likes:
                {article.likes}
              </div>
                <div className="col-lg-2">
                favouritesCount:
                {article.favouritesCount}
              </div>
                <div className="col-lg-1">
                    ratings:
                {article.ratings}
              </div>
                <div className="col-lg-2">
                ratingsCount:
                {article.ratingsCount}
              </div>
                <div className="col-lg-4">
              createdAt:
                {article.createdAt}
              </div>
              </div></center>
            <br />
          </div>
          <div className="col-lg-1" />
        </div>
      </div>
    ));

    return (
      <div>
        <NavigationBar />
        <div className="container margin-top">
          {articles}
          <br />
        </div>
      </div>
    );
  }
}
Article.propTypes = {
  singleArticle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  article: state.articles.article,
});

export default connect(mapStateToProps, { singleArticle })(Article);
