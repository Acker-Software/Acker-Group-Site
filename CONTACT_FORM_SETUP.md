# Contact Form Setup Guide

The contact form uses Nodemailer to send emails to `contact@acker-group.com`.

## Quick Setup

1. **Copy the environment template:**
   ```bash
   cp .env.example .env.local
   ```

2. **Configure your SMTP credentials in `.env.local`:**

### Option 1: Gmail (Recommended for Testing)

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-gmail@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=contact@acker-group.com
```

**To get a Gmail App Password:**
1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to: https://myaccount.google.com/apppasswords
4. Generate an App Password for "Mail"
5. Use that 16-character password in `.env.local`

### Option 2: Custom SMTP Server

```env
SMTP_HOST=mail.your-domain.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=contact@acker-group.com
SMTP_PASSWORD=your-password
SMTP_FROM=contact@acker-group.com
```

### Option 3: SendGrid (Recommended for Production)

```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_FROM=contact@acker-group.com
```

## Testing

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Navigate to: http://localhost:3000/contact

3. Fill out and submit the form

4. Check your email inbox at the configured recipient address

## Production Deployment

### Vercel Environment Variables

Add these environment variables in your Vercel project settings:

1. Go to: https://vercel.com/your-project/settings/environment-variables
2. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `SMTP_FROM`

### Security Notes

- ⚠️ **Never commit `.env.local` to git** (already in .gitignore)
- Use environment variables for all sensitive data
- For production, consider using a dedicated email service (SendGrid, Mailgun, AWS SES)
- Implement rate limiting to prevent spam

## Troubleshooting

### "Failed to send email" error

1. Check your SMTP credentials are correct
2. Verify SMTP port is not blocked by your firewall
3. For Gmail: Ensure "Less secure app access" is enabled OR use an App Password
4. Check server logs for detailed error messages

### Email not received

1. Check spam/junk folder
2. Verify the `contact@acker-group.com` email address exists
3. Test with a different email service
4. Check email service logs

### Common Gmail Issues

- **Error: "Invalid login"**: Use an App Password, not your regular password
- **Error: "Less secure apps"**: Enable 2FA and use App Password instead
- **Error: "Daily limit exceeded"**: Gmail has sending limits (500/day for free accounts)

## Alternative: Use a Third-Party Service

For better deliverability and easier setup, consider:

- **SendGrid** (12,000 free emails/month)
- **Mailgun** (5,000 free emails/month)
- **AWS SES** (62,000 free emails/month)
- **Postmark** (100 free emails/month)

These services provide better deliverability, analytics, and don't require managing SMTP directly.
