import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Create transporter - Configure with your email service
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'contact@acker-group.com',
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #1F1F1F; padding: 30px; border-radius: 10px;">
            <h1 style="color: #D4AF37; margin-bottom: 20px;">New Contact Form Submission</h1>
            
            <div style="background-color: #2A2A2A; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #D4AF37; font-size: 18px; margin-bottom: 10px;">Contact Information</h2>
              <p style="color: #F2F2F2; margin: 8px 0;"><strong style="color: #D4AF37;">Name:</strong> ${name}</p>
              <p style="color: #F2F2F2; margin: 8px 0;"><strong style="color: #D4AF37;">Email:</strong> ${email}</p>
              ${subject ? `<p style="color: #F2F2F2; margin: 8px 0;"><strong style="color: #D4AF37;">Subject:</strong> ${subject}</p>` : ''}
            </div>
            
            <div style="background-color: #2A2A2A; padding: 20px; border-radius: 8px;">
              <h2 style="color: #D4AF37; font-size: 18px; margin-bottom: 10px;">Message</h2>
              <p style="color: #F2F2F2; line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
            
            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #D4AF37;">
              <p style="color: #F2F2F2; font-size: 12px; margin: 0;">
                This message was sent from the Acker Group SA (Pty) Ltd contact form.
              </p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${subject ? `Subject: ${subject}\n` : ''}

Message:
${message}

---
This message was sent from the Acker Group SA (Pty) Ltd contact form.
      `,
      replyTo: email,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
