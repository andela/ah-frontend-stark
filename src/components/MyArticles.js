import React, { Component } from 'react';
import GetArticles from './GetArticles'
class MyArticles extends Component {
    state = {  }
    render() { 
        return (
            <div><br />
            <GetArticles
                articlesTypes= "My Articles"
                update="true"
            />
           </div> 
         );
    }
}
 
export default MyArticles;
