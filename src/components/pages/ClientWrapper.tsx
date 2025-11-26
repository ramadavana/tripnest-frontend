"use client";

import { useIsAdmin } from "@/hooks/useIsAdmin";

import Navbar from "@/components/custom/navbar/Navbar";
import Footer from "@/components/custom/footer/Footer";

import AdminNavbar from "@/components/custom/navbar/AdminNavbar";
import AdminFooter from "@/components/custom/footer/AdminFooter";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = useIsAdmin();

  return (
    <div className="flex flex-col w-full min-h-screen bg-background">
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      {children}
      {isAdmin ? <AdminFooter /> : <Footer />}
    </div>
  );
}
