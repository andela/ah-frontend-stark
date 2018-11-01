import React from 'react';
import Header from './Header';
import Articles from './Articles';
import Footer from './Footer';
import StoryHead from './StoriesHead';
import NavBar from './NavBar';

const LandingPage = () => (
  <div>
    <NavBar />
    <Header />
    <StoryHead />
    <Articles />
    <Footer />
  </div>
);

export default LandingPage;
