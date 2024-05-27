import "./FeatureSection.css";
import { tabs } from "./FeatureTabs";
import Arrow from "../../assets/svg/Chevron.svg";
import { useState } from "react";

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  const handleNext = () => {
    if (activeTab < tabs.length) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrev = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  const activeTabData = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <div className="tab-container">
      <div className="right-section">
        <div className="tab-buttons">
          {tabs.map((tab) => (
            <button
              type="button"
              key={tab.id}
              className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => handleTabClick(tab.id)}
            >
              <img src={tab.iconSrc} alt={tab.label} className="tab-icon" />
              {tab.label}
            </button>
          ))}
        </div>
        <button className="view-all-button">مشاهده همه محصولات</button>
      </div>
      <div className="tab-image">
        <button
          className={`nav-button ${activeTab === 1 ? "disabled" : ""}`}
          onClick={handlePrev}
          disabled={activeTab === 1}
          style={{top : '50%', left : -20}}
        >
          <img
            src={Arrow}
            alt=""
            width={20}
            height={20}
            style={{ rotate: "180deg"  }}
          />
        </button>
        <img src={activeTabData.imgSrc} alt="Active Tab" />
        <button
          type="button"
          className={`nav-button ${
            activeTab === tabs.length ? "disabled" : ""
          }`}
          onClick={handleNext}
          disabled={activeTab === tabs.length}
          style={{top : '50%', right : -20}}
        >
          <img src={Arrow} alt="" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
export default FeatureSection;
