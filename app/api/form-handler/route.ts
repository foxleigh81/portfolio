'use server';

import { NextResponse } from 'next/server';
import * as postmark from 'postmark';

// Initialize Postmark client
const client = new postmark.ServerClient(process.env.POSTMARK_SERVER_TOKEN!); // Your Postmark server token

export async function POST(req: Request) {
  const { name, email, contactNumber, message, recaptchaToken } =
    await req.json();

  try {
    // Verify reCAPTCHA token with Google
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY!, // Your reCAPTCHA secret key from Google
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

    console.log('Email sent successfully:', response);
    return NextResponse.json({
      status: 'success',
      message: 'Email sent successfully.'
    });
  } catch (error) {
    console.error('Error sending email:', error);
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
