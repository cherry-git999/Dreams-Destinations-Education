import React from 'react';
import { Clock, Wrench } from 'lucide-react';

interface ComingSoonProps {
  title: string;
  isDarkMode: boolean;
}

const ComingSoon: React.FC<ComingSoonProps> = ({ title, isDarkMode }) => {
  return (
    <div className={`min-h-screen flex items-center justify-center py-12 ${
      isDarkMode ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className={`rounded-xl shadow-xl p-12 border-t-4 ${
          isDarkMode 
            ? 'bg-gray-800 border-yellow-400' 
            : 'bg-white border-red-600'
        }`}>
          <div className="mb-8">
            <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border-2 ${
              isDarkMode 
                ? 'bg-yellow-400 bg-opacity-20 border-yellow-400' 
                : 'bg-red-600 bg-opacity-20 border-red-600'
            }`}>
              <Wrench className={`w-12 h-12 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
            </div>
            <h1 className={`text-3xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {title}
            </h1>
            <div className={`flex items-center justify-center mb-6 ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`}>
              <Clock className="w-6 h-6 mr-2" />
              <span className="text-xl font-semibold">Coming Soon</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <p className={`text-lg ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              We're working hard to bring you this exciting new section!
            </p>
            <p className={`${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Our team is currently developing comprehensive content and features for this area. 
              Please check back soon for updates.
            </p>
          </div>
          
          <div className={`mt-8 p-4 rounded-lg border ${
            isDarkMode 
              ? 'bg-yellow-400 bg-opacity-10 border-yellow-400' 
              : 'bg-red-600 bg-opacity-10 border-red-600'
          }`}>
            <p className={`text-sm font-medium ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`}>
              In the meantime, feel free to explore our <span className="font-bold">About Us</span> section 
              to learn more about Dreams Destinations & Education Private Limited.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;