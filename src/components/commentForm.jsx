import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleReactValidator from 'simple-react-validator';
import { createAction } from '../actions/commentAction';
import { createCommentAction } from '../actions/repliesAction';

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.onchangeHandler = this.onchangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.state = {
      comment: {
        body: '',
      },
    };
    this.validator = new SimpleReactValidator();
  }

  onSubmitHandler(event) {
    event.preventDefault();
    if (this.validator.allValid()) {
      const { comment } = this.state;
      const {
        createAction: addComment,
        createCommentAction: addReply,
        commentID, articleSlug: commentSlug,
      } = this.props;
      const baseUrl = 'https://ah-backend-stark-staging.herokuapp.com/';
      switch (this.props.commentType) {
        case 'reply':
          const newComment = {
            reply: {
              body: comment.body,
            },
          };
          addReply(newComment, commentSlug, commentID);
          break;
        case 'comment':
          const url = `${baseUrl}api/articles/${this.props.commentSlug}/comments/`;
          const newComment1 = {
            comment: {
              body: comment.body,
            },
          };
          addComment(newComment1, url);
          this.setState({
            comment: {
              body: '',
            },
          });
          break;
        default:
          console.log('sorry something went wrong');
          break;
      }
      window.location.reload();
    } else {
      this.validator.showMessages();
      // render to show messages for the first time
      this.forceUpdate();
    }
  }


  onchangeHandler(event) {
    this.setState({
      comment: {
        body: event.target.value,
      },
    });
  }

  render() {
    const { body } = this.state;
    return (
      <form onSubmit={this.onSubmitHandler}>
        <div className="input-group mb-3">
          <input
            type="text"
            name="body"
            value={body}
            className="form-control"
            placeholder="Enter a comment"
            aria-label="Enter a comment"
            onChange={this.onchangeHandler}
            required
          />
          <div className="input-group-append">
            <button className="btn btn-outline-dark" type="submit" id="button-send">Send</button>
          </div>
        </div>
        {this.validator.message('comment', this.state.comment.body, 'required|max:200|min:5')}
      </form>
    );
  }
}

CommentForm.propTypes = {
  createAction: PropTypes.func.isRequired,
  createCommentAction: PropTypes.func.isRequired,
  commentType: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  comment: state.comment,
});

export default connect(mapStateToProps, { createAction, createCommentAction })(CommentForm);
