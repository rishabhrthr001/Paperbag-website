"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileContactButtons() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50 md:hidden">
      {/* Call Button */}
      <a
        href="tel:+919873270176" // replace with your actual number
        className="bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition-all flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/91987270176" // replace with your WhatsApp number (no '+' or '-' signs)
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-md hover:bg-[#1DA851] transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
