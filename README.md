# Vigilant Tech Website

This project contains a simple Next.js based website for **Vigilant Tech**, a premium cybersecurity and AI consulting company.  It follows a minimal, polished design inspired by Apple aesthetics and is ready to deploy on services such as Vercel or your own hosting provider.

## Features

- **Home page** with a hero section, services overview and a contact form.
- **Contact form** that submits to an API route and sends an email via SMTP (configured via environment variables).
- **Case Studies**, **Insights**, **Privacy Policy** and **Terms of Service** pages with placeholder content to be filled later.
- **Responsive design** built with Tailwind CSS.
- Fully typed with TypeScript.

## Getting started

1. Ensure you have [Node.js](https://nodejs.org/) installed (we recommend version 18 or later).
2. Copy `.env.example` to `.env.local` and fill in your SMTP details and destination email address.  These are used by the contact form API route.
3. Install the dependencies and run the development server:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000 in your browser to see the site.

## Deployment

Deploying on Vercel is straightforward:

1. Push this repository to GitHub.
2. Sign in to [Vercel](https://vercel.com/) and import your GitHub repository.
3. Set the environment variables (SMTP credentials and `CONTACT_TO_EMAIL`) in the Vercel dashboard.
4. Click **Deploy**.  Vercel will build and host your site.

## Customization

- **Design**: Adjust colors, typography and layout by editing the Tailwind configuration in `tailwind.config.js` and global styles in `app/globals.css`.
- **Content**: Replace the placeholder text in the pages under the `app/` directory with your own copy.  Add additional sections or components as needed.
- **Email delivery**: The contact form uses [nodemailer](https://nodemailer.com/) by default.  You can replace it with another service (e.g. SendGrid or Resend) by modifying `app/api/contact/route.ts`.

## License

This project is provided as-is for demonstration purposes.  You are free to use and modify it for your own projects.