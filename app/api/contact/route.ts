import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;
    if (!name || !email || !message) {
      return new NextResponse(JSON.stringify({ error: 'Missing fields' }), { status: 400 });
    }

    const host = process.env.SMTP_HOST;
    const port = parseInt(process.env.SMTP_PORT || '587', 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const to = process.env.CONTACT_TO_EMAIL || user;

    if (!host || !user || !pass || !to) {
      console.error('Missing SMTP environment variables');
      return new NextResponse(JSON.stringify({ error: 'Server configuration error' }), { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: user,
      to,
      subject: `New contact form submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
  } catch (error: any) {
    console.error('Contact form error', error);
    return new NextResponse(JSON.stringify({ error: 'Unable to send email' }), { status: 500 });
  }
}