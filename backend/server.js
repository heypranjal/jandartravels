const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Nodemailer transporter
const createTransport = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
};

// Email template for contact form
const createContactEmailTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">${process.env.COMPANY_NAME || 'Jandar Travels'}</h1>
        <p style="margin: 5px 0 0 0; font-size: 16px;">New Contact Form Submission</p>
      </div>
      
      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1e40af; margin-top: 0;">Contact Form Details</h2>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Name:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.name}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Email:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.email}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Phone:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.phone}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Subject:</strong>
          <p style="margin: 5px 0; color: #6b7280;">${data.subject}</p>
        </div>
        
        <div style="margin-bottom: 20px;">
          <strong style="color: #374151;">Message:</strong>
          <p style="margin: 5px 0; color: #6b7280; white-space: pre-wrap;">${data.message}</p>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="margin: 0; color: #6b7280; font-size: 14px;">
            <strong>Submitted on:</strong> ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
        <p>This email was sent from the contact form on ${process.env.COMPANY_NAME || 'Jandar Travels'} website.</p>
        <p>${process.env.COMPANY_ADDRESS || 'Noida Sector - 31, Uttar Pradesh, India'}</p>
        <p>Phone: ${process.env.COMPANY_PHONE || '+91- 95258 53388'}</p>
      </div>
    </div>
  `;
};

// Auto-reply email template
const createAutoReplyTemplate = (data) => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
      <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
        <h1 style="margin: 0; font-size: 24px;">${process.env.COMPANY_NAME || 'Jandar Travels'}</h1>
        <p style="margin: 5px 0 0 0; font-size: 16px;">Thank you for contacting us!</p>
      </div>
      
      <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
        <h2 style="color: #1e40af; margin-top: 0;">Dear ${data.name},</h2>
        
        <p style="color: #374151; line-height: 1.6;">
          Thank you for reaching out to ${process.env.COMPANY_NAME || 'Jandar Travels'}. We have received your message and will get back to you as soon as possible.
        </p>
        
        <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Your Message Details:</h3>
          <p style="margin: 5px 0; color: #6b7280;"><strong>Subject:</strong> ${data.subject}</p>
          <p style="margin: 5px 0; color: #6b7280;"><strong>Message:</strong> ${data.message.substring(0, 100)}${data.message.length > 100 ? '...' : ''}</p>
        </div>
        
        <p style="color: #374151; line-height: 1.6;">
          Our team will review your inquiry and respond within 24 hours. If you have any urgent questions, please feel free to call us directly.
        </p>
        
        <div style="margin-top: 30px; padding: 20px; background-color: #1e40af; color: white; border-radius: 8px; text-align: center;">
          <h3 style="margin: 0 0 10px 0;">Need immediate assistance?</h3>
          <p style="margin: 0; font-size: 18px;">
            <strong>Call us: ${process.env.COMPANY_PHONE || '+91- 95258 53388'}</strong>
          </p>
        </div>
      </div>
      
      <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
        <p>${process.env.COMPANY_NAME || 'Jandar Travels'}</p>
        <p>${process.env.COMPANY_ADDRESS || 'Noida Sector - 31, Uttar Pradesh, India'}</p>
        <p>Phone: ${process.env.COMPANY_PHONE || '+91- 95258 53388'}</p>
      </div>
    </div>
  `;
};

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    const transporter = createTransport();

    // Send email to company
    const companyMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL,
      subject: `New Contact Form: ${subject} - ${name}`,
      html: createContactEmailTemplate({ name, email, phone, subject, message })
    };

    // Send auto-reply to customer
    const autoReplyMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting ${process.env.COMPANY_NAME || 'Jandar Travels'}`,
      html: createAutoReplyTemplate({ name, subject, message })
    };

    // Send both emails
    await transporter.sendMail(companyMailOptions);
    await transporter.sendMail(autoReplyMailOptions);

    res.status(200).json({
      success: true,
      message: 'Thank you for your message! We will get back to you soon.'
    });

  } catch (error) {
    console.error('Email sending error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to send email. Please try again later.'
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 Email configured for: ${process.env.EMAIL_USER}`);
  console.log(`🎯 Recipient email: ${process.env.RECIPIENT_EMAIL}`);
}); 