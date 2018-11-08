import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import CreateArticle from '../components/CreateArticle';
import CreateUpdate from '../components/CreateUpdate';
import GetArticles from '../components/GetArticles';
import MyArticles from '../components/MyArticles';
import AllArticles from '../components/AllArticles';
import ArticleForm from '../components/ArticleForm';
import Article from '../components/ViewArticle';
import UpdateArticle from '../components/UpdateArticle';
import ArticleCard from '../components/ArticleCard1';
import store from '../store';


Enzyme.configure({ adapter: new Adapter() });
jest.mock('react-quill');

describe('article component', () => {
  const mockStore = configureMockStore();
  beforeEach(() => {
    mockStore({});
  });
  const getEvent = () => ({
    preventDefault: jest.fn(),
  });

  it('should render create article without crashing', () => {
    shallow(
      <CreateArticle
        store={store}
        articleSlug="test54321"
        article1="updating_article"
        button_name="Update Article"
        articleAction="UPDATE YOUR ARTICLE"
        titleValue="test54321"
        bodyValue="test54321"
        descValue="test54321"
      />,
    );
  });

  it('should test get all articles without crashing', () => {
    mount(<Router><GetArticles store={store} /></Router>);
  });
  it('should test fetching all articles', () => {
    const props = {
      articlesTypes: 'All Articles',
      articleSlug: 'this-is-a-slug',
      fetchArticles: jest.fn(),
      article: {
        slug: 'man',
        title: 'man',
        description: 'you',
        body: 'head',
      },
    };
    const component = shallow(<Router><GetArticles store={store} {...props} /></Router>).dive().instance();
    component.forceUpdate();
  });
  it('should test fetching my articles', () => {
    const props = {
      articlesTypes: 'My Articles',
      myArticles: jest.fn(),
      article: {
        slug: 'man',
        title: 'man',
        description: 'you',
        body: 'head',
      },
    };
    const component = shallow(<Router><GetArticles store={store} {...props} /></Router>).dive().instance();
    component.forceUpdate();
  });

  it('should test updating articles without crashing', () => {
    mount(<Router><Provider store={store}><UpdateArticle match={{ params: { slug: 'hjkmnjh' } }} /></Provider></Router>);
  });

  it('should test get single article without crashing', () => {
    mount(<Router><Article match={{ params: { slug: 'hjkmnjh' } }} store={store} /></Router>);
  });

  it('should test get my articles without crashing', () => {
    shallow(<Router><MyArticles /></Router>);
  });

  it('should test get all articles without crashing', () => {
    shallow(<Router><AllArticles /></Router>);
  });

  it('should call handleSubmit function on submit', () => {
    const handleSubmit = jest.fn();
    const wrapper = shallow(<CreateUpdate handleSubmit={handleSubmit} store={store} />);
    wrapper.dive().find('ArticleForm').simulate('submit', { preventDefault() {} });
    wrapper.update();
  });

  it('should call inputs on change state', () => {
    let wrapper;
    const handleUpload = jest.fn();
    wrapper = shallow(<ArticleForm handleUpload={handleUpload} />);
    wrapper.find('#input1').simulate('change', { target: { name: 'title', value: 'hello' } });
    wrapper.find('#input2').simulate('change', { target: { name: 'description', value: 'hello' } });
    wrapper.find('#uploadButton').simulate('click');
  });

  it('should call handleSubmit function on submit', () => {
    const handleSubmit = jest.fn();
    const wrapper = mount(<Router><CreateUpdate handleSubmit={handleSubmit} store={store} /></Router>);
    wrapper.find('ArticleForm').simulate('submit', { preventDefault() {} });
  });

  it('should test get all articles card without crashing', () => {
    mount(<Router><ArticleCard store={store} /></Router>);
  });

  it('should test get all articles card functions without crashing', () => {
    const props = {
      update: true,
      slug: 'title-two',
      deleteArticles: jest.fn(),
    };
    const wrapper = mount(<Router><ArticleCard store={store} {...props} /></Router>);
    wrapper.find('#but1').simulate('click');
    wrapper.find('#deleteButton').simulate('click');
  });

  it('should render createUpdate app', () => {
    const props = {
      article1: 'creating_article',
      createArticles: jest.fn(),
    };
    const wrapper = shallow(<CreateUpdate store={store} {...props} />).dive().instance();
    wrapper.handleSubmit({ preventDefault() {} });
    wrapper.handleChange();
    wrapper.change({ target: { value: 'kenneth' } });
    wrapper.forceUpdate();
    wrapper.componentDidUpdate();
  });

  it('should render createUpdate  updating an article app', () => {
    const props = {
      article1: 'updating_article',
      articleSlug: 'this-is-a-slug',
      UpdateArticleFunc: jest.fn(),
      titleValue: 'man',
      location: '/article/joy-it',
      article: { article: 'gal' },
    };
    const wrapper = shallow(<CreateUpdate store={store} {...props} />).dive().instance();
    wrapper.handleSubmit({ preventDefault() {} });
    wrapper.handleChange();
    wrapper.change({ target: { value: 'joy' } });
    wrapper.componentDidUpdate({ titleValue: 'woman' });
  });
});
