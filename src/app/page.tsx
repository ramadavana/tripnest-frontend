"use client";

import { useIsMobile } from "@/hooks/useMobile";

export default function Home() {
  const isMobile = useIsMobile();

  return isMobile ? (
    <div className="text-primary">Home Page</div>
  ) : (
    <div className="text-primary">Home Page</div>
  );
}
