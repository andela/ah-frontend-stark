import React from 'react';
import { shallow } from 'enzyme';
import ArticleForm from '../components/ArticleForm';
import DangerAlert from '../components/alert';
import ErrorNotFound from '../views/notfound';

let wrapper;
let handleLike;
let likeArticle;
let dislikeArticle;

describe('<CreateArticle/>', () => {
  it('renders article form', () => {
    const field = shallow(<ArticleForm />);
    expect(field.find('input').length).toEqual(2);
    expect(field.find('button').length).toEqual(2);
    expect(field.find('form').length).toEqual(1);
    expect(field.find('div').length).toEqual(6);
    expect(field.find('center').length).toEqual(2);
  });
  it('test alert js', () => {
    const field = shallow(<DangerAlert />);
    expect(field.find('div').length).toEqual(1);
  });
  it('test alert js', () => {
    const field = shallow(<ErrorNotFound />);
    expect(field.find('h1').length).toEqual(1);
  });
});

describe('Like/Dislike an article', () => {
  beforeEach(() => {
    handleLike = jest.fn();
    likeArticle = jest.fn();
    dislikeArticle = jest.fn();

    instance = new ArticleForm();
    instance.handleLike = handleLike;
    instance.likeArticle = likeArticle;
    instance.dislikeArticle = dislikeArticle;

    wrapper = shallow(
      <Provider store={store}>
        {instance.render()}
      </Provider>,
    );

    it('form should call handleLike when Like/Dislike icon is clicked', () => {
      const submit = wrapper.find('#like');
      submit.simulate('click', {
        preventDefault() {
        },
      });
      expect(handleLike).toHaveBeenCalled();
      expect(likeArticle).toHaveBeenCalled();
      expect(dislikeArticle).toHaveBeenCalled();
    });
  });
});
