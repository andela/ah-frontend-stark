import React, { Component}  from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createArticles} from '../actions/ArticleAction';
import { UpdateArticleFunc } from '../actions/ArticleAction';
import ArticleForm from './ArticleForm';
import Modules from '../utils/Editorplugins';
import NavigationBar from './navigation/NavigationBar';
class CreateUpdate extends Component {
    
        state = {
            title: "",
            description:"",
            body:"",
            image:"",
            error: "",
            tags: [],
        }   
        change=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            });
        };     
  handleChange=(event)=> {
      this.setState({body:event})
  }
  handleUpload = () => {
    const imageview = window.cloudinary.openUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_UPLOAD_PRESET,
        folder: process.env.REACT_APP_FOLDER
      },
      (error, result) => {
        if (result.event === "success") {
          this.setState({
            image: result.info.secure_url 
          });
          imageview.close();
        }
      }
    );
    imageview.open();
  };
  


  handleUpdateTags = tags => {
    this.setState({ tags });
  };
  handleSubmit=(event)=>{
      event.preventDefault()
      const data={
          article:{title:this.state.title,
          description:this.state.description,
          body:this.state.body,
          image: this.state.image,
          tagList: this.state.tags
        }
        }
        if(this.props.article1==="creating_article"){
            this.props.createArticles(data)
        }else if(this.props.article1==="updating_article"){
            if(this.props.articleSlug){
                this.props.UpdateArticleFunc(this.props.articleSlug, data)
            } 
        }   
        this.componentDidUpdate=()=>{
         if(this.props.article.article){
                var slug=this.props.article.article.slug;
               if(slug){
            window.location="/article/"+slug;
         }
         }
       } 
  }
  componentDidUpdate(prevProps){
    if( this.props.titleValue !== prevProps.titleValue){
        this.setState({
            body:this.props.bodyValue,
            title:this.props.titleValue,
            description:this.props.descValue
        })
    }
  }
 
    render() {
           
        return ( 
            <div>
                <NavigationBar />
            <div className="create_article"><span className="heading"> {this.props.articleAction}</span></div>
        <ArticleForm
        change={this.change}
        handleUpload={this.handleUpload} 
        button_name1={this.props.button_name}
         handleChange={this.handleChange}
         modules={Modules.modules}
         formats={Modules.formats}
         handleSubmit={this.handleSubmit}
         titleValue={this.props.titleValue}
         body={this.state.body}
         descValue={this.props.descValue}
         tags={this.state.tags}
         handleUpdateTags={this.handleUpdateTags}
        />
        </div>
         );
    }
}
CreateUpdate.propTypes ={
    slug:PropTypes.string,
    createArticles:PropTypes.func,
    object:PropTypes.array,
};


const mapStateToProps= state =>({
    article:state.articles,
})

export default connect(mapStateToProps,{createArticles,UpdateArticleFunc})(CreateUpdate);
