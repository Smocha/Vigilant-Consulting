import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      inquiryType,
      timeline,
      message,
      website,
    } = body;

    if (website) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const secure = port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL || user;

    if (!host || !user || !pass || !toEmail) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const safePhone = phone || "Not provided";
    const safeCompany = company || "Not provided";
    const safeInquiryType = inquiryType || "Not provided";
    const safeTimeline = timeline || "Not provided";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
    });

    await transporter.sendMail({
      from: `"Vigilant Consulting Website" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `New website inquiry from ${name}`,
      text: `
New website inquiry from Vigilant Consulting

Name: ${name}
Email: ${email}
Phone: ${safePhone}
Company: ${safeCompany}
Inquiry Type: ${safeInquiryType}
Timeline: ${safeTimeline}

Message:
${message}
`,
      html: `
        <h2>New Website Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <p><strong>Company:</strong> ${safeCompany}</p>
        <p><strong>Inquiry Type:</strong> ${safeInquiryType}</p>
        <p><strong>Timeline:</strong> ${safeTimeline}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json(
      { success: true, message: "Inquiry sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      { error: "Unable to send email" },
      { status: 500 }
    );
  }
}