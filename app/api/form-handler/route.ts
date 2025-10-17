'use server';

import { NextResponse } from 'next/server';
import * as postmark from 'postmark';

// Initialize Postmark client
const POSTMARK_TOKEN = process.env.POSTMARK_SERVER_TOKEN;
const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET_KEY;

if (!POSTMARK_TOKEN) {
  throw new Error('POSTMARK_SERVER_TOKEN is not configured');
}

const client = new postmark.ServerClient(POSTMARK_TOKEN);

export async function POST(req: Request) {
  const { name, email, contactNumber, message, recaptchaToken } =
    await req.json();

  try {
    // Verify reCAPTCHA token if configured
    if (recaptchaToken && RECAPTCHA_SECRET) {
      const recaptchaResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            secret: RECAPTCHA_SECRET,
            response: recaptchaToken
          })
        }
      );

      const recaptchaResult = await recaptchaResponse.json();
      if (!recaptchaResult.success) {
        return NextResponse.json({
          status: 'error',
          message: 'reCAPTCHA verification failed. Please try again.'
        });
      }
    } else if (RECAPTCHA_SECRET && !recaptchaToken) {
      // If ReCAPTCHA is configured on backend but token not provided
      return NextResponse.json({
        status: 'error',
        message:
          'Security verification required. Please complete the reCAPTCHA.'
      });
    }

    // Send email via Postmark
    const response = await client.sendEmail({
      From: 'no-reply@alexfoxleigh.com', // Sender's email address
      To: 'alex@alexfoxleigh.com', // Receiver's email address
      Subject: `[Portfolio] New Form Submission from ${name}`,
      TextBody: `
        You have a new form submission from alexfoxleigh.com:

        Name: ${name}
        Email: ${email}
        Contact Number: ${contactNumber}
        Message:
        ${message}
      `,
      MessageStream: 'outbound'
    });

    return NextResponse.json({
      status: 'success',
      message: 'Email sent successfully.'
    });
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error sending email:', error);
    }
    return NextResponse.json({
      status: 'error',
      message: 'Failed to send email.'
    });
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'This endpoint only accepts POST requests.'
  });
}
