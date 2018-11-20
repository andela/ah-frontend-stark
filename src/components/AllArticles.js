import React, { Component } from 'react';
import GetArticles from './GetArticles'
class AllArticles extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <GetArticles
                articlesTypes= "All Articles"
            />
           </div> 
         );
    }
}
 
export default AllArticles;
