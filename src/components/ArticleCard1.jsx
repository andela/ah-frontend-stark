import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { deleteArticles } from '../actions/ArticleAction';
import ArticleHeader from './ArticleHeader';
import renderHTML from 'react-render-html';
import '../style/card.css'
export class ArticleCard extends Component {
  state = {};
  goUpdate(slug){
    window.location=window.location="/article/"+slug+"/Edit"
  }

  render() {
    var image=localStorage.getItem("image")
    return (
      <div>
      <div className="profile-card ">
        <ArticleHeader image={image} date={this.props.date} author={this.props.author}/><br />
        <div className="row">
        <div className="col-lg-11 line">
              <Link to={`/article/${this.props.slug}`}>
              <h3><p>{this.props.title}</p></h3>
              </Link>
              </div>
              </div>
            <div className="row">
            <div className="col-lg-11 article-body">
            <div className="bodyheight">{this.props.body}</div></div>
                {this.props.update?
            <div class="col-lg-1">    
            <div class="row">
            <div class="col-lg-12"> <button className="fa fa-edit btn-article" id="but1" aria-hidden="true" onClick={()=>{this.goUpdate(this.props.slug)}}/></div></div><br /><br />
          <div class="row"><div class="col-lg-12"><button type="button" id="deleteButton" className="fa fa-trash btn-article" onClick={()=>{this.props.deleteArticles(this.props.slug)}}/></div></div></div> :" "}</div>
            {/* Icons bar goes here */}
      </div>
      </div>
    );
  }
}
ArticleCard.propTypes = {
  deleteArticles: PropTypes.isRequired,
};

const mapStateToProps= state =>({
  message:state.articles,
})

export default connect(mapStateToProps,{deleteArticles})(ArticleCard);
