import React from 'react';
import {Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  isDarkMode: boolean;
  onNavigate?: (tab: string) => void;
}

const Footer: React.FC<FooterProps> = ({ isDarkMode, onNavigate }) => {
  const handleNavigation = (tab: string) => {
    if (onNavigate) {
      onNavigate(tab);
    }
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
              <img
                     src="/imgs/logoM.jpg" 
                      alt="Company Logo"
                        className="w-10 h-10 object-contain rounded-lg"
                        />
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
              Global Opportunities… Endless Possibilities…!!!
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
              <li>
                <button
                  onClick={() => handleNavigation('about')}
                  className={`transition-colors text-left ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-yellow-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('tours')}
                  className={`transition-colors text-left ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-yellow-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  Tours
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('education')}
                  className={`transition-colors text-left ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-yellow-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  Education
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('recruitment')}
                  className={`transition-colors text-left ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-yellow-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  Recruitment
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation('coaching')}
                  className={`transition-colors text-left ${
                    isDarkMode
                      ? 'text-gray-300 hover:text-yellow-400'
                      : 'text-gray-300 hover:text-red-400'
                  }`}
                >
                  Coaching & Training
                </button>
              </li>
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
                <a
                  href="tel:+94741886686"
                  className="text-gray-300 text-sm hover:underline"
                >
                  +94 74188 6686
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail
                  className={`w-4 h-4 ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-400'
                  }`}
                />
                <a
                  href="mailto:info@ddeltd.com"
                  className="text-gray-300 text-sm hover:underline"
                >
                  info@ddeltd.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin
                  className={`w-4 h-4 mt-1 ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-400'
                  }`}
                />
                <span className="text-gray-300 text-sm leading-relaxed">
                  C / O Building Clinic Private Limited <br />
                  Dreams Destinations and Education Private Limited <br />
                  Level 35, West Tower, World Trade Center <br />
                  Echelon Square, Colombo 01 <br />
                  Colombo District, Western Province <br />
                  Sri Lanka. 00100
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
