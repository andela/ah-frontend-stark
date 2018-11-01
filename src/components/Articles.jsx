import React from "react";
import BigCard from "./BigCard";
import TopStory from "./TopStoryCard";
import SmallCard from "./SmallCard";

const Articles = () => (
  <div className="article-container row bg-light">
    <div className="col-lg-4 left-card">
      <BigCard />
    </div>
    <div className="col-lg-5">
      <SmallCard />
      <SmallCard />
    </div>
    <div className="col-lg-3">
      <TopStory />
      <TopStory />
    </div>
  </div>
);

export default Articles;
