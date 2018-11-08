import { mount } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Comment from '../components/comments';
import CommentForm from '../components/commentForm';
import Replies from '../components/commentReplies';


const store = configureStore([thunk])({
  comments: {
    comments: [{
      id: 1,
      timestamp: '2012-12-12',
    }],
  },
  comment: {
    replies: [
      { reply: [{}] },
    ],
  },
});

let wrapper;

describe('Comments Component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Comment fetchAction={jest.fn} slug="how-i-meet-your-mothersssss" />
      </Provider>,
    );
  });
  console.log(wrapper);
  it('should render comments comment', () => {
    expect(wrapper).toHaveLength(1);
  });
});
describe('comment form component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <CommentForm commentType="comment" />
      </Provider>,
    );
  });
  it('should render comments comment', () => {
    expect(wrapper).toHaveLength(1);
  });
});

describe('comment replies component', () => {
  beforeEach(() => {
    wrapper = mount(
      <Provider store={store}>
        <Replies commentId={1} commentSlug="this-is-a-slug" />
      </Provider>,
    );
  });
  it('should render comments comment', () => {
    expect(wrapper).toHaveLength(1);
  });
});
