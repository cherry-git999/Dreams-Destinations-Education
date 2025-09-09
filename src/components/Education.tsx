import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  BookOpen, 
  ExternalLink,
  Globe,
  Users,
  Award,
  Clock
} from 'lucide-react';

interface EducationProps {
  isDarkMode: boolean;
}

const Education: React.FC<EducationProps> = ({ isDarkMode }) => {
  const universities = [
    {
      name: 'Lincoln University College',
      country: 'Malaysia',
      logoPath: '/imgs/LU.png',
      websiteUrl: 'https://www.lincoln.edu.my/',
      description: 'A leading private university in Malaysia offering quality education with international standards.'
    },
    {
      name: 'Asia e University',
      country: 'Malaysia',
      logoPath: '/imgs/AU.png',
      websiteUrl: 'https://aeu.edu.my/',
      description: 'Malaysia\'s premier digital university providing flexible and innovative learning solutions.'
    },
    {
      name: 'City University',
      country: 'Malaysia',
      logoPath: '/imgs/CU.png',
      websiteUrl: 'https://city.edu.my/',
      description: 'A dynamic institution focused on providing practical and industry-relevant education.'
    },
    {
      name: 'Krupanidhi Group of Institutions',
      country: 'India',
      logoPath: '/imgs/KG.png',
      websiteUrl: 'https://krupanidhi.edu.in/',
      description: 'A prestigious educational group in India known for excellence in healthcare and professional education.'
    },
    {
      name: 'Marwadi University',
      country: 'India',
      logoPath: '/imgs/MU.png',
      websiteUrl: 'https://www.marwadiuniversity.ac.in/',
      description: 'A leading university in Gujarat, India, offering innovative programs in engineering, management, and more.'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div className={`py-16 border-b-2 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-black to-gray-900 border-yellow-400' 
          : 'bg-gradient-to-r from-red-600 to-red-700 border-red-600'
      }`}>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className={`inline-block p-6 mb-6 rounded-xl shadow-2xl border-2 bg-white border-white`}>
            <GraduationCap className={`w-16 h-16 mx-auto ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`} />
          </div>
          
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            Education
          </h1>
          <p className={`text-xl md:text-2xl font-medium italic ${
            isDarkMode ? 'text-yellow-400' : 'text-yellow-300'
          }`}>
            Your Gateway to International Education
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Introduction Section */}
        <div className="mb-16">
          <div className={`rounded-xl shadow-lg p-8 border-l-4 ${
            isDarkMode 
              ? 'bg-gray-800 border-yellow-400' 
              : 'bg-white border-red-600'
          }`}>
            <div className="flex items-center mb-6">
              <Globe className={`w-8 h-8 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h2 className={`text-3xl font-bold ml-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Foreign Educational Institutions
              </h2>
            </div>
            <p className={`text-lg leading-relaxed mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Dreams Destinations & Education Private Limited proudly represents prestigious educational institutions 
              across Malaysia and India. We are committed to helping students achieve their academic dreams through 
              quality international education opportunities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className={`text-center p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <Users className={`w-8 h-8 mx-auto mb-2 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`} />
                <h3 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Expert Guidance</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Personalized counseling for your educational journey</p>
              </div>
              <div className={`text-center p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <Award className={`w-8 h-8 mx-auto mb-2 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`} />
                <h3 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Quality Institutions</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Partnerships with renowned universities</p>
              </div>
              <div className={`text-center p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
              }`}>
                <Globe className={`w-8 h-8 mx-auto mb-2 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`} />
                <h3 className={`font-semibold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>Global Opportunities</h3>
                <p className={`text-sm ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>Access to international education markets</p>
              </div>
            </div>
          </div>
        </div>

        {/* Universities List */}
        <div className="space-y-8">
          <h2 className={`text-3xl font-bold text-center mb-12 ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Our Partner Universities
          </h2>

          {universities.map((university, index) => (
            <div key={index} className={`rounded-xl shadow-lg border-t-4 hover:shadow-xl transition-all duration-300 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400 hover:bg-gray-750' 
                : 'bg-white border-red-600 hover:shadow-2xl'
            }`}>
              <div className="p-8">
                {/* University Header */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center mb-6 lg:mb-0">
                    {/* Logo Placeholder */}
                    <div className={`w-24 h-20 rounded-lg flex items-center justify-center border-2 shadow-sm overflow-hidden mb-4 sm:mb-0 sm:mr-6 bg-white ${
                      isDarkMode ? 'border-yellow-400' : 'border-red-600'
                    }`}>
                      <img
                        src={university.logoPath}
                        alt={`${university.name} Logo`}
                        className="w-full h-full object-contain p-2"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <GraduationCap className={`w-12 h-12 hidden ${
                        isDarkMode ? 'text-yellow-400' : 'text-red-600'
                      }`} />
                    </div>
                    
                    {/* University Info */}
                    <div>
                      <h3 className={`text-2xl font-bold mb-2 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {university.name}
                      </h3>
                      <div className="flex items-center mb-3">
                        <MapPin className={`w-5 h-5 mr-2 ${
                          isDarkMode ? 'text-yellow-400' : 'text-red-600'
                        }`} />
                        <span className={`text-lg font-medium ${
                          isDarkMode ? 'text-yellow-400' : 'text-red-600'
                        }`}>
                          {university.country}
                        </span>
                      </div>
                      <p className={`text-sm leading-relaxed max-w-2xl ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {university.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Visit Website Button */}
                  <div className="flex-shrink-0">
                    <a
                      href={university.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                        isDarkMode 
                          ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                          : 'bg-red-600 text-white hover:bg-red-700'
                      }`}
                    >
                      Visit Website
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>

                {/* Programmes Section */}
                <div className={`border-t pt-6 ${
                  isDarkMode ? 'border-gray-700' : 'border-gray-200'
                }`}>
                  <div className="flex items-center mb-4">
                    <BookOpen className={`w-6 h-6 mr-3 ${
                      isDarkMode ? 'text-yellow-400' : 'text-red-600'
                    }`} />
                    <h4 className={`text-xl font-bold ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      Programmes
                    </h4>
                  </div>
                  
                  <div className={`rounded-lg p-6 border-2 border-dashed ${
                    isDarkMode 
                      ? 'border-yellow-400 bg-yellow-400 bg-opacity-10' 
                      : 'border-red-600 bg-red-50'
                  }`}>
                    <div className="flex items-center justify-center">
                      <Clock className={`w-8 h-8 mr-3 ${
                        isDarkMode ? 'text-yellow-400' : 'text-red-600'
                      }`} />
                      <div>
                        <p className={`font-semibold text-lg ${
                          isDarkMode ? 'text-yellow-400' : 'text-red-600'
                        }`}>
                          Programme Information Coming Soon
                        </p>
                        <p className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-600'
                        }`}>
                          Detailed programme listings will be updated shortly. Please check back later.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`mt-16 rounded-xl shadow-lg p-8 text-center border-2 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-400' 
            : 'bg-gradient-to-r from-red-50 to-red-100 border-red-600'
        }`}>
          <GraduationCap className={`w-12 h-12 mx-auto mb-4 ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`} />
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Start Your Educational Journey?
          </h3>
          <p className={`text-lg mb-6 max-w-3xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Contact our education counselors today to learn more about admission requirements, 
            programme details, and how we can help you achieve your academic goals at these prestigious institutions.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigateToContact'))}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            Get Started Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;