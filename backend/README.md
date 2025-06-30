# Jandar Travels Backend API

This is the backend API for Jandar Travels contact form functionality using Node.js, Express, and Nodemailer.

## Features

- ✅ Contact form email processing
- ✅ Auto-reply emails to customers
- ✅ Professional email templates
- ✅ Input validation
- ✅ Error handling
- ✅ CORS support
- ✅ Health check endpoint

## Setup Instructions

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure it:

```bash
cp env.example .env
```

Edit the `.env` file with your email configuration:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Gmail)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password

# Recipient Email (where contact form emails will be sent)
RECIPIENT_EMAIL=booking@jandartravels.com

# CORS Configuration
CORS_ORIGIN=http://localhost:3000

# Email Templates
COMPANY_NAME=Jandar Travels
COMPANY_PHONE=+91-72900 00667
COMPANY_ADDRESS=Noida Sector - 31, Uttar Pradesh, India
```

### 3. Email Provider Setup

#### Gmail Setup (Recommended)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a new app password for "Mail"
   - Use this password in `EMAIL_PASS`

#### Alternative Email Providers

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

**Custom SMTP:**
```env
EMAIL_HOST=your-smtp-server.com
EMAIL_PORT=587
EMAIL_SECURE=false
```

### 4. Start the Server

**Development mode:**
```bash
npm run dev
```

**Production mode:**
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### POST `/api/contact`

Submit contact form data and send emails.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+91-9876543210",
  "subject": "taxi-booking",
  "message": "I need a taxi for airport transfer"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! We will get back to you soon."
}
```

### GET `/api/health`

Health check endpoint.

**Response:**
```json
{
  "success": true,
  "message": "Server is running",
  "timestamp": "2024-01-01T12:00:00.000Z"
}
```

## Email Templates

The system sends two types of emails:

1. **Company Notification**: Sent to `RECIPIENT_EMAIL` with contact form details
2. **Auto-Reply**: Sent to the customer confirming receipt of their message

Both emails use professional HTML templates with Jandar Travels branding.

## Frontend Integration

Update your React frontend to call the API:

```javascript
const response = await fetch('http://localhost:5000/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(formData),
});

const data = await response.json();
```

## Error Handling

The API includes comprehensive error handling:

- Input validation
- Email format validation
- Network error handling
- SMTP error handling

## Security Features

- CORS configuration
- Input sanitization
- Environment variable protection
- Rate limiting (can be added)

## Deployment

### Local Development
```bash
npm run dev
```

### Production Deployment
1. Set `NODE_ENV=production`
2. Update `CORS_ORIGIN` to your production domain
3. Use `npm start` or PM2 for process management

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
CORS_ORIGIN=https://yourdomain.com
```

## Troubleshooting

### Common Issues

1. **Email not sending**: Check your app password and 2FA settings
2. **CORS errors**: Verify `CORS_ORIGIN` matches your frontend URL
3. **Port already in use**: Change `PORT` in `.env` file

### Debug Mode

Enable debug logging by setting:
```env
NODE_ENV=development
```

## Support

For issues or questions, contact the development team or check the server logs for detailed error messages. 