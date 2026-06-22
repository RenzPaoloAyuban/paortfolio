import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Renz Paolo Ayuban | Portfolio",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col">{children}<footer className="mt-auto py-6 text-center text-sm text-coffee-brown/40">© 2026 Renz Paolo Ayuban. All rights reserved.</footer></body>
    </html>
  );
}
