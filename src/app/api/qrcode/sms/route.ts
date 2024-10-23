
import { NextResponse } from 'next/server';
import { Vonage } from '@vonage/server-sdk';
import { Auth } from '@vonage/auth';

// Initialize Vonage client using Auth
const vonage = new Vonage(new Auth({
  apiKey: process.env.VONAGE_API_KEY || '',
  apiSecret: process.env.VONAGE_API_SECRET || ''
}));

if (!process.env.VONAGE_API_KEY || !process.env.VONAGE_API_SECRET) {
  throw new Error('Vonage API Key and Secret must be provided in environment variables');
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { to, message } = body;

    if (!to || !message) {
      return NextResponse.json({ error: 'Missing "to" or "message" in request body' }, { status: 400 });
    }

    const from = 'Vonage APIs'; 

    const response = await vonage.sms.send({ to, from, text: message });
    console.log('Message sent successfully', response);

    return NextResponse.json({ message: 'SMS sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending SMS:', error);
    return NextResponse.json({ error: 'Failed to send SMS' }, { status: 500 });
  }
}
