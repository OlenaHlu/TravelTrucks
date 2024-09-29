import React, { useState } from "react";
import css from "./CamperTabs.module.css";

const CamperTabs = () => {
  const [activeTab, setActiveTab] = useState("features");

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
        {activeTab === "features" ? (
          <div className={css.featuresContent}>
            <p>Тут будуть відображатися особливості транспортного засобу...</p>
          </div>
        ) : (
          <div className={css.reviewsContent}>
            <p>Тут будуть відображатися огляди...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CamperTabs;
