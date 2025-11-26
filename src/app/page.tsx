"use client";

import MobileHomePage from "@/components/pages/mobile/HomePage";
import HomePage from "@/components/pages/HomePage";
import { useIsMobile } from "@/hooks/useMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return isMobile ? <MobileHomePage /> : <HomePage />;
}
