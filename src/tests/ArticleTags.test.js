import React from 'react';
import { shallow } from 'enzyme';
import TagsList from '../components/tags/ViewArticleTags';

describe('renders article tags list', () => {
  const tags = ['react', 'django'];

  it('renders a list of tags', () => {
    const wrapper = shallow(<TagsList tags={tags} />);
    expect(wrapper.contains(<li className="tags-item">react</li>)).toBeTruthy;
  });
});
