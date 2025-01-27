'use server';

import { NextResponse } from 'next/server';
import * as postmark from 'postmark';

// Initialize Postmark client
const client = new postmark.ServerClient(
  'b5ff653a-711d-4a26-bb6d-45b1772c96ff'
);

export async function POST(req: Request) {
  const { name, email, contactNumber, message } = await req.json();

  try {
    // Send email via Postmark
    const response = await client.sendEmail({
      From: 'alex@alexfoxleigh.com', // Sender's email address
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
