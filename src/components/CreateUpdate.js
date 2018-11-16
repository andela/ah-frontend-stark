import React, { Component}  from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createArticles} from '../actions/ArticleAction';
import ArticleForm from './ArticleForm';
import Modules from '../utils/Editorplugins';
import getErrorMessages from '../utils/ArticleValidation';
import DangerAlert from './alert'
import NavigationBar from './navigation/NavigationBar';
class CreateUpdate extends Component {
    
        state = {
            title: "",
            description:"",
            body: "",
            error: "",
        }   
        change=(e)=>{
            this.setState({
                [e.target.name]:e.target.value
            });
        };
  handleChange=(event)=> {
      this.setState({body:event})
  }
  handleSubmit=(event)=>{
      event.preventDefault()
      const data={
          article:{title:this.state.title,
          description:this.state.description,
          body:this.state.body}
        }
        if(this.props.article1==="creating_article"){
            this.props.createArticles(data)
        }else{(console.log("this has failed"))}
        this.componentDidUpdate=()=>{
         if(this.props.article.article){ 
                var slug=this.props.article.article.slug;
               if(slug){
            window.location="/article/"+slug;
         }
         }
       }   
  };
 
    render() {
           const errors=getErrorMessages(this.props.article.errors.title,
            this.props.article.errors.body,
            this.props.article.errors.description, 
            this.props.article.errors)
        return ( 
            <div>
                <NavigationBar />
            <div className="create_article"><span>{this.props.articleAction}</span></div>
        <ArticleForm
        change={this.change} 
        button_name1={this.props.button_name}
         handleChange={this.handleChange}
         modules={Modules.modules}
         handleSubmit={this.handleSubmit}
        />
        {errors?
       <center><DangerAlert
        value={errors}/></center>:" "}
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

export default connect(mapStateToProps,{createArticles})(CreateUpdate);
