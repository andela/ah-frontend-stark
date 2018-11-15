import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  singleArticle,
  likeArticle,
  dislikeArticle
} from '../actions/ArticleAction';
import NavigationBar from './navigation/NavigationBar';
import Rating from './Rating';


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
        <div className="row add-mg-top">
          <div className="col-lg-1" />
          <div className="col-lg-10">
            <div className="center"><h3>{article.title}</h3></div>
            <div className="center"><h5>{article.description}</h5></div>
            <ToastContainer />
            <center><img src={require('../images/a1.jpg')} /></center>
            <br />
            <div>
              {renderHTML(article.body)}
            </div>
          </div>
        </div>
        <div className="row rating-bar fixed-bottom ">
          <div className="col-lg-3">
                Likes
            <button 
            name="like"
            type="button"
            id="like"
            onClick={this.handleLike}
            className="far fa-thumbs-up btn-rate" />
            {article.likes}
          </div>
          <div className="col-lg-3">
                Dislikes
            <button 
            name="dislike"
            type="button"
            id="like"
            onClick={this.handleLike}
            className="far fa-thumbs-down btn-rate" />
            {article.dislikes}
          </div>
          <div className="col-lg-3">
                Favorites
            <button className="far fa-heart btn-rate" />
            {article.favoritesCount}
          </div>
            <div className="col-lg-2">
              <Rating
              rating={article.rating}
              message="null"
              slug={article.slug} />
          </div>
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
