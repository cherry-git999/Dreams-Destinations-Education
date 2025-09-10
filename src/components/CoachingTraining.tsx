import React from 'react';
import { 
  Target, 
  Users, 
  BookOpen, 
  TrendingUp,
  MessageCircle,
  UserCheck,
  Lightbulb,
  Award,
  Shield,
  BarChart3,
  GraduationCap,
  Building,
  Heart,
  Eye,
  Handshake,
  Brain,
  Zap,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

interface CoachingTrainingProps {
  isDarkMode: boolean;
}

const CoachingTraining: React.FC<CoachingTrainingProps> = ({ isDarkMode }) => {
  const coachingServices = [
    {
      title: 'One on One Coaching and Group Coaching',
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      items: [
        'Personalized Individual Coaching Sessions',
        'Group Dynamics and Team Coaching',
        'Customized Coaching Programs',
        'Goal-Oriented Coaching Approaches'
      ]
    },
    {
      title: 'Leadership Development and Team Coaching',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      items: [
        'Executive Leadership Coaching',
        'Team Building and Collaboration',
        'Strategic Leadership Development',
        'Performance Enhancement Coaching'
      ]
    },
    {
      title: 'Building a Coaching Culture and Establishing Coaching Objectives',
      icon: <Building className="w-8 h-8 text-yellow-400" />,
      items: [
        'Organizational Culture Transformation',
        'Coaching Framework Development',
        'Objective Setting and Goal Alignment',
        'Culture Assessment and Implementation'
      ]
    },
    {
      title: 'Generating Ideas and Providing Feedback',
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      items: [
        'Creative Problem Solving Sessions',
        'Innovation Workshops',
        'Constructive Feedback Mechanisms',
        'Idea Generation and Implementation'
      ]
    },
    {
      title: 'Using Questioning Techniques and Building Trust and Rapport',
      icon: <MessageCircle className="w-8 h-8 text-yellow-400" />,
      items: [
        'Advanced Questioning Methodologies',
        'Trust Building Strategies',
        'Rapport Development Techniques',
        'Communication Enhancement'
      ]
    },
    {
      title: 'Facilitating Communication and Collaboration and Revenue Generation',
      icon: <Handshake className="w-8 h-8 text-yellow-400" />,
      items: [
        'Cross-Functional Communication',
        'Collaborative Work Environment',
        'Revenue-Focused Coaching',
        'Business Growth Strategies'
      ]
    },
    {
      title: 'Promoting Self Awareness and Targeting Personal Growth',
      icon: <Eye className="w-8 h-8 text-yellow-400" />,
      items: [
        'Self-Assessment and Reflection',
        'Personal Development Planning',
        'Emotional Intelligence Development',
        'Mindfulness and Self-Awareness'
      ]
    },
    {
      title: 'Supporting Career Development and Mentoring',
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      items: [
        'Career Path Planning',
        'Professional Mentoring Programs',
        'Skills Gap Analysis',
        'Career Advancement Strategies'
      ]
    }
  ];

  const trainingServices = [
    {
      title: 'Onboarding and Initial Training',
      icon: <UserCheck className="w-6 h-6 text-yellow-400" />,
      items: [
        'Orientation Programmes',
        'Job Specific Training'
      ]
    },
    {
      title: 'Professional Development',
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
      items: [
        'Skills Training',
        'E – Learning',
        'Seminars and Workshops',
        'Industry Events',
        'Conferences'
      ]
    },
    {
      title: 'Leadership Development',
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      items: [
        'Leadership Training Programmes',
        'Management Development'
      ]
    },
    {
      title: 'Compliance Training',
      icon: <Shield className="w-6 h-6 text-yellow-400" />,
      items: [
        'Regulatory Training',
        'Safety Training'
      ]
    },
    {
      title: 'Performance Improvement',
      icon: <BarChart3 className="w-6 h-6 text-yellow-400" />,
      items: [
        'Performance Appraisals',
        'Providing Feedback'
      ]
    },
    {
      title: 'Building a Learning Culture',
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      items: [
        'Creating a Positive Learning Environment',
        'Employee Involvement',
        'Continuous Learning'
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
<div
  className={`py-16 border-b-2 ${
    isDarkMode
      ? 'bg-gradient-to-r from-black to-gray-900 border-yellow-400'
      : 'bg-gradient-to-r from-red-600 to-red-700 border-red-600'
  }`}
  style={{
    backgroundImage: 'url("/imgs/CTT.png")', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <div
      className={`inline-block p-6 mb-6 rounded-xl shadow-2xl border-2 ${
        isDarkMode ? 'bg-gray-800 border-yellow-400' : 'bg-white border-white'
      }`}
    >
      <Target
        className={`w-16 h-16 mx-auto ${
          isDarkMode ? 'text-yellow-400' : 'text-red-600'
        }`}
      />
    </div>

    <h1
      className={`text-3xl md:text-4xl font-bold mb-4 ${
        isDarkMode ? 'text-white' : 'text-white'
      }`}
    >
      Coaching / Training & Development
    </h1>
    <p
      className={`text-xl md:text-2xl font-medium italic ${
        isDarkMode ? 'text-yellow-400' : 'text-yellow-300'
      }`}
    >
      Empowering Growth Through Expert Guidance
    </p>
  </div>
</div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Our Coaching Services */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Our Coaching Services
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {coachingServices.map((service, index) => (
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

        {/* Our Training and Development Services */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Our Training and Development Services
          </h2>
          
          <div className={`rounded-xl shadow-lg p-8 border-l-4 ${
            isDarkMode 
              ? 'bg-gray-800 border-yellow-400' 
              : 'bg-white border-red-600'
          }`}>
            <div className="flex items-center mb-6">
              <BookOpen className={`w-8 h-8 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-2xl font-bold ml-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Comprehensive Training Programs
              </h3>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {trainingServices.map((service, index) => (
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

        {/* Key Benefits Section */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Why Choose Our Services?
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className={`text-center p-6 rounded-xl shadow-lg border-t-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <Zap className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Expert Guidance
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Professional coaches with extensive industry experience
              </p>
            </div>

            <div className={`text-center p-6 rounded-xl shadow-lg border-t-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <Heart className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Personalized Approach
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Tailored programs designed to meet your specific needs
              </p>
            </div>

            <div className={`text-center p-6 rounded-xl shadow-lg border-t-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <BarChart3 className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Measurable Results
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Track progress and achieve tangible improvements
              </p>
            </div>

            <div className={`text-center p-6 rounded-xl shadow-lg border-t-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <Users className={`w-12 h-12 mx-auto mb-4 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h3 className={`text-lg font-bold mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Flexible Delivery
              </h3>
              <p className={`text-sm ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                Individual, group, and organizational training options
              </p>
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
            Ready to Transform Your Potential?
          </h3>
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Whether you're looking for individual coaching or comprehensive training programs, 
            our expert team is here to help you achieve your goals and unlock your full potential.
          </p>
          <button 
            onClick={() => window.dispatchEvent(new CustomEvent('navigateToContact'))}
            className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
              isDarkMode 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            Start Your Journey Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default CoachingTraining;