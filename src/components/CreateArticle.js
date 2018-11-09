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
          articleAction="Create a new article"
        />
      </div>
    );
  }
}

export default CreateArticles;
