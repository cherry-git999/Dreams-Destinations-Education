import React from 'react';
import { Users, Search, UserCheck, Target, FileSearch, MessageSquare, Handshake, UserPlus, Award, Eye, Cpu, Calendar, Shield, Activity as Diversity, UserX, Building, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

interface RecruitmentProps {
  isDarkMode: boolean;
}

const Recruitment: React.FC<RecruitmentProps> = ({ isDarkMode }) => {
  const clientServices = [
    {
      title: 'Identifying Staffing Needs',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      items: [
        'Comprehensive Workforce Analysis',
        'Skills Gap Assessment',
        'Future Staffing Projections',
        'Role Definition and Requirements'
      ]
    },
    {
      title: 'Developing Strategies',
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      items: [
        'Customized Recruitment Plans',
        'Timeline Development',
        'Budget Planning and Optimization',
        'Market Research and Analysis'
      ]
    }
  ];

  const sourcingServices = [
    {
      title: 'Sourcing Candidates',
      icon: <Search className="w-8 h-8 text-yellow-400" />,
      items: [
        'Multi-Channel Candidate Search',
        'Professional Network Utilization',
        'Database Mining and Research',
        'Headhunting and Direct Approach'
      ]
    },
    {
      title: 'Screening Applications',
      icon: <FileSearch className="w-8 h-8 text-yellow-400" />,
      items: [
        'Resume and CV Analysis',
        'Skills and Qualification Verification',
        'Initial Compatibility Assessment',
        'Reference Checks'
      ]
    },
    {
      title: 'Conducting Interviews',
      icon: <MessageSquare className="w-8 h-8 text-yellow-400" />,
      items: [
        'Structured Interview Process',
        'Technical and Behavioral Assessment',
        'Cultural Fit Evaluation',
        'Competency-Based Interviews'
      ]
    }
  ];

  const managementServices = [
    {
      title: 'Presenting the Short Listed',
      icon: <UserCheck className="w-8 h-8 text-yellow-400" />,
      items: [
        'Candidate Profile Preparation',
        'Detailed Assessment Reports',
        'Recommendation Rankings',
        'Client Presentation and Briefing'
      ]
    },
    {
      title: 'Facilitating Interviews',
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      items: [
        'Interview Scheduling and Coordination',
        'Candidate Preparation and Coaching',
        'Interview Process Management',
        'Feedback Collection and Analysis'
      ]
    },
    {
      title: 'Negotiating Offers',
      icon: <Handshake className="w-8 h-8 text-yellow-400" />,
      items: [
        'Salary and Benefits Negotiation',
        'Contract Terms Discussion',
        'Offer Letter Preparation',
        'Acceptance Process Management'
      ]
    },
    {
      title: 'Onboarding Support',
      icon: <UserPlus className="w-8 h-8 text-yellow-400" />,
      items: [
        'New Employee Integration',
        'Documentation Assistance',
        'Initial Training Coordination',
        'Follow-up and Support Services'
      ]
    }
  ];

  const specializationServices = [
    {
      title: 'Industry Expertise',
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      items: [
        'Deep Industry Knowledge',
        'Sector-Specific Requirements Understanding',
        'Market Trends and Insights',
        'Specialized Role Expertise'
      ]
    },
    {
      title: 'Access to Passive Candidates',
      icon: <Eye className="w-6 h-6 text-yellow-400" />,
      items: [
        'Hidden Talent Pool Access',
        'Executive Search Capabilities',
        'Professional Network Leverage',
        'Confidential Candidate Approach'
      ]
    },
    {
      title: 'Use of Technology',
      icon: <Cpu className="w-6 h-6 text-yellow-400" />,
      items: [
        'AI-Powered Candidate Matching',
        'Advanced Screening Tools',
        'Digital Interview Platforms',
        'Data Analytics and Reporting'
      ]
    }
  ];

  const additionalServices = [
    {
      title: 'Networking Events',
      icon: <Calendar className="w-6 h-6 text-yellow-400" />,
      items: [
        'Industry Meetups and Conferences',
        'Professional Networking Sessions',
        'Career Fair Organization',
        'Talent Pipeline Development'
      ]
    },
    {
      title: 'Background Checks',
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      items: [
        'Employment History Verification',
        'Educational Qualification Checks',
        'Criminal Background Screening',
        'Reference and Character Verification'
      ]
    },
    {
      title: 'Diversity and Inclusion Initiatives',
      icon: <Users className="w-6 h-6 text-yellow-400" />,
      items: [
        'Inclusive Hiring Practices',
        'Diverse Candidate Sourcing',
        'Bias-Free Recruitment Process',
        'Equal Opportunity Compliance'
      ]
    },
    {
      title: 'Employee Referral Programmes',
      icon: <UserCheck className="w-6 h-6 text-yellow-400" />,
      items: [
        'Referral System Development',
        'Incentive Program Management',
        'Employee Engagement Initiatives',
        'Internal Talent Mobilization'
      ]
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
          <div className={`inline-block p-6 mb-6 rounded-xl shadow-2xl border-2 ${
            isDarkMode 
              ? 'bg-gray-800 border-yellow-400' 
              : 'bg-white border-white'
          }`}>
            <Users className={`w-16 h-16 mx-auto ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`} />
          </div>
          
          <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            Recruitment Services
          </h1>
          <p className={`text-xl md:text-2xl font-medium italic ${
            isDarkMode ? 'text-yellow-400' : 'text-yellow-300'
          }`}>
            Connecting Talent with Opportunity
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Client Acquisition and Management */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Client Acquisition and Management
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {clientServices.map((service, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 ${
                isDarkMode 
                  ? 'bg-gray-800 border-yellow-400 hover:bg-gray-750' 
                  : 'bg-white border-red-600 hover:shadow-2xl'
              }`}>
                <div className="flex items-center mb-6">
                  {isDarkMode ? service.icon : React.cloneElement(service.icon, { className: 'w-8 h-8 text-red-600' })}
                  <h3 className={`text-xl font-bold ml-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                      }`}></span>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Sourcing and Screening Candidates */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Sourcing and Screening Candidates
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {sourcingServices.map((service, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 ${
                isDarkMode 
                  ? 'bg-gray-800 border-yellow-400 hover:bg-gray-750' 
                  : 'bg-white border-red-600 hover:shadow-2xl'
              }`}>
                <div className="flex items-center mb-6">
                  {isDarkMode ? service.icon : React.cloneElement(service.icon, { className: 'w-8 h-8 text-red-600' })}
                  <h3 className={`text-xl font-bold ml-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                      }`}></span>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Managing Candidates and Placements */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Managing Candidates and Placements
          </h2>
          <div className="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
            {managementServices.map((service, index) => (
              <div key={index} className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 ${
                isDarkMode 
                  ? 'bg-gray-800 border-yellow-400 hover:bg-gray-750' 
                  : 'bg-white border-red-600 hover:shadow-2xl'
              }`}>
                <div className="flex items-center mb-6">
                  {isDarkMode ? service.icon : React.cloneElement(service.icon, { className: 'w-8 h-8 text-red-600' })}
                  <h3 className={`text-lg font-bold ml-4 ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                        isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                      }`}></span>
                      <span className={`text-sm ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Specialization and Expertise */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Specialization and Expertise
          </h2>
          
          <div className={`rounded-xl shadow-lg p-8 border-l-4 ${
            isDarkMode 
              ? 'bg-gray-800 border-yellow-400' 
              : 'bg-white border-red-600'
          }`}>
            <div className="flex items-center mb-6">
              <Award className={`w-8 h-8 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-2xl font-bold ml-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Our Competitive Advantages
              </h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-3">
              {specializationServices.map((service, index) => (
                <div key={index} className={`p-6 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center mb-4">
                    {isDarkMode ? service.icon : React.cloneElement(service.icon, { className: 'w-6 h-6 text-red-600' })}
                    <h4 className={`text-lg font-semibold ml-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                          isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                        }`}></span>
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Activities */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Additional Activities
          </h2>
          
          <div className={`rounded-xl shadow-lg p-8 border-l-4 ${
            isDarkMode 
              ? 'bg-gray-800 border-yellow-400' 
              : 'bg-white border-red-600'
          }`}>
            <div className="flex items-center mb-6">
              <Building className={`w-8 h-8 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-2xl font-bold ml-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Extended Services and Programs
              </h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {additionalServices.map((service, index) => (
                <div key={index} className={`p-6 rounded-lg border ${
                  isDarkMode 
                    ? 'bg-gray-700 border-gray-600' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex items-center mb-4">
                    {isDarkMode ? service.icon : React.cloneElement(service.icon, { className: 'w-6 h-6 text-red-600' })}
                    <h4 className={`text-lg font-semibold ml-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {service.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className={`w-1.5 h-1.5 rounded-full mt-2 mr-2 flex-shrink-0 ${
                          isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                        }`}></span>
                        <span className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`rounded-xl shadow-lg p-8 text-center border-2 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-400' 
            : 'bg-gradient-to-r from-red-50 to-red-100 border-red-600'
        }`}>
          <CheckCircle className={`w-12 h-12 mx-auto mb-4 ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`} />
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Find Your Perfect Match?
          </h3>
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Whether you're looking for top talent or seeking your next career opportunity, 
            our expert recruitment team is here to help you succeed.
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

export default Recruitment;