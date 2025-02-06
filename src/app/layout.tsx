import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: "Bank App",
  description: "Banking Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
