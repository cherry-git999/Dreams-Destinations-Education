import React, { useState } from 'react';
import Navigation from './components/Navigation';
import AboutUs from './components/AboutUs';
import Tours from './components/Tours';
import Education from './components/Education';
import Recruitment from './components/Recruitment';
import Contact from './components/Contact';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Listen for contact navigation events
  React.useEffect(() => {
    const handleNavigateToContact = () => {
      setActiveTab('contact');
    };

    window.addEventListener('navigateToContact', handleNavigateToContact);
    return () => {
      window.removeEventListener('navigateToContact', handleNavigateToContact);
    };
  }, []);

  const tabTitles: { [key: string]: string } = {
    tours: 'Inbound and Outbound Tours',
    coaching: 'Coaching / Training & Development',
    management: 'The Management',
    contact: 'Contact Us'
  };

  const renderContent = () => {
    if (activeTab === 'about') {
      return <AboutUs isDarkMode={isDarkMode} onNavigateToContact={() => setActiveTab('contact')} />;
    } else if (activeTab === 'tours') {
      return <Tours isDarkMode={isDarkMode} />;
    } else if (activeTab === 'education') {
      return <Education isDarkMode={isDarkMode} />;
    } else if (activeTab === 'recruitment') {
      return <Recruitment isDarkMode={isDarkMode} />;
    } else if (activeTab === 'contact') {
      return <Contact isDarkMode={isDarkMode} />;
    }
    
    return <ComingSoon title={tabTitles[activeTab]} isDarkMode={isDarkMode} />;
  };

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Navigation 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode(!isDarkMode)}
      />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;