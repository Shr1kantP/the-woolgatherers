"use client";

import React, { useState, useEffect } from "react";
import ConciergePopup from "./ConciergePopup";

export default function ConciergeModalWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-concierge", handleOpen);
    return () => {
      window.removeEventListener("open-concierge", handleOpen);
    };
  }, []);

  return <ConciergePopup isOpen={isOpen} onClose={() => setIsOpen(false)} />;
}
