import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import NavigationBar from './navigation/NavigationBar';
import {
  singleArticle,
  likeArticle,
  dislikeArticle
} from '../actions/ArticleAction';


class Article extends Component {
  componentDidMount() {
    if (this.props.match.params.slug) {
      const slug = this.props.match.params.slug;
      this.props.singleArticle(slug);
    }
  }

  handleLike = async e => {
    e.preventDefault();
    if (e.target.name === "like") {
        let articleData = {
        like: {
          action: 1,
        }
      }
      await this.props.likeArticle(articleData, this.props.match.params.slug);
      this.props.singleArticle(this.props.match.params.slug);

    } else if (e.target.name === "dislike") {
      let articleData = {
        like: {
          action: 0,
        }
      }
      await this.props.dislikeArticle(articleData, this.props.match.params.slug);
      this.props.singleArticle(this.props.match.params.slug);
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
                <button
                  name="like"
                  type="button"
                  className="far fa-thumbs-up"
                  id="like"
                  onClick={this.handleLike}
                >  {article.likes}
                </button>
              </div>
              <div className="col-lg-1">
                <button
                  name="dislike"
                  type="button"
                  className="far fa-thumbs-down"
                  id="like"
                  onClick={this.handleLike}
                >  {article.dislikes}
                </button>
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

export default connect(
  mapStateToProps, {
    singleArticle,
    likeArticle,
    dislikeArticle
})(Article);
