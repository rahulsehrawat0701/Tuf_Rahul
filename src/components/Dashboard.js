import React from 'react';
import './Dashboard.css';

const Dashboard = ({ bannerData, setBannerData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBannerData({ ...bannerData, [name]: value });
  };

  const handleToggleVisibility = () => {
    setBannerData({ ...bannerData, isVisible: !bannerData.isVisible });
  };

  return (
    <div className="dashboard">
      <h2>Banner Control Dashboard</h2>
      <button 
        onClick={handleToggleVisibility} 
        className={bannerData.isVisible ? '' : 'show-banner'}
      >
        {bannerData.isVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
      <div>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={bannerData.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Timer (seconds):</label>
        <input
          type="number"
          name="timer"
          value={bannerData.timer}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={bannerData.link}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Dashboard;
