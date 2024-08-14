import React, { useState } from 'react';
import Banner from './components/Banner';
import Dashboard from './components/Dashboard';

function App() {
  const [bannerData, setBannerData] = useState({
    isVisible: true,
    description: 'Welcome to our website!',
    timer: 60,
    link: 'https://example.com'
  });

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Banner
          isVisible={bannerData.isVisible}
          description={bannerData.description}
          timer={bannerData.timer}
          link={bannerData.link}
        />
        <Dashboard bannerData={bannerData} setBannerData={setBannerData} />
      </div>
    </div>
  );
}

export default App;
