import React, { Component } from 'react';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavigationBar from './navigation/NavigationBar';
import ArticleHeader from './ArticleHeader';
import {
  singleArticle,
  likeArticle,
  dislikeArticle
} from '../actions/ArticleAction';
import Rating from './Rating';
import TagsList from './tags/ViewArticleTags';
import Comments from './comments';


class Article extends Component {
  state = {
    createdAt:"",
    author:"",
    readTime:"",
  }
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
      };
      await this.props.likeArticle(articleData, this.props.match.params.slug);
      this.props.singleArticle(this.props.match.params.slug);
    } else if (e.target.name === "dislike") {
      let articleData = {
        like: {
          action: 0,
        }
      };
      await this.props.dislikeArticle(
        articleData,
        this.props.match.params.slug,
      );
      this.props.singleArticle(this.props.match.params.slug);
    }
  }
componentDidUpdate(prevProps){
    if( this.props.article !== prevProps.article){
    const data1 = Object.values(this.props.article);
    const data2=data1[0];
      this.setState({
        createdAt:data2["createdAt"],
        author:data2["author_name"],
        readTime:data2["read_time"],
      })

    }
}
  render() {
    var image=localStorage.getItem("image")
    const data1 = Object.values(this.props.article);
    const articles = data1.map(article => (
      <React.Fragment>
        <div key={article.slug}>
          <br />
          <div className="row add-mg-top">
            <div className="col-lg-1" />
            <div className="col-lg-10">
              <div className="center">
                <h3>{article.title}</h3>
              </div>
              <div className="center">
                <h5>{article.description}</h5>
              </div>
              <ToastContainer />
              <center>
                <img className="img-article" src={article.image} />
              </center>
              <br />
              <div>{renderHTML(article.body)}</div>
              <Comments slug={article.slug} />
            </div>
          </div>
        </div>
        <div className="article-tags">
          <h3>Tags</h3>
          <TagsList tags={article.tagList} />
        </div>
        <div className="row rating-bar fixed-bottom ">
          <div className="col-lg-3">
            Likes
            <button
              name="like"
              type="button"
              id="like"
              onClick={this.handleLike}
              className="far fa-thumbs-up btn-rate"
            />
            {article.likes}
          </div>
          <div className="col-lg-3">
            Dislikes
            <button
              name="dislike"
              type="button"
              id="like"
              onClick={this.handleLike}
              className="far fa-thumbs-down btn-rate"
            />
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
              slug={article.slug}
            />
          </div>
        </div>
      </React.Fragment>
    ));

    return (
      <div>
        <NavigationBar />
        <div className="container margin-top">
          <div class="row article-marign ">
            <div className="col-lg-1"></div>
            <div className="col-lg-10">
              <ArticleHeader
              image={image}
              date={this.state.createdAt}
              author={this.state.author}
              readTime={this.state.readTime}/>
            </div>
          </div>
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
  mapStateToProps,
  {
    singleArticle,
    likeArticle,
    dislikeArticle,
  }
)(Article);
