import * as actions from '../actions/types';
import commentReducer from '../reducers/commentReducer';
import repliesReducer from '../reducers/RepliesReducer';

describe('comment Reducer', () => {
  it('should handle adding a comment', () => {
    const initialState = { comments: [] };
    const newComment = {
      comment: {
        body: 'hey there',
      },
    };
    const response = { comments: [{ comment: { body: 'hey there' } }] };
    expect(commentReducer(initialState, {
      type: actions.ADD_COMMENT,
      payload: newComment,
    })).toEqual(response);
  });
  it('should handle getting comment', () => {
    const initialState = { comments: [] };
    const newComment = {
      comment: {
        body: 'hey there',
      },
    };
    const response = { comments: { comment: { body: 'hey there' } } };
    expect(commentReducer(initialState, {
      type: actions.GET_COMMENT,
      payload: newComment,
    })).toEqual(response);
  });
});

describe('Comment reply Reducer ', () => {
  it('should handle getting comment', () => {
    const initialState = { replies: [] };
    const newComment = {
      reply: {
        body: 'hey there',
      },
    };
    const response = { replies: [{ reply: { body: 'hey there' } }] };
    expect(repliesReducer(initialState, {
      type: actions.GET_REPLY,
      payload: newComment,
    })).toEqual(response);
  });
});
