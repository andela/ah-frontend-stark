import React, { Component } from "react";
import CreateUpdate from "./CreateUpdate";
class CreateArticles extends Component {
  state = {};
  render() {
    return (
      <div>
        <CreateUpdate
          article1="creating_article"
          button_name="Create Article"
          articleAction="CREATE A NEW ARTICLE"
        />
      </div>
    );
  }
}

export default CreateArticles;
