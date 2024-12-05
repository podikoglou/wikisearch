import type { Metadata } from "next";
import "./globals.css";
import { Work_Sans } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wikisearch",
  description: "Search... wikipedia?",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.className} antialiased`}>
        <NuqsAdapter>{children}</NuqsAdapter>
      </body>
    </html>
  );
}
