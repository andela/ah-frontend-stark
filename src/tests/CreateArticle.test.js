import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import configureMockStore from 'redux-mock-store';
import CreateArticles from '../components/CreateArticle';
import CreateUpdate from '../components/CreateUpdate';
import GetArticles from '../components/GetArticles';
import Article from '../components/ViewArticle';
import store from '../store';
import { BrowserRouter } from 'react-router-dom';

Enzyme.configure({ adapter: new Adapter() });
describe('article component', () => {
  const mockStore = configureMockStore();
  beforeEach(() => {
    mockStore({});
  });

  it('should render create article without crashing', () => {
    shallow(
      <CreateArticles
        store={store}
        createArticles={{
          title: 'title',
          description: 'body',
          body: 'sample_slug',
          valid: 'body cannojt be empty',
        }}
      />,
    );
  });

  it('should test get all articles without crashing', () => {
    mount(<GetArticles store={store} />);
  });
  it('should test get single article without crashing', () => {
    mount(
    <BrowserRouter><Article match={{ params: { slug: 'hjkmnjh' } }} store={store} /></BrowserRouter>);
  });

  it('should call handleSubmit function on submit', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<CreateUpdate handleSubmit={handleSubmit} store={store} />);
    wrapper.dive().find('ArticleForm').simulate('submit', { preventDefault() {} });
  });
});
