{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import \{ NextResponse \} from 'next/server';\
import \{ Resend \} from 'resend';\
\
const resend = new Resend(process.env.RESEND_API_KEY);\
\
export async function POST(req: Request) \{\
  try \{\
    const body = await req.json();\
\
    const name = String(body.name || '').trim();\
    const email = String(body.email || '').trim();\
    const message = String(body.message || '').trim();\
\
    if (!name || !email || !message) \{\
      return NextResponse.json(\
        \{ error: 'All fields are required.' \},\
        \{ status: 400 \}\
      );\
    \}\
\
    await resend.emails.send(\{\
      from: 'VIGILANT Website <onboarding@resend.dev>',\
      to: process.env.CONTACT_TO_EMAIL || 'services@vigilantechelp.com',\
      reply_to: email,\
      subject: `New website inquiry from $\{name\}`,\
      text: [\
        `Name: $\{name\}`,\
        `Email: $\{email\}`,\
        '',\
        'Message:',\
        message,\
      ].join('\\n'),\
    \});\
\
    return NextResponse.json(\{ success: true \});\
  \} catch (error) \{\
    console.error('Contact form error:', error);\
\
    return NextResponse.json(\
      \{ error: 'Unable to send message right now.' \},\
      \{ status: 500 \}\
    );\
  \}\
\}}