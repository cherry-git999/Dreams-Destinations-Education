import React, { useState } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  isDarkMode: boolean;
  onThemeToggle: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange, isDarkMode, onThemeToggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const tabs = [
    { id: 'about', label: 'About Us' },
    { id: 'tours', label: 'Tours' },
    { id: 'education', label: 'Education' },
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'coaching', label: 'Coaching & Training' },
    { id: 'management', label: 'Management' },
    { id: 'contact', label: 'Contact' }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`shadow-lg sticky top-0 z-50 border-b-2 ${
      isDarkMode 
        ? 'bg-black border-yellow-400' 
        : 'bg-white border-red-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Company Logo and Name */}
          <div className="flex items-center space-x-3">
            
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <a href="/">
                <img 
                  src="/imgs/logoM.jpg"  
                  alt="Company Logo"
                  className="w-full h-full object-contain"
                />
              </a>
            </div>

            {/* Company Name (Desktop) */}
            <div className="hidden sm:block">
              <a href="/">
                <h1 className={`text-lg font-bold ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}>
                  Dreams Destinations & Education
                </h1>
              </a>
              <p className={`text-xs ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Private Limited
              </p>
            </div>

            {/* Short Name (Mobile) */}
            <div className="sm:hidden">
              <a href="/">
                <h1 className={`text-sm font-bold ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}>
                  Dreams D&E
                </h1>
              </a>
            </div>
          </div>

          {/* Desktop Navigation and Theme Toggle */}
          <div className="hidden lg:flex items-center space-x-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                  activeTab === tab.id
                    ? isDarkMode
                      ? 'text-black bg-yellow-400'
                      : 'text-white bg-red-600'
                    : isDarkMode
                      ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                      : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <button
              onClick={onThemeToggle}
              className={`ml-4 p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'text-yellow-400 hover:bg-gray-800'
                  : 'text-red-600 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onThemeToggle}
              className={`p-2 rounded-lg transition-all duration-300 ${
                isDarkMode
                  ? 'text-yellow-400 hover:bg-gray-800'
                  : 'text-red-600 hover:bg-gray-100'
              }`}
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={toggleMobileMenu}
              className={`transition-colors duration-200 ${
                isDarkMode
                  ? 'text-gray-300 hover:text-yellow-400 focus:text-yellow-400'
                  : 'text-gray-700 hover:text-red-600 focus:text-red-600'
              }`}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden border-t ${
            isDarkMode ? 'border-gray-700' : 'border-gray-200'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    onTabChange(tab.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                    activeTab === tab.id
                      ? isDarkMode
                        ? 'text-black bg-yellow-400'
                        : 'text-white bg-red-600'
                      : isDarkMode
                        ? 'text-gray-300 hover:text-yellow-400 hover:bg-gray-800'
                        : 'text-gray-700 hover:text-red-600 hover:bg-gray-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
