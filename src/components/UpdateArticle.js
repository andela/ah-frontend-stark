import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { singleArticle } from '../actions/ArticleAction';
import { connect } from 'react-redux';
import CreateUpdate from './CreateUpdate'
class UpdateArticle extends Component {
    state = {  }

    componentDidMount() {
          this.props.singleArticle(this.props.match.params.slug);
      }
      render() {
       
       if(this.props.article.article){
         this.title = this.props.article.article.title;
         this.description = this.props.article.article.description;
         this.body = this.props.article.article.body;

       }
        return ( 
           <div>
               
            <CreateUpdate
            articleSlug={this.props.match.params.slug}
            article1= "updating_article"
            button_name="Update Article"
            articleAction="Update your article"
            titleValue={this.title}
            bodyValue={this.body}
            descValue={this.description}
        />
        </div> 
         );
    }
}
UpdateArticle.propTypes ={
    slug:PropTypes.string,
    singleArticle:PropTypes.func,
    article:PropTypes.array,
    title:PropTypes.string,
    description:PropTypes.string,
    body:PropTypes.string,

};
 
const mapStateToProps = state => ({
    article: state.articles.article,
  });
export default connect(mapStateToProps, { singleArticle })(UpdateArticle);
