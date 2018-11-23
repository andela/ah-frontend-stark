import React, { Component } from 'react';
import { connect } from 'react-redux';
import BigCard from './BigCard';
import TopStory from './TopStoryCard';
import SmallCard from './SmallCard';
import { fetchArticles } from '../actions/ArticleAction';
export class LandingPageArticles extends Component {
    state = {  }

    componentDidMount() {
          this.props.fetchArticles();
      }
    changeArticles=(data)=>{
        var randomItem = data[Math.floor(Math.random()*data.length)];
        return randomItem;
    }  

    render() { 
        let bigStory;
        let smallStory1;
        let smallStory2;
        let topstory1;
        let topstory2;

        const {articles} = this.props;
        const data=articles.results;
        if(data){
        bigStory=this.changeArticles(data);
        smallStory1=this.changeArticles(data);
        smallStory2=this.changeArticles(data);
        topstory1=this.changeArticles(data);
        topstory2=this.changeArticles(data);
    }
        return ( 
            <div className="article-container row bg-light">
    <div className="col-lg-4 left-card">
      <BigCard big={bigStory}/>
    </div>
    <div className="col-lg-5">
      <SmallCard small1={smallStory1}/>
      <SmallCard small1={smallStory2}/>
    </div>
    <div className="col-lg-3">
      <TopStory topStory={topstory1}/>
      <TopStory topStory={topstory2}/>
    </div>
  </div>
         );
    }
}

const mapStateToProps = state => ({
    articles: state.articles.articles,
  });
  
  export default connect(mapStateToProps, { fetchArticles })(LandingPageArticles);