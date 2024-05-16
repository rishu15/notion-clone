import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "jotion",
  description: "connected workspace where better work happens",
  icons:{
    icon: [
      {
        media:"(prefers-color-scheme:dark)",
        url:"/logo-dark.svg",
        href:"/logo-dark.svg",
      },
      {
        media:"(prefers-color-scheme:light)",
        url:"/logo-light.svg",
        href:"/logo-light.svg",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        storageKey="jotion-theme-2"
        >
        {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
