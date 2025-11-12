"use client";

import { Phone } from "lucide-react";

export default function MobileContactButtons() {
  return (
    <div className="fixed bottom-4 left-4 flex flex-col gap-3 z-50 md:hidden">
      {/* Call Button */}
      <a
        href="tel:+919873270176"
        className="bg-green-600 text-white p-3 rounded-full shadow-md hover:bg-green-700 transition-all flex items-center justify-center"
        aria-label="Call Us"
      >
        <Phone size={22} />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919873270176"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-md hover:bg-[#1DA851] transition-all flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        {/* Official WhatsApp SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12.004 2c-5.524 0-10 4.476-10 10 0 1.762.465 3.487 1.35 5.011L2 22l5.146-1.332A9.94 9.94 0 0012 22c5.524 0 10-4.476 10-10s-4.476-10-10-10zm0 18.222a8.183 8.183 0 01-4.166-1.14l-.298-.176-3.062.792.82-2.984-.192-.306A8.178 8.178 0 013.778 12c0-4.544 3.682-8.222 8.226-8.222 4.544 0 8.218 3.678 8.218 8.222 0 4.544-3.674 8.222-8.218 8.222zm4.49-6.154c-.247-.124-1.462-.72-1.689-.803-.228-.083-.393-.124-.558.124-.165.247-.64.803-.784.969-.144.165-.289.186-.536.062-.247-.124-1.042-.384-1.984-1.224-.732-.654-1.226-1.462-1.37-1.709-.144-.247-.015-.38.109-.503.112-.111.247-.289.37-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.021-.433-.062-.124-.558-1.35-.764-1.851-.2-.48-.403-.415-.558-.423l-.474-.008a.918.918 0 00-.669.31c-.228.247-.874.853-.874 2.078 0 1.224.896 2.409 1.02 2.576.124.165 1.76 2.689 4.267 3.772.597.257 1.063.411 1.426.526.598.19 1.143.163 1.573.099.48-.071 1.462-.598 1.668-1.175.206-.577.206-1.07.144-1.175-.062-.103-.228-.165-.474-.289z" />
        </svg>
      </a>
    </div>
  );
}
