import React from 'react';
import Header from './Header';
import Articles from './Articles';
import Footer from './Footer';
import StoryHead from './StoriesHead';
import LoginModal from './LoginModal';
import NavigationBar from './navigation/NavigationBar';

const LandingPage = () => (
  <div>
    {/* <NavBar /> */}
    <NavigationBar />
    <Header />
    <LoginModal />
    <StoryHead />
    <Articles />
    <Footer />
  </div>
);

export default LandingPage;
