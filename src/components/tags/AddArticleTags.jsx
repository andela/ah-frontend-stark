import React, { Component } from 'react';
import { InputTagsContainer } from 'react-input-tags';
import PropTypes from 'prop-types';

class AddTags extends Component {
  state = {
    tags: [],
  };

  render() {
    return (
      <React.Fragment>
        <h5>Add Tags</h5>
        <InputTagsContainer
          InputTagsClassName="tags-container"
          TagClassName="tag-item"
          InputClassName="tag-input-field"
          inputPlaceholder=" add tag"
          tags={this.props.tags}
          handleUpdateTags={this.props.handleUpdateTags}
        />
        <br />
      </React.Fragment>
    );
  }
}

AddTags.propTypes = {
  tags: PropTypes.array.isRequired,
  handleUpdateTags: PropTypes.func.isRequired,
};

export default AddTags;

