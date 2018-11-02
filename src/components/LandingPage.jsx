import React from 'react';
import Header from './Header';
import Articles from './Articles';
import Footer from './Footer';
import StoryHead from './StoriesHead';
import LoginModal from './LoginModal';
import NavBar from './NavBar';

const LandingPage = () => (
  <div>
    <NavBar />
    <Header />
    <LoginModal />
    <StoryHead />
    <Articles />
    <Footer />
  </div>
);

export default LandingPage;
