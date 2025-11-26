'use client';

import { useIsAdmin } from '@/hooks/useIsAdmin';
import Navbar from '@/components/custom/navbar/Navbar';
import AdminNavbar from '@/components/custom/navbar/AdminNavbar';
import Footer from '@/components/custom/footer/Footer';
import AdminFooter from '@/components/custom/footer/AdminFooter';

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isAdmin = useIsAdmin();

  return (
    <>
      {isAdmin ? <AdminNavbar /> : <Navbar />}
      {children}
      {isAdmin ? <AdminFooter /> : <Footer />}
    </>
  );
}