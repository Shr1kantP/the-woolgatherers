"use client";

import React, { useState, useEffect } from "react";

interface ConciergePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConciergePopup({ isOpen, onClose }: ConciergePopupProps) {
  const [interests, setInterests] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);

  // Close modal on escape key press
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleInterest = (interest: string) => {
    setInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    const endpoint = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL || "";
    console.log("Submitting to endpoint:", endpoint);
    console.log("Payload:", {
      interests,
      email,
      phone,
      message,
    });

    try {
      if (endpoint) {
        const response = await fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify({
            interests,
            email,
            phone,
            message,
          }),
        });
        console.log("Fetch response (opaque in no-cors):", response);
      } else {
        console.warn("No Apps Script URL configured, simulating success...");
        await new Promise((resolve) => setTimeout(resolve, 800));
      }
      setSubmitSuccess(true);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmitSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs transition-opacity duration-300"
      onClick={onClose}
    >
      {/* 
        Ticket Container:
        - Mobile: Increased size to max-w-[450px] and padding to px-8 py-12 for a taller and spaced-out look.
        - Desktop (md): aspect-[1000/600], max-width 850px, px-14 py-10.
      */}
      <div
        className="relative w-full max-w-[450px] md:max-w-[850px] md:aspect-[1000/600] bg-[url('/images/Pop_up_bg_mobile.png')] md:bg-[url('/images/Pop_up_bg.png')] bg-[length:100%_100%] md:bg-contain bg-center bg-no-repeat px-8 py-12 md:px-14 md:py-10 text-[#FDF3E7] select-text shadow-2xl flex flex-col justify-start md:justify-center max-h-[90vh] md:max-h-none overflow-y-auto md:overflow-visible"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
        }}
        onClick={(e) => e.stopPropagation()}
      >


        {submitSuccess ? (
          <div className="flex flex-col items-center justify-center text-center h-full w-full py-8">
            <h3
              className="text-3xl md:text-5xl font-bold mb-3 tracking-wide uppercase"
              style={{ fontFamily: '"Jersey 15", var(--font-jersey-15), sans-serif' }}
            >
              Thanks, we&apos;ll be in touch
            </h3>
            <p
              className="text-base md:text-lg font-normal max-w-md opacity-90"
              style={{
                fontFamily: '"Instrument Serif", serif',
                fontStyle: "italic",
              }}
            >
              Your request has been received. We look forward to connecting with you.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="w-full h-full flex flex-col md:flex-row items-stretch px-1 py-1 md:px-2 md:py-4"
          >
            {/* Left Column (66% on Desktop, Full on Mobile) */}
            <div className="w-full md:w-[66%] flex flex-col justify-between md:pr-10 py-1">
              <div>
                {/* Heading - Increased size slightly for visual balance */}
                <h2
                  className="text-[34px] md:text-[44px] font-normal leading-none mb-2 text-[#FDF3E7] tracking-wide text-center"
                  style={{ fontFamily: '"Jersey 15", var(--font-jersey-15), sans-serif' }}
                >
                  CONCIERGE
                </h2>
                {/* Sub-heading */}
                <p className="text-[11px] md:text-[13px] text-[#FDF3E7]/70 font-light mb-6 leading-none text-center">
                  The residency is currently accepting new guests.
                </p>

                {/* Sub-header "What are you looking for?" */}
                <h3
                  className="text-[20px] md:text-[23px] text-[#FDF3E7] mb-5 leading-none text-center"
                  style={{
                    fontFamily: '"Instrument Serif", serif',
                    fontStyle: "italic",
                  }}
                >
                  What are you looking for?
                </h3>

                {/* Checkboxes Container */}
                <div className="grid grid-cols-2 md:flex md:flex-wrap md:flex-row gap-x-5 gap-y-3.5 mb-7 md:mb-5 text-[12px] md:text-[14px] max-w-[340px] md:max-w-none mx-auto md:mx-0">
                  {[
                    { key: "exploring", label: "Just exploring" },
                    { key: "brand", label: "Brand Identity" },
                    { key: "photo", label: "Photography" },
                    { key: "website", label: "Website" },
                    { key: "social", label: "Social presence" },
                  ].map((item) => (
                    <label
                      key={item.key}
                      className="flex items-center cursor-pointer select-none group"
                    >
                      <input
                        type="checkbox"
                        checked={interests.includes(item.label)}
                        onChange={() => toggleInterest(item.label)}
                        className="sr-only"
                      />
                      <span className="w-4.5 h-4.5 md:w-4 md:h-4 border border-[#FDF3E7] flex items-center justify-center mr-2 flex-shrink-0 transition-all group-hover:bg-[#FDF3E7]/10">
                        {interests.includes(item.label) && (
                          <span className="w-3 h-3 md:w-2.5 md:h-2.5 bg-[#FDF3E7]" />
                        )}
                      </span>
                      <span className="font-light text-[#FDF3E7] text-[12.5px] md:text-[14px]">{item.label}</span>
                    </label>
                  ))}
                </div>

                {/* Email & Phone Inputs - Added margin */}
                <div className="grid grid-cols-2 gap-5 md:gap-6 mb-6 md:mb-5">
                  <div className="relative">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email id*"
                      className="w-full bg-transparent border-b border-[#FDF3E7]/40 py-1 text-[13.5px] md:text-[14px] focus:outline-none focus:border-[#FDF3E7] placeholder-[#FDF3E7]/50 font-light"
                    />
                  </div>
                  <div className="relative">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Phone no*"
                      className="w-full bg-transparent border-b border-[#FDF3E7]/40 py-1 text-[13.5px] md:text-[14px] focus:outline-none focus:border-[#FDF3E7] placeholder-[#FDF3E7]/50 font-light"
                    />
                  </div>
                </div>

                {/* Custom-labeled text area - Increased height and spacing */}
                <div className="relative w-full h-[85px] md:h-[85px] mb-4 md:mb-0">
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onFocus={() => setTextareaFocused(true)}
                    onBlur={() => setTextareaFocused(false)}
                    className="w-full h-full bg-transparent border border-[#FDF3E7]/50 p-2.5 text-[13.5px] md:text-[13px] focus:outline-none focus:border-[#FDF3E7] resize-none font-light leading-normal"
                  />
                  {!textareaFocused && !message && (
                    <div className="absolute inset-0 p-2.5 pointer-events-none flex flex-col justify-start">
                      <span className="font-semibold text-[13px] md:text-[12.5px] text-[#FDF3E7]/80 leading-none mb-2">
                        Tell us more about your project
                      </span>
                      <span className="text-[11px] md:text-[11px] text-[#FDF3E7]/50 leading-tight">
                        What&apos;s bringing you here? We&apos;d love to know what you&apos;re building, where you&apos;re stuck, or what you&apos;re dreaming of.
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Row */}
              <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mt-5 md:mt-3">
                {/* 5 Stars - Visible only on desktop here */}
                <div className="hidden md:flex gap-0.5 text-[#FDF3E7] text-base md:text-lg">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="select-none">
                      ★
                    </span>
                  ))}
                </div>

                {/* Submit Pill Button - Standalone and padded on Mobile */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-none bg-[#FDF3E7] text-[#A2511F] px-5 py-2.5 text-[11px] md:text-[13px] font-semibold tracking-wide uppercase transition-all duration-200 hover:scale-[1.02] hover:brightness-105 active:scale-95 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-1 shadow-md w-full md:w-auto mt-2 md:mt-0"
                >
                  {isSubmitting ? "Sending..." : "Request a stay →"}
                </button>
              </div>
            </div>

            {/* Middle Vertical/Horizontal Divider Line */}
            {/* Horizontal Line on Mobile, my-7 */}
            <div className="block md:hidden w-full border-t border-dashed border-[#FDF3E7]/30 my-7" />
            {/* Vertical Line on Desktop */}
            <div className="hidden md:block w-[1px] relative">
              <div className="absolute inset-y-1 left-0 border-l border-dashed border-[#FDF3E7]/30" />
            </div>

            {/* Right Column (34% on Desktop, Full on Mobile) */}
            <div className="w-full md:w-[34%] flex flex-col justify-center items-center text-center md:pl-10 py-1">
              {/* THE WOOLGATHERERS */}
              <span
                className="text-[10px] md:text-[11px] tracking-[2px] text-[#B9C4A8] font-bold uppercase mb-3 md:mb-3.5"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                THE WOOLGATHERERS
              </span>

              {/* GUEST REGISTER */}
              <h1
                className="text-[32px] md:text-[38px] leading-[0.95] text-[#FDF3E7] font-bold uppercase mb-4"
                style={{ fontFamily: '"Jersey 15", var(--font-jersey-15), sans-serif' }}
              >
                GUEST
                <br />
                REGISTER
              </h1>

              {/* 5 Stars - Visible on Mobile below GUEST REGISTER */}
              <div className="flex md:hidden gap-0.5 text-[#FDF3E7] text-base mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="select-none">
                    ★
                  </span>
                ))}
              </div>

              {/* Thin Divider 1 - Hidden on mobile */}
              <div className="hidden md:block w-[40px] h-[1px] bg-[#FDF3E7]/30 mb-4" />

              {/* Every residency begins with a conversation - Hidden on mobile */}
              <p
                className="hidden md:block text-[11px] md:text-[14px] text-[#FDF3E7] max-w-[150px] md:max-w-[180px] leading-snug font-normal mb-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Every residency begins with a conversation
              </p>

              {/* Thin Divider 2 - Hidden on mobile */}
              <div className="hidden md:block w-[40px] h-[1px] bg-[#FDF3E7]/30 mb-4" />

              {/* Thank you for reaching out - Hidden on mobile */}
              <p
                className="hidden md:block text-[10px] md:text-[12px] text-[#FDF3E7]/60 font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Thank you for reaching out
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
