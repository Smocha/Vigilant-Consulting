# VIGILANT Consulting Website

This project is a minimal, modern cybersecurity consulting website built with **Next.js App Router** and **Tailwind CSS**. The design is dark themed with subtle gradients, clean typography and responsive layouts. It features a hero section, a services overview, an about section highlighting military and SOC experience, and a contact form.

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- **src/app** – Contains the App Router pages and global styles.
- **src/components** – Reusable UI components such as navigation, hero section, services grid, about section, contact form and footer.
- **tailwind.config.js** – Tailwind configuration with custom dark color palette.
- **postcss.config.js** – Configures PostCSS and Tailwind.
- **next.config.js** – Next.js configuration enabling the app directory.

## Deploying

This project is ready to deploy on platforms like [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/). Simply import your Git repository and deploy. The build command is `npm run build` and the output directory is `.next`.

## Customizing

Feel free to adjust the color palette, content, or layout by editing the files inside `src/components` and modifying the Tailwind configuration. The contact form currently simulates submission; integrate your preferred API or email service in `src/components/ContactForm.tsx` to handle real inquiries.