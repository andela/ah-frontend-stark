import React from 'react';
import { shallow } from 'enzyme';
import ArticleForm from '../components/ArticleForm';

describe('<CreateArticle/>', () => {
  it('renders article form', () => {
    const field = shallow(<ArticleForm />);
    expect(field.find('input').length).toEqual(2);
    expect(field.find('button').length).toEqual(1);
    expect(field.find('form').length).toEqual(1);
    expect(field.find('div').length).toEqual(5);
    expect(field.find('center').length).toEqual(1);
  });
});
