import React from 'react';
import Header from './Header';
import LandingPageArticles from './LandingPageArticles';
import Footer from './Footer';
import StoryHead from './StoriesHead';
import LoginModal from './LoginModal';
import NavigationBar from './navigation/NavigationBar';

const LandingPage = () => (
  <div>
    <NavigationBar />
    <Header />
    <LoginModal />
    <StoryHead />
    <LandingPageArticles />
    <Footer />
  </div>
);

export default LandingPage;
