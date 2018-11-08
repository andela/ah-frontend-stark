import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import CommentForm from './commentForm';
import { fetchComment } from '../actions/repliesAction';

class Replies extends Component {
  componentDidMount() {
    const { fetchComment: getReplies, commentSlug, commentId } = this.props;
    getReplies(commentSlug, commentId);
  }

  render() {
    const { commentId, comment: data, commentSlug } = this.props;
    const replies = data.map(item => (
      item.reply.map(reply => (
        item.id !== commentId ? null
          : (
            <div key={reply.id} className="">
              <p>{reply.body}</p>
              <span>
                <strong>Time: </strong>
                {moment(reply.timestamp).format(' ddd, hA')}
                <strong id="strong"> By: </strong>
                {reply.username}
              </span>
              <hr />
            </div>
          )
      ))
    ));
    return (
      <div className="accordion" id="accordionExample">
        {replies}
        <CommentForm commentType="reply" commentID={commentId} articleSlug={commentSlug} />
      </div>
    );
  }
}

Replies.propTypes = {
  fetchComment: PropTypes.func.isRequired,
  commentSlug: PropTypes.string.isRequired,
  comment: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};


const mapStateToProps = state => ({
  comment: state.comment.replies,
});

export default connect(mapStateToProps, { fetchComment })(Replies);
