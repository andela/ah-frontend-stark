import React from "react";
import { shallow,mount } from "enzyme";
import LandingPage from "../components/LandingPage";
import NavigationBar from "../components/navigation/NavigationBar";
import Header from "../components/Header";
import StoryHead from "../components/StoriesHead";
import Articles from "../components/Articles";
import Footer from "../components/Footer";
import LoginModal from "../components/LoginModal";

it("renders without crashing", () => {
  shallow(<LandingPage />);
});

it("Loads all other components successfully", () => {
  const wrapper = shallow(<LandingPage />);
  expect(wrapper.find(NavigationBar)).toHaveLength(1);
  expect(wrapper.find(Header)).toHaveLength(1);
  expect(wrapper.find(LoginModal)).toHaveLength(1);
  expect(wrapper.find(StoryHead)).toHaveLength(1);
  expect(wrapper.find(Articles)).toHaveLength(1);
  expect(wrapper.find(Footer)).toHaveLength(1);
});
