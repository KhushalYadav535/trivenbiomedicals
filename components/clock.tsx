"use client";

import { useEffect, useState } from "react";

export function ISTClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const format = () =>
      setTime(
        new Date().toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        })
      );
    format();
    const id = setInterval(format, 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time}</span>;
}
