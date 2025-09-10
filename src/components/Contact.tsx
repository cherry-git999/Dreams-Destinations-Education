import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Building, 
  MessageCircle,
  User,
  FileText,
  Clock,
  CheckCircle
} from 'lucide-react';

interface ContactProps {
  isDarkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Building className="w-6 h-6" />,
      title: 'Office Address',
      details: [
        'C / O Building Clinic Private Limited',
        'Dreams Destinations and Education Private Limited',
        'Level 35, West Tower, World Trade Center',
        'Echelon Square, Colombo 01',
        'Colombo District, Western Province',
        'Sri Lanka. 00100'
      ]
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Number',
      details: ['+94741886686']
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      details: ['info@ddeltd.com']
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <div
  className={`py-16 border-b-2 ${
    isDarkMode
      ? 'border-yellow-400'
      : 'border-red-600'
  }`}
  style={{
    backgroundImage: 'url("/imgs/CON1.png")',
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
      <MessageCircle className={`w-16 h-16 mx-auto ${
        isDarkMode ? 'text-yellow-400' : 'text-red-600'
      }`} />
    </div>
    
    <h1 className={`text-3xl md:text-4xl font-bold mb-4 ${
      isDarkMode ? 'text-white' : 'text-white'
    }`}>
      Contact Us
    </h1>
    <p className={`text-xl md:text-2xl font-medium italic ${
      isDarkMode ? 'text-yellow-400' : 'text-yellow-300'
    }`}>
      Get in Touch with Our Expert Team
    </p>
  </div>
</div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className={`rounded-xl shadow-lg p-8 border-t-4 ${
            isDarkMode 
              ? 'bg-gray-800 border-yellow-400' 
              : 'bg-white border-red-600'
          }`}>
            <div className="flex items-center mb-6">
              <Send className={`w-8 h-8 ${
                isDarkMode ? 'text-yellow-400' : 'text-red-600'
              }`} />
              <h2 className={`text-2xl font-bold ml-4 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Send us a Message
              </h2>
            </div>

            {isSubmitted ? (
              <div className={`text-center py-8 rounded-lg border-2 border-dashed ${
                isDarkMode 
                  ? 'border-yellow-400 bg-yellow-400 bg-opacity-10' 
                  : 'border-green-500 bg-green-50'
              }`}>
                <CheckCircle className={`w-16 h-16 mx-auto mb-4 ${
                  isDarkMode ? 'text-yellow-400' : 'text-green-500'
                }`} />
                <h3 className={`text-xl font-bold mb-2 ${
                  isDarkMode ? 'text-yellow-400' : 'text-green-600'
                }`}>
                  Message Sent Successfully!
                </h3>
                <p className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  Thank you for contacting us. We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <User className="w-4 h-4 inline mr-2" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter the subject of your message"
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 focus:outline-none resize-vertical ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter your detailed message here..."
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center ${
                    isDarkMode 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 hover:shadow-lg' 
                      : 'bg-red-600 text-white hover:bg-red-700 hover:shadow-lg'
                  }`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {

          <div className="space-y-8">
            <div className={`rounded-xl shadow-lg p-8 border-t-4 ${
              isDarkMode 
                ? 'bg-gray-800 border-yellow-400' 
                : 'bg-white border-red-600'
            }`}>
              <div className="flex items-center mb-6">
                <MapPin className={`w-8 h-8 ${
                  isDarkMode ? 'text-yellow-400' : 'text-red-600'
                }`} />
                <h2 className={`text-2xl font-bold ml-4 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Our Contact Details
                </h2>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`p-4 rounded-lg border ${
                    isDarkMode 
                      ? 'bg-gray-700 border-gray-600' 
                      : 'bg-gray-50 border-gray-200'
                  }`}>
                    <div className="flex items-center mb-3">
                      <div className={`p-2 rounded-lg ${
                        isDarkMode ? 'bg-yellow-400 text-black' : 'bg-red-600 text-white'
                      }`}>
                        {info.icon}
                      </div>
                      <h3 className={`text-lg font-semibold ml-3 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.title}
                      </h3>
                    </div>
                    <div className="ml-12">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className={`text-sm ${
                          isDarkMode ? 'text-gray-300' : 'text-gray-700'
                        } ${detailIndex > 0 ? 'mt-1' : ''}`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

         /* // Commented Additional Information Section
          <div className={`mt-12 rounded-xl shadow-lg p-8 text-center border-2 ${
            isDarkMode 
              ? 'bg-gradient-to-r from-gray-800 to-gray-700 border-yellow-400' 
              : 'bg-gradient-to-r from-red-50 to-red-100 border-red-600'
          }`}>
            <MessageCircle className={`w-12 h-12 mx-auto mb-4 ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`} />
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              We're Here to Help
            </h3>
            <p className={`text-lg mb-6 max-w-3xl mx-auto ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Whether you're planning your next adventure, seeking educational opportunities, 
              or looking for career guidance, our expert team is ready to assist you. 
              Contact us today and let's make your dreams a reality!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:+94741886686" 
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                    : 'bg-red-600 text-white hover:bg-red-700'
                }`}
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Call Now
              </a>
              <a 
                href="mailto:info@ddeltd.com" 
                className={`px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                    : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
                }`}
              >
                <Mail className="w-5 h-5 inline mr-2" />
                Email Us
              </a>
            </div>
          </div>
          */}
        </div>
      </div>
    </div>
  );
};

export default Contact;
