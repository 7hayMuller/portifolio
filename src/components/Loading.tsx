"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Loading = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return loading && <div>Loading...</div>;
};

export default Loading;
