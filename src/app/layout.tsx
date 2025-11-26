import type { Metadata } from "next";
import { Onest } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/pages/ClientWrapper";

const onest = Onest({
  variable: "--font-onest",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TripNest - Plan Your Perfect Trip",
  description:
    "Discover amazing destinations, plan unforgettable trips, and create memories that last a lifetime with TripNest.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${onest.variable} antialiased`}>
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
