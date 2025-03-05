import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:
      "Joshua Inyang | Next.js, React Native & React Developer | AI Integration Specialist",
    template: "%s | Joshua Inyang",
  },
  description:
    "Senior Full Stack Developer, Mobile & UX Engineer specializing in Next.js, React, and AI Integration. Expert in building high-performance web applications with modern technologies.",
  keywords: [
    "Next.js Developer",
    "React Developer",
    "React Native Developer",
    "Python Developer",
    "Flask Developer",
    "AI Integration",
    "Full Stack Developer",
    "Fast API Developer",
    "Automation",
    "Telegram Bots",
    "Web Development",
    "JavaScript",
    "TypeScript",
    "Python",
    "Backend Developer",
    "Frontend Developer",
    "Software Engineer",
    "Web Applications",
    "Mobile Application",
    "Performance Optimization",
    "Joshua Inyang",
  ],
  authors: [{ name: "Joshua Inyang" }],
  creator: "Joshua Inyang",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bouncei.vercel.app",
    siteName: "Joshua Inyang Portfolio",
    title: "Joshua Inyang | Next.js & React Developer",
    description:
      "Senior Full Stack Developer, Mobile & UX Engineer specializing in Next.js, React, and AI Integration.  Building high-performance web applications.",
    images: [
      {
        url: "/imgs/website.png",
        width: 1200,
        height: 630,
        alt: "Joshua Inyang - Next.js & React Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Joshua Inyang | Next.js , React Native & React Developer",
    description:
      "Senior Full Stack Developer, Mobile & UX Engineer specializing in Next.js, React, and AI Integration.",
    images: ["/imgs/website.png"],
    creator: "@InyangJoshua8",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bouncei.vercel.app",
  },
  icons: {
    icon: "/imgs/logo.png",
    apple: "/imgs/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="dark" lang="en">
      <body className={firaCode.className}>{children}</body>
    </html>
  );
}
