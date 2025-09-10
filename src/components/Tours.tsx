import React from 'react';
import { 
  MapPin, 
  Plane, 
  Calendar, 
  Car, 
  Building, 
  FileText, 
  Download, 
  Phone, 
  Globe, 
  GraduationCap,
  UserCheck,
  FileCheck,
  MessageCircle,
  Heart,
} from 'lucide-react';

interface ToursProps {
  isDarkMode: boolean;
}

const Tours: React.FC<ToursProps> = ({ isDarkMode }) => {
  const inboundServices = [
    {
      title: 'Planning and Itinerary Creation',
      icon: <Calendar className="w-8 h-8 text-yellow-400" />,
      items: [
        'Designing Travel Packages',
        'Tailoring to Specific Needs',
        'Providing Travel Information'
      ]
    },
    {
      title: 'Transfers',
      icon: <Car className="w-8 h-8 text-yellow-400" />,
      items: [
        'Booking and Reservations',
        'Managing Transportation',
        'Coordinating with Local Providers'
      ]
    },
    {
      title: 'Tour Packages',
      icon: <FileText className="w-8 h-8 text-yellow-400" />,
      items: [
        'PDFs will be shared later',
        'View and Download tour package PDFs'
      ],
      hasDownload: true
    }
  ];

  const outboundServices = [
    {
      title: 'Tour Planning and Package Creation',
      icon: <MapPin className="w-8 h-8 text-yellow-400" />,
      items: [
        'Selecting Destinations and Research',
        'Itinerary Design',
        'Package Assembly'
      ]
    },
    {
      title: 'Booking and Reservations',
      icon: <Building className="w-8 h-8 text-yellow-400" />,
      items: [
        'Flight Bookings',
        'Accommodation Reservations',
        'Transportation Arrangements',
        'Activity Bookings'
      ]
    },
    {
      title: 'Customer Support',
      icon: <Phone className="w-8 h-8 text-yellow-400" />,
      items: [
        'Pre-Trip Information',
        'On-Trip Assistance',
        'Post Trip Follow Up'
      ]
    }
  ];

  const touristVisaServices = [
    {
      title: 'Visa Application Assistance',
      icon: <FileCheck className="w-6 h-6 text-yellow-400" />,
      items: [
        'Providing Information',
        'Document Preparation',
        'Submission',
        'Tracking and Follow Up'
      ]
    },
    {
      title: 'Travel Planning',
      icon: <Plane className="w-6 h-6 text-yellow-400" />,
      items: [
        'Travel Insurance',
        'Accommodation Booking',
        'Itinerary Planning',
        'Flight Booking'
      ]
    },
    {
      title: 'Other Activities',
      icon: <MessageCircle className="w-6 h-6 text-yellow-400" />,
      items: [
        'Visa Consultation',
        'Translation and Interpretation',
        'Legal Advice'
      ]
    }
  ];

  const studentVisaServices = [
    {
      title: 'Education Counseling and Guidance',
      icon: <GraduationCap className="w-6 h-6 text-yellow-400" />,
      items: [
        'Profile Assessment',
        'Course and University Selection',
        'Application Assistance',
        'Statement of Purpose (SOP)'
      ]
    },
    {
      title: 'Visa Application Support',
      icon: <UserCheck className="w-6 h-6 text-yellow-400" />,
      items: [
        'Visa Requirements and Documentation',
        'Visa Application Submission',
        'Interview Preparation',
        'Post Visa Support'
      ]
    },
    {
      title: 'Pre Departure Support',
      icon: <Heart className="w-6 h-6 text-yellow-400" />,
      items: [
        'Travel Arrangements',
        'Financial Planning',
        'Cultural Orientation',
        'Health and Safety Guidance'
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
    backgroundImage: 'url("/imgs/TOR.png")',
    backgroundSize: 'cover', 
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <div className="max-w-6xl mx-auto px-4 text-center">
    <div className={`inline-block p-6 mb-6 rounded-xl shadow-2xl border-2 ${
      isDarkMode 
        ? 'bg-gray-800 border-yellow-400' 
        : 'bg-white border-white'
    }`}>
      <Plane className={`w-16 h-16 mx-auto ${
        isDarkMode ? 'text-yellow-400' : 'text-red-600'
      }`} />
    </div>

    <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
      isDarkMode ? 'text-white' : 'text-white'
    }`}>
      Inbound and Outbound Tours
    </h1>
    <p className={`text-xl md:text-2xl font-medium italic ${
      isDarkMode ? 'text-yellow-400' : 'text-yellow-300'
    }`}>
      Explore the World with Expert Guidance
    </p>
  </div>
</div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Our Inbound Services */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Our Inbound Services
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {inboundServices.map((service, index) => (
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
                {service.hasDownload && (
                  <div className="mt-6">
                    <button className={`flex items-center justify-center w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 border-2 border-dashed ${
                      isDarkMode 
                        ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                        : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                    }`}>
                      <Download className="w-5 h-5 mr-2" />
                      View and Download PDFs
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Our Outbound Services */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-8 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Our Outbound Services
          </h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {outboundServices.map((service, index) => (
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

        {/* Visa Related Services */}
        <div className="mb-16">
          <h2 className={`text-3xl font-bold mb-12 text-center ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`}>
            Visa Related Services
          </h2>
          
          {/* Tourist Visa Services */}
          <div className="mb-12">
            <div className={`rounded-xl shadow-lg p-8 border-l-4 mb-8 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <div className="flex items-center mb-6">
                <Globe className={`w-8 h-8 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`} />
                <h3 className={`text-2xl font-bold ml-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Tourist Visa Related Services
                </h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                {touristVisaServices.map((service, index) => (
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

          {/* Student Visa Services */}
          <div>
            <div className={`rounded-xl shadow-lg p-8 border-l-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <div className="flex items-center mb-6">
                <GraduationCap className={`w-8 h-8 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`} />
                <h3 className={`text-2xl font-bold ml-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Student Visa Related Services
                </h3>
              </div>
              
              <div className="grid gap-6 md:grid-cols-3">
                {studentVisaServices.map((service, index) => (
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
        </div>

        {/* Call to Action
         <div className={`rounded-xl shadow-lg p-8 text-center border-2 ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-400' 
            : 'bg-gradient-to-r from-red-50 to-red-100 border-red-600'
        }`}>
          <AlertCircle className={`w-12 h-12 mx-auto mb-4 ${
            isDarkMode ? 'text-yellow-400' : 'text-red-600'
          }`} />
          <h3 className={`text-2xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Ready to Start Your Journey?
          </h3>
          <p className={`text-lg mb-6 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Contact us today to discuss your travel plans and visa requirements. 
            Our expert team is here to make your dreams a reality.
          </p>
          <button className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
            isDarkMode 
              ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
              : 'bg-red-600 text-white hover:bg-red-700'
          }`}>
            Get Started Today
          </button>
        </div>  */}
      </div>
    </div>
  );
};

export default Tours;