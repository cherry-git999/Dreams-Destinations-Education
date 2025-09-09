# 🚀 Dreams Destinations Contact Form Setup Guide

This guide will help you set up a fully functional contact form that sends emails to your company and stores submissions in a database.

## ✨ Features Implemented

- ✅ **Working Contact Form** - Users can submit messages
- ✅ **Email Notifications** - Company receives emails for each submission
- ✅ **Database Storage** - All submissions stored with timestamps
- ✅ **CSV Export** - Download submissions as Excel-compatible CSV
- ✅ **Admin Dashboard** - View and manage all submissions
- ✅ **Security Features** - IP tracking, input validation, SQL injection prevention

## 🛠️ Setup Instructions

### Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Email Settings

1. **Copy environment file:**
   ```bash
   cd backend
   cp env.example .env
   ```

2. **Edit `.env` file with your email credentials:**
   ```env
   # Email Configuration (Gmail example)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   COMPANY_EMAIL=info@ddeltd.com
   
   # Database Configuration
   DB_PATH=./contact_submissions.db
   
   # Server Configuration
   PORT=5000
   NODE_ENV=development
   ```

### Step 3: Gmail App Password Setup

For Gmail, you need to create an App Password:

1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable **2-Factor Authentication** if not already enabled
3. Go to **Security** → **App passwords**
4. Select **Mail** and **Other (Custom name)**
5. Enter a name like "Dreams Destinations Contact Form"
6. Copy the generated 16-character password
7. Use this password in your `.env` file

### Step 4: Start the Servers

#### Option A: Use the Batch File (Windows)
```bash
# Double-click the start-project.bat file
# OR run from command line:
start-project.bat
```

#### Option B: Manual Start
```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
npm run dev
```

## 🌐 Access Points

- **Frontend:** http://localhost:5173
- **Backend API:** http://localhost:5000
- **Admin Dashboard:** Add `/admin` route to your app (optional)

## 📧 How It Works

### 1. User Submits Form
- User fills out contact form on your website
- Form data is sent to backend API
- Data is validated and stored in SQLite database

### 2. Email Notification
- Company receives professional HTML email
- Email includes all form details + submission ID
- Email is branded with your company colors

### 3. Database Storage
- All submissions stored with:
  - Name, email, subject, message
  - Submission timestamp
  - IP address (for security)
  - User agent (browser info)

### 4. Admin Access
- View all submissions in admin dashboard
- Export data to CSV (Excel-compatible)
- Track submission details and analytics

## 🔧 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/contact` | POST | Submit contact form |
| `/api/submissions` | GET | Get all submissions |
| `/api/export-csv` | GET | Export to CSV |
| `/api/health` | GET | Server health check |

## 📊 Database Schema

```sql
CREATE TABLE contact_submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  submission_date DATETIME DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  user_agent TEXT
);
```

## 🎨 Customization

### Email Template
Edit the email HTML template in `backend/server.js` around line 120 to match your branding.

### Form Fields
Add/remove form fields by:
1. Updating the Contact component form
2. Modifying the database schema
3. Updating the email template

### Styling
The form uses Tailwind CSS and matches your existing design system.

## 🚨 Troubleshooting

### Email Not Sending
- ✅ Check `.env` file configuration
- ✅ Verify Gmail app password is correct
- ✅ Ensure 2FA is enabled on Google account
- ✅ Check backend console for error messages

### Database Issues
- ✅ Ensure backend directory has write permissions
- ✅ Check if SQLite is properly installed
- ✅ Verify database path in `.env`

### Port Conflicts
- ✅ Change PORT in `.env` file
- ✅ Kill processes using ports 5000 or 5173

### Frontend Not Connecting
- ✅ Ensure backend is running on correct port
- ✅ Check CORS configuration
- ✅ Verify API endpoint URLs

## 🔒 Security Features

- **Input Validation** - All fields required and validated
- **SQL Injection Prevention** - Prepared statements used
- **IP Tracking** - Monitor submission sources
- **User Agent Logging** - Track browser/device info
- **CORS Protection** - Configured for your domain

## 📈 Monitoring & Analytics

### View Submissions
- Access `/api/submissions` endpoint
- Use admin dashboard component
- Export to CSV for analysis

### Track Performance
- Monitor submission rates
- Track user engagement
- Analyze common inquiry types

## 🚀 Production Deployment

### Backend
- Use PM2 or similar process manager
- Set up environment variables
- Configure production database
- Set up SSL certificates

### Frontend
- Build with `npm run build`
- Deploy to hosting service
- Update API endpoints to production URLs

## 📞 Support

If you encounter issues:
1. Check the backend console for error messages
2. Verify all environment variables are set
3. Ensure both servers are running
4. Check browser console for frontend errors

## 🎯 Next Steps

After setup, consider:
- Adding email templates for different inquiry types
- Implementing auto-reply emails to users
- Setting up email notifications for urgent inquiries
- Adding analytics and reporting features
- Implementing spam protection (reCAPTCHA)

---

**🎉 Congratulations!** Your contact form is now fully functional and will help you capture leads and inquiries from your website visitors.
