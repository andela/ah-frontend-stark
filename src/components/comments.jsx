import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import { fetchAction } from '../actions/commentAction';
import CommentForm from './commentForm';
import Replies from './commentReplies';

export class Comment extends Component {
  componentDidMount() {
    const { fetchAction: getComment, slug } = this.props;
    getComment(slug);
  }

  render() {
    const data = this.props.comments;
    const comments = data.comments.map(comment => (
      comment.parent_comment === null
        ? (
          <div key={comment.id}>
            <p>
              {comment.body}
            </p>
            <p>
By:
              <font color="#1e90ff">{comment.username}</font>
Time:
              {moment(comment.timestamp).format(' ddd, hA')}
            </p>
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <h5 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target={`#reply${comment.id}`}
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                    Replies
                    </button>
                  </h5>
                </div>

                <div
                  id={`reply${comment.id}`}
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body">
                    <Replies commentId={comment.id} commentSlug={this.props.slug} />
                  </div>
                </div>
              </div>
            </div>
            <hr />
          </div>) : null
    ));
    return (
      <Fragment>
        <div className="comment_box">
          <div className="card">
            <div className="card-header text-center">Comments</div>
            <div className="card-body">
              {comments}
              <CommentForm commentType="comment" commentSlug={this.props.slug} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Comment.propTypes = {
  fetchAction: PropTypes.func.isRequired,
  slug: PropTypes.string.isRequired,
  comments: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({
  comments: state.comments,
});

export default connect(mapStateToProps, { fetchAction })(Comment);
