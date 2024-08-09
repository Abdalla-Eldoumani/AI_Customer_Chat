import { ClerkProvider } from '@clerk/nextjs'
import { ToasterProvider } from "@/components/toaster-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Customer Support",
  description: "AI Customer Support",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ToasterProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}