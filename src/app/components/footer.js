"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#5d4037] text-[#f3f0ea] py-12 px-8 md:px-20">
      {/* Logo & Company Name */}
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="SHRI HARDEV PACKERS"
            className="w-16 h-16 object-contain"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center">
          SHRI HARDEV PACKERS
        </h2>
      </div>

      {/* Contact & Links */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-0 mb-8 w-full max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="flex flex-col items-start w-full md:w-auto">
          <h3 className="font-semibold mb-2">Contact</h3>
          <p className="flex items-center gap-2">
            <Phone size={18} />
            <a href="tel:+919873270176" className="hover:text-[#4caf50]">
              +91-9873270176
            </a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={18} />
            <a
              href="mailto:hardevprinter@gmail.com"
              className="hover:text-[#4caf50]"
            >
              hardevprinter@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2">
            <MapPin size={18} />
            WZ-2D/2, 1st Floor, Basai Darapur, New Delhi-110059
          </p>

          {/* Quick Links for Mobile */}
          <div className="mt-6 md:hidden">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#home" className="hover:text-[#4caf50]">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#4caf50]">
                  Products
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#4caf50]">
                  Contact
                </a>
              </li>
              <li>
                <a href="#testimonies" className="hover:text-[#4caf50]">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Quick Links for Desktop */}
        <div className="hidden md:flex flex-col items-start">
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#home" className="hover:text-[#4caf50]">
                Home
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-[#4caf50]">
                Products
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#4caf50]">
                Contact
              </a>
            </li>
            <li>
              <a href="#testimonies" className="hover:text-[#4caf50]">
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start mt-6 md:mt-0">
          <h3 className="font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#4caf50]">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-[#4caf50]">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-[#4caf50]">
              <Linkedin size={20} />
            </a>
            <a href="#" className="hover:text-[#4caf50]">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#4caf50] pt-4 text-center text-sm space-y-2">
        <p>
          © {new Date().getFullYear()} SHRI HARDEV PACKERS. All Rights Reserved.
        </p>

        {/* Signature Line */}
        <p className="text-white">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <a
            href="https://devrishabh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold  hover:text-[#4caf50] transition-colors"
          >
            <span className="text-green-600">Rishabh Rathore</span>
          </a>
        </p>
      </div>
    </footer>
  );
}
