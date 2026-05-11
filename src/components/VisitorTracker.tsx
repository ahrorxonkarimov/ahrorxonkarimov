"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackVisitor } from "@/app/actions/visitors";

export default function VisitorTracker() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname) {
      // Don't track admin panel itself
      if (!pathname.startsWith("/admin")) {
        trackVisitor(pathname).catch(console.error);
      }
    }
  }, [pathname]);

  return null;
}
