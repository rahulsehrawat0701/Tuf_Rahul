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
    <div class="dashboard" >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Banner Control Dashboard</h2>
      <button 
        onClick={handleToggleVisibility} 
        style={{
          display: 'block',
          width: '100%',
          padding: '10px',
          backgroundColor: bannerData.isVisible ? '#d9534f' : '#5cb85c',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginBottom: '20px'
        }}
      >
        {bannerData.isVisible ? 'Hide Banner' : 'Show Banner'}
      </button>
      <div style={{ marginBottom: '10px' }}>
        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={bannerData.description}
          onChange={handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>Timer (seconds):</label>
        <input
          type="number"
          name="timer"
          value={bannerData.timer}
          onChange={handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>Link:</label>
        <input
          type="text"
          name="link"
          value={bannerData.link}
          onChange={handleInputChange}
          style={{
            width: '100%',
            padding: '10px',
            marginTop: '5px',
            border: '1px solid #ddd',
            borderRadius: '4px'
          }}
        />
      </div>
    </div>
  );
};

export default Dashboard;
