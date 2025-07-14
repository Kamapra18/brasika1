"use client";

import { useEffect } from "react";

export default function VisitorLogger() {
  useEffect(() => {
    const logVisit = async () => {
      const today = new Date().toISOString().split("T")[0];

      await fetch("/api/log-visitor", {
        method: "POST",
        body: JSON.stringify({ day: today }),
      });
    };

    logVisit();
  }, []);

  return null;
}
