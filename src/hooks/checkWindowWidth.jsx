import { useState, useEffect } from "react";

export default function ResponsiveComponent() {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(true);

  const updateMedia = () => {
    setIsDesktop(window.innerWidth >= 768);
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return [isDesktop, isMobile];
}
