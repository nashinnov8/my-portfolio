import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nguyen Le Nguyen — Software Developer",
  description:
    "Backend-focused Software Developer building scalable APIs with Java, Spring Boot, and .NET.",
  openGraph: {
    title: "Nguyen Le Nguyen — Software Developer",
    description:
      "Backend-focused Software Developer building scalable APIs with Java, Spring Boot, and .NET.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-terminal-black text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
