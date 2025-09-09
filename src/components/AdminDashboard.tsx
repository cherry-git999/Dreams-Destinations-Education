import React, { useState, useEffect } from 'react';
import { 
  Download, 
  RefreshCw, 
  Eye, 
  Trash2, 
  Calendar,
  User,
  Mail,
  MessageSquare
} from 'lucide-react';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  submission_date: string;
  ip_address: string;
  user_agent: string;
}

interface AdminDashboardProps {
  isDarkMode: boolean;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ isDarkMode }) => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchSubmissions = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/submissions');
      const result = await response.json();
      
      if (result.success) {
        setSubmissions(result.submissions);
      } else {
        console.error('Failed to fetch submissions:', result.message);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportCSV = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/export-csv');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `contact_submissions_${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error exporting CSV:', error);
      alert('Failed to export CSV');
    }
  };

  const viewSubmission = (submission: ContactSubmission) => {
    setSelectedSubmission(submission);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedSubmission(null);
  };

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Header */}
      <div className={`py-8 border-b-2 ${
        isDarkMode 
          ? 'bg-gradient-to-r from-black to-gray-900 border-yellow-400' 
          : 'bg-gradient-to-r from-red-600 to-red-700 border-red-600'
      }`}>
        <div className="max-w-6xl mx-auto px-4">
          <h1 className={`text-3xl font-bold mb-4 ${
            isDarkMode ? 'text-white' : 'text-white'
          }`}>
            Contact Form Submissions
          </h1>
          <p className={`text-lg ${
            isDarkMode ? 'text-yellow-300' : 'text-yellow-100'
          }`}>
            Manage and view all contact form submissions
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 mb-6">
          <button
            onClick={fetchSubmissions}
            disabled={loading}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center ${
              isDarkMode 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-red-600 text-white hover:bg-red-700'
            }`}
          >
            <RefreshCw className={`w-5 h-5 mr-2 ${loading ? 'animate-spin' : ''}`} />
            {loading ? 'Refreshing...' : 'Refresh'}
          </button>

          <button
            onClick={exportCSV}
            className={`px-6 py-3 rounded-lg font-semibold border-2 transition-all duration-300 flex items-center ${
              isDarkMode 
                ? 'border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black' 
                : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
            }`}
          >
            <Download className="w-5 h-5 mr-2" />
            Export CSV
          </button>
        </div>

        {/* Submissions Table */}
        <div className={`rounded-xl shadow-lg overflow-hidden ${
          isDarkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className={`${
                isDarkMode ? 'bg-gray-700' : 'bg-gray-100'
              }`}>
                <tr>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <MessageSquare className="w-4 h-4 inline mr-2" />
                    Subject
                  </th>
                  <th className={`px-6 py-4 text-left text-sm font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Date
                  </th>
                  <th className={`px-6 py-4 text-center text-sm font-semibold ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className={`divide-y ${
                isDarkMode ? 'divide-gray-700' : 'divide-gray-200'
              }`}>
                {submissions.map((submission) => (
                  <tr key={submission.id} className={`${
                    isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'
                  }`}>
                    <td className={`px-6 py-4 text-sm ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {submission.name}
                    </td>
                    <td className={`px-6 py-4 text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {submission.email}
                    </td>
                    <td className={`px-6 py-4 text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {submission.subject}
                    </td>
                    <td className={`px-6 py-4 text-sm ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      {formatDate(submission.submission_date)}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => viewSubmission(submission)}
                        className={`px-3 py-1 rounded text-sm font-medium transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                            : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                      >
                        <Eye className="w-4 h-4 inline mr-1" />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {submissions.length === 0 && !loading && (
            <div className={`text-center py-12 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
              <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No submissions yet</p>
              <p className="text-sm">Contact form submissions will appear here</p>
            </div>
          )}
        </div>
      </div>

      {/* Submission Detail Modal */}
      {showModal && selectedSubmission && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className={`max-w-2xl w-full rounded-xl shadow-2xl ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className={`p-6 border-b-2 ${
              isDarkMode ? 'border-yellow-400' : 'border-red-600'
            }`}>
              <div className="flex items-center justify-between">
                <h3 className={`text-xl font-bold ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Submission Details
                </h3>
                <button
                  onClick={closeModal}
                  className={`p-2 rounded-lg hover:bg-opacity-20 ${
                    isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                  }`}
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Name
                </label>
                <p className={`${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedSubmission.name}
                </p>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Email
                </label>
                <p className={`${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedSubmission.email}
                </p>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Subject
                </label>
                <p className={`${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {selectedSubmission.subject}
                </p>
              </div>

              <div>
                <label className={`block text-sm font-medium mb-1 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Message
                </label>
                <div className={`p-4 rounded-lg border ${
                  isDarkMode ? 'bg-gray-700 border-gray-600' : 'bg-gray-50 border-gray-200'
                }`}>
                  <p className={`whitespace-pre-wrap ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {selectedSubmission.message}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Submission Date
                  </label>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {formatDate(selectedSubmission.submission_date)}
                  </p>
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    IP Address
                  </label>
                  <p className={`text-sm ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {selectedSubmission.ip_address}
                  </p>
                </div>
              </div>
            </div>

            <div className={`p-6 border-t ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}>
              <button
                onClick={closeModal}
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isDarkMode 
                    ? 'bg-gray-600 text-white hover:bg-gray-500' 
                    : 'bg-gray-200 text-gray-900 hover:bg-gray-300'
                }`}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
