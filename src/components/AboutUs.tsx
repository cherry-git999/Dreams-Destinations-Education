import React from 'react';
import {
  Building2,
  MapPin,
  GraduationCap,
  Users,
  Target,
  Lightbulb,
  Eye,
  Heart,
} from 'lucide-react';

interface AboutUsProps {
  isDarkMode: boolean;
  onNavigateToContact?: () => void;
}

const AboutUs: React.FC<AboutUsProps> = ({ isDarkMode, onNavigateToContact }) => {
  // Core Services
  const services = [
    {
      title: 'Tours Management',
      icon: <MapPin className="w-8 h-8 text-yellow-400" />,
      items: [
        'Accommodation and Venue Sourcing',
        'Transportation and Transfers',
        'Tours and Excursions',
        'Customized Experiences',
        'Local Expertise and On The Ground Support',
      ],
    },
    {
      title: 'Recruitment',
      icon: <Users className="w-8 h-8 text-yellow-400" />,
      items: [
        'Sourcing and Attracting Candidates',
        'Candidate Evaluation and Selection',
      ],
    },
    {
      title: 'Coaching / Training and Development',
      icon: <Target className="w-8 h-8 text-yellow-400" />,
      items: [
        'One on One Coaching',
        'Group Coaching',
        'Developing and Delivering Training',
        'Conducting Workshops and Seminars',
        'Providing Resources and Materials',
        'Scheduling and Managing Coaching',
        'Tracking Client Progress',
        'Providing Feedback and Support',
        'Developing Unique Coaching Frameworks',
        'Writing and Publishing Content',
      ],
    },
  ];

  // Education Partners
  const universities = [
    {
      name: 'Lincoln University College',
      country: 'Malaysia',
      logoHref: '/imgs/LU.png',
    },
    {
      name: 'Asia e University',
      country: 'Malaysia',
      logoHref: '/imgs/AU.png',
    },
    // {
    //   name: 'City University',
    //   country: 'Malaysia',
    //   logoHref: '/imgs/CU.png',
    // },
    {
      name: 'Krupanidhi Group of Institutions',
      country: 'India',
      logoHref: '/imgs/KG.png',
    },
    {
      name: 'Marwadi University',
      country: 'India',
      logoHref: '/imgs/MU.png',
    },
  ];

  // Core Values
  const values = [
    {
      title: 'Innovation',
      description:
        'Embracing new Technologies, Methodologies, and Ideas to stay ahead of the Curve.',
      icon: <Lightbulb className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: 'Excellence',
      description:
        'Delivering High Quality Services that exceed Client Expectations.',
      icon: <Target className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: 'Integrity',
      description:
        'Operating with Transparency, Honesty, and Ethics in all interactions.',
      icon: <Building2 className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: 'Diversity',
      description:
        'Celebrating Diverse Cultures, Perspectives, and Experiences.',
      icon: <Users className="w-6 h-6 text-yellow-400" />,
    },
    {
      title: 'Empowerment',
      description: 'Enabling individuals to reach their Full Potential.',
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
    },
  ];

  const handleContactClick = () => {
    // If onNavigateToContact prop is provided, use it
    if (onNavigateToContact) {
      onNavigateToContact();
    } else {
      // Fallback: dispatch a custom event that App.tsx can listen to
      window.dispatchEvent(new CustomEvent('navigateToContact'));
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div
        className={`h-screen flex flex-col items-center justify-center border-b-2 ${
          isDarkMode
            ? 'bg-gradient-to-r from-black to-gray-900 border-yellow-400'
            : 'bg-gradient-to-r from-red-600 to-red-700 border-red-600'
        }`}
            style={{
                  backgroundImage: 'url("/imgs/KO.jpg")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                 }}
         >
        <div className="max-w-6xl mx-auto px-4 text-center">
          {/* Company Logo */}
          <div
            className={`inline-block p-8 mb-8 rounded-xl shadow-2xl border-2 ${
              isDarkMode
                ? 'bg-gray-800 border-yellow-400'
                : 'bg-white border-white'
            }`}
          >
            <div
              className={`w-32 h-24 rounded-lg mx-auto mb-4 flex items-center justify-center border-2 ${
                isDarkMode
                  ? 'bg-white border-yellow-400'
                  : 'bg-white border-red-600'
              }`}
            >
              <img
                src="/imgs/logoM.jpg"
                alt="Dreams Destinations & Education Logo"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <Building2
                className={`w-16 h-16 hidden ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              />
            </div>
          </div>

          <h1
            className={`text-3xl md:text-4xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-white'
            }`}
          >
            Dreams Destinations & Education Private Limited
          </h1>
          <p
            className={`text-xl md:text-2xl font-medium italic mb-8 ${
              isDarkMode ? 'text-yellow-400' : 'text-yellow-300'
            }`}
          >
            Global Opportunities & Endless Possibilities.
          </p>

          {/* Contact Section */}
          <p
            className={`mb-4 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-100'
            }`}
          >
            Your travel and education journey starts here.
          </p>
          <button
            onClick={handleContactClick}
            className={`px-6 py-3 rounded-full font-semibold shadow-lg transition cursor-pointer ${
              isDarkMode
                ? 'bg-yellow-400 text-black hover:bg-yellow-300'
                : 'bg-white text-red-600 hover:bg-gray-100'
            }`}
          >
            Contact Us
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Company Overview */}
        <section className="mb-16">
          <div
            className={`rounded-xl shadow-lg p-8 border-l-4 ${
              isDarkMode
                ? 'bg-gray-800 border-yellow-400'
                : 'bg-white border-red-600'
            }`}
          >
            <h2
              className={`text-3xl font-bold mb-6 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`}
            >
              Company Overview
            </h2>
            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Dreams Destinations & Education Private Limited is in the business
              of{' '}
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              >
                Inbound and Outbound Tours Management services
              </span>
              ,{' '}
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              >
                Local and Foreign Education
              </span>
              ,{' '}
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              >
                Recruitment
              </span>
              , as well as{' '}
              <span
                className={`font-semibold ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              >
                Coaching / Training and Development
              </span>
              . We are committed to providing exceptional services that empower
              individuals and organizations to achieve their goals through
              transformative experiences.
            </p>
          </div>
        </section>

        {/* Core Services */}
        <section className="mb-16">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`}
          >
            Our Core Services
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border-t-4 ${
                  isDarkMode
                    ? 'bg-gray-800 border-yellow-400 hover:bg-gray-700'
                    : 'bg-white border-red-600 hover:shadow-2xl'
                }`}
              >
                <div className="flex items-center mb-6">
                  {isDarkMode
                    ? service.icon
                    : React.cloneElement(service.icon, {
                        className: 'w-8 h-8 text-red-600',
                      })}
                  <h3
                    className={`text-xl font-bold ml-4 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {service.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span
                        className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                          isDarkMode ? 'bg-yellow-400' : 'bg-red-600'
                        }`}
                      ></span>
                      <span
                        className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        }`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education Partners */}
        <section className="mb-16">
          <div
            className={`rounded-xl shadow-lg p-8 border-t-4 ${
              isDarkMode
                ? 'bg-gray-800 border-yellow-400'
                : 'bg-white border-red-600'
            }`}
          >
            <div className="flex items-center mb-6">
              <GraduationCap
                className={`w-8 h-8 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              />
              <h3
                className={`text-2xl font-bold ml-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Local and Foreign Education
              </h3>
            </div>
            <p
              className={`mb-8 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              We represent the following prestigious institutions in Sri Lanka:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
              {universities.map((uni, index) => (
                <div
                  key={index}
                  className={`rounded-lg p-8 text-center transition-all duration-300 border-2 border-dashed h-56 flex flex-col justify-between hover:shadow-xl ${
                    isDarkMode
                      ? 'bg-gray-700 border-yellow-400 hover:bg-gray-600'
                      : 'bg-gray-50 border-red-600 hover:shadow-2xl'
                  }`}
                >
                  <div
                    className={`w-24 h-20 rounded-lg mx-auto mb-4 flex items-center justify-center border shadow-sm overflow-hidden ${
                      isDarkMode
                        ? 'bg-gray-800 border-yellow-400'
                        : 'bg-white border-red-600'
                    }`}
                  >
                    <img
                      src={uni.logoHref}
                      alt={`${uni.name} Logo`}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling?.classList.remove(
                          'hidden'
                        );
                      }}
                    />
                    <GraduationCap
                      className={`w-10 h-10 hidden ${
                        isDarkMode ? 'text-yellow-400' : 'text-red-600'
                      }`}
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p
                      className={`text-sm font-medium mb-2 leading-tight ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {uni.name}
                    </p>
                    <p
                      className={`text-sm ${
                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {uni.country}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid gap-8 md:grid-cols-2 mb-16">
          <div
            className={`rounded-xl shadow-lg p-8 border-l-4 ${
              isDarkMode
                ? 'bg-gray-800 border-yellow-400'
                : 'bg-white border-red-600'
            }`}
          >
            <div className="flex items-center mb-6">
              <Eye
                className={`w-8 h-8 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              />
              <h2
                className={`text-2xl font-bold ml-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Our Vision
              </h2>
            </div>
            <p
              className={`leading-relaxed mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              To be a leading Global Provider of Transformative Experiences,
              empowering individuals to explore New Horizons, acquire New
              Skills, and achieve their Personal and Professional Goals.
            </p>
            <p
              className={`leading-relaxed font-medium ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`}
            >
              We envision a World where Travel, Education, and Career Development
              converge to Unlock Human Potential and foster Global Understanding.
            </p>
          </div>

          <div
            className={`rounded-xl shadow-lg p-8 border-l-4 ${
              isDarkMode
                ? 'bg-gray-800 border-yellow-400'
                : 'bg-white border-red-600'
            }`}
          >
            <div className="flex items-center mb-6">
              <Heart
                className={`w-8 h-8 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`}
              />
              <h2
                className={`text-2xl font-bold ml-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}
              >
                Our Mission
              </h2>
            </div>
            <p
              className={`leading-relaxed mb-4 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              Our Mission is to provide exceptional Travel, Education, Training,
              and Recruitment services that inspire individuals to Explore,
              Learn, and Grow.
            </p>
            <p
              className={`leading-relaxed font-medium ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`}
            >
              We strive to create Meaningful Experiences, foster Global
              Connections, and Empower our Clients to achieve their Goals.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2
            className={`text-3xl font-bold mb-8 text-center ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`}
          >
            Our Values
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div
                key={index}
                className={`rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border-l-4 ${
                  isDarkMode
                    ? 'bg-gray-800 border-yellow-400 hover:bg-gray-700'
                    : 'bg-white border-red-600 hover:shadow-2xl'
                }`}
              >
                <div className="flex items-center mb-4">
                  {isDarkMode
                    ? value.icon
                    : React.cloneElement(value.icon, {
                        className: 'w-6 h-6 text-red-600',
                      })}
                  <h3
                    className={`text-lg font-bold ml-3 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    {value.title}
                  </h3>
                </div>
                <p
                  className={`leading-relaxed text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}
                >
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;