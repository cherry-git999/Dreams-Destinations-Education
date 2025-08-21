import React from 'react';
import { Building2, Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  onTabChange: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, onTabChange }) => {
  const tabs = [
    { id: 'about', label: 'About Us' },
    { id: 'tours', label: 'Tours' },
    { id: 'education', label: 'Education' },
    { id: 'recruitment', label: 'Recruitment' },
    { id: 'coaching', label: 'Coaching & Training' },
    { id: 'management', label: 'Management' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavigation = (tab: string) => {
    onTabChange(tab);
    // Scroll to top when switching pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className={`border-t-2 ${
        isDarkMode
          ? 'bg-black text-white border-yellow-400'
          : 'bg-gray-900 text-white border-red-600'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div
                className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                }`}
              >
                <Building2
                  className={`w-6 h-6 ${
                    isDarkMode ? 'text-black' : 'text-white'
                  }`}
                />
              </div>
              <div>
                <h3
                  className={`text-xl font-bold ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-400'
                  }`}
                >
                  Dreams Destinations & Education
                </h3>
                <p className="text-sm text-gray-300">Private Limited</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Providing exceptional Travel, Education, Training, and Recruitment
              services that inspire individuals to Explore, Learn, and Grow.
            </p>
            <p
              className={`font-semibold italic ${
                isDarkMode ? 'text-yellow-400' : 'text-red-400'
              }`}
            >
              Global Opportunities & Endless Possibilities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-400'
              }`}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => handleNavigation(tab.id)}
                    className={`transition-colors text-left hover:underline w-full ${
                      isDarkMode
                        ? 'text-gray-300 hover:text-yellow-400'
                        : 'text-gray-300 hover:text-red-400'
                    }`}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4
              className={`text-lg font-semibold mb-4 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-400'
              }`}
            >
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone
                  className={`w-4 h-4 ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-400'
                  }`}
                />
                <span className="text-gray-300 text-sm">+94741886686</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  className={`w-4 h-4 ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-400'
                  }`}
                />
                <span className="text-gray-300 text-sm">info@ddeltd.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin
                  className={`w-4 h-4 ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-400'
                  }`}
                />
                <span className="text-gray-300 text-sm">
                  Western Province, Sri Lanka
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={`border-t mt-8 pt-8 text-center ${
            isDarkMode ? 'border-gray-800' : 'border-gray-700'
          }`}
        >
          <p className="text-gray-400 text-sm">
            © 2024 Dreams Destinations & Education Private Limited. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
