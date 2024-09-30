import React, { useState } from "react";
import Reviews from "../Reviews/Reviews";
import Features from "../Features/Features";
import css from "./CamperTabs.module.css";

const CamperTabs = () => {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div>
      <div className={css.container}>
        <button
          className={`${css.tabButton} ${
            activeTab === "features" ? css.active : ""
          }`}
          onClick={() => setActiveTab("features")}
        >
          Features
        </button>
        <button
          className={`${css.tabButton} ${
            activeTab === "reviews" ? css.active : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </button>
      </div>
      <div className={css.tabContent}>
        {activeTab === "features" && (
          <div className={css.featuresContent}>
            <Features />
          </div>
        )}
        {activeTab === "reviews" && (
          <div className={css.reviewsContent}>
            <Reviews />
          </div>
        )}
      </div>
    </div>
  );
};

export default CamperTabs;
