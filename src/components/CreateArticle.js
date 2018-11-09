import React, { Component } from 'react';
import CreateUpdate from './CreateUpdate'
import NavBar from './NavBar'
class CreateArticles extends Component {
    state = {  }
    render() { 
        return (
            <div>
            <NavBar />
            <CreateUpdate
                article1= "creating_article"
                button_name="Create Article"
                articleAction="CREATE A NEW ARTICLE"
            />
           </div> 
         );
    }
}
 
export default CreateArticles;
