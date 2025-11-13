"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Products", href: "#products" },
    { name: "Testimonies", href: "#testimonies" },
    { name: "Contact", href: "#contact" },
    { name: "About Us", href: "/about", isPage: true },
  ];

  const handleClick = (item) => {
    setMobileOpen(false);

    if (item.isPage) {
      router.push(item.href);
    } else {
      setTimeout(() => {
        const section = document.querySelector(item.href);
        section?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 top-0 left-0 transition-colors ${
        scrolled ? "bg-[#5d4037]/90 backdrop-blur-md shadow-md" : "bg-[#5d4037]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo (always visible) */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="SHREE HARDEV PACKERS"
            className="w-16 h-16 object-contain cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 relative text-white font-medium">
          {navItems.map((item, index) => (
            <li
              key={item.name}
              className="relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Hover Oval */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.2, scale: 1.3 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-white rounded-full -z-10"
                  />
                )}
              </AnimatePresence>

              <button
                onClick={() => handleClick(item)}
                className="relative px-4 py-2 transition-colors duration-300"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white focus:outline-none"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#5d4037]/95 backdrop-blur-md shadow-md overflow-hidden"
          >
            <ul className="flex flex-col space-y-4 p-6 text-white font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleClick(item)}
                    className="block w-full text-left px-4 py-2 rounded hover:bg-white/20 transition-colors"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
