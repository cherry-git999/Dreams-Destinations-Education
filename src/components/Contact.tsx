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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMsg(null);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      let result: any;
      try {
        result = await response.json();
      } catch {
        throw new Error("Invalid JSON response from server");
      }

      if (result.success) {
        setFeedbackMsg(result.message || "Form submitted successfully!");
        setIsSubmitted(true);

        // fetch latest submissions (like AdminDashboard)
        try {
          const subsResponse = await fetch('http://localhost:5000/api/submissions');
          const subsResult = await subsResponse.json();
          if (subsResult.success) {
            setSubmissions(subsResult.submissions);
          }
        } catch (fetchErr) {
          console.error("Failed to fetch submissions:", fetchErr);
        }

        // Reset form after successful submission
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
          setFeedbackMsg(null);
        }, 5000);
      } else {
        setFeedbackMsg(result.message || "Something went wrong, but your data may have been saved.");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setFeedbackMsg("Server error: Unable to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
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
            <MessageCircle className={`w-16 h-16 mx-auto ${
              isDarkMode ? 'text-yellow-400' : 'text-red-600'
            }`} />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
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
                  {feedbackMsg || "Message Sent Successfully!"}
                </h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
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
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
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
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Subject */}
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
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter the subject of your message"
                  />
                </div>

                {/* Message */}
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
                    className={`w-full px-4 py-3 rounded-lg border-2 resize-vertical ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white focus:border-yellow-400' 
                        : 'bg-white border-gray-300 text-gray-900 focus:border-red-600'
                    }`}
                    placeholder="Enter your detailed message here..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center ${
                    isDarkMode 
                      ? 'bg-yellow-400 text-black hover:bg-yellow-300 disabled:bg-gray-600' 
                      : 'bg-red-600 text-white hover:bg-red-700 disabled:bg-gray-400'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-current mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Feedback message if submission fails but data saved */}
                {feedbackMsg && !isSubmitted && (
                  <p className={`mt-4 text-sm ${
                    isDarkMode ? 'text-yellow-400' : 'text-red-600'
                  }`}>
                    {feedbackMsg}
                  </p>
                )}
              </form>
            )}
          </div>

          {/* Contact Information */}
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
                        <p key={detailIndex} className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Submissions Preview */}
        {submissions.length > 0 && (
          <div className="mt-12">
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-yellow-400' : 'text-red-600'}`}>
              Recent Submissions
            </h3>
            <div className="overflow-x-auto rounded-lg shadow-lg">
              <table className="min-w-full border-collapse">
                <thead>
                  <tr className={`${isDarkMode ? 'bg-gray-700 text-yellow-400' : 'bg-red-600 text-white'}`}>
                    <th className="px-4 py-2 text-left">Name</th>
                    <th className="px-4 py-2 text-left">Email</th>
                    <th className="px-4 py-2 text-left">Subject</th>
                    <th className="px-4 py-2 text-left">Message</th>
                    <th className="px-4 py-2 text-left">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((s, idx) => (
                    <tr key={idx} className={`${isDarkMode ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'} border-b`}>
                      <td className="px-4 py-2">{s.name}</td>
                      <td className="px-4 py-2">{s.email}</td>
                      <td className="px-4 py-2">{s.subject}</td>
                      <td className="px-4 py-2">{s.message}</td>
                      <td className="px-4 py-2">{new Date(s.submission_date).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
