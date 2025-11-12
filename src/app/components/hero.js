"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const images = ["/1.jpg", "/2.jpg", "/3.jpg"];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  const nextImage = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevImage = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen 
        flex flex-col md:flex-row 
        items-center justify-center md:justify-between 
        overflow-hidden 
        px-6 md:px-20 
        pt-32 md:pt-20 pb-10
      "
    >
      {/* --- Background image --- */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      ></div>

      {/* --- Gradient + pattern overlay --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(243,240,234,0.95)_70%)] z-0"></div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:20px_20px] opacity-40 z-0"></div>

      {/* --- Left Content --- */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-xl text-center md:text-left"
      >
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#3e2723] leading-tight drop-shadow-md">
          Premium Paper Bags & Stationery
          <br />
          <span className="text-[#4caf50]">That Define Quality</span>
        </h1>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
        >
          {[
            { Icon: Sparkles, text: "Elegant Designs" },
            { Icon: ShieldCheck, text: "Durable Build" },
            { Icon: Truck, text: "Fast Delivery" },
          ].map(({ Icon, text }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 bg-white/90 backdrop-blur-sm shadow-sm border border-[#4caf50]/20 rounded-lg px-4 py-2"
            >
              <Icon className="text-[#4caf50]" size={22} />
              <span className="font-medium text-[#3e2723]">{text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          href="#products"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block px-8 py-4 bg-[#4caf50] text-white font-semibold rounded-full shadow-md hover:bg-[#43a047] transition-all"
        >
          Explore Products
        </motion.a>
      </motion.div>

      {/* --- Right Carousel --- */}
      <div className="relative w-full max-w-[500px] sm:max-w-[550px] h-[400px] sm:h-[500px] md:h-[550px] flex justify-center items-center mt-12 md:mt-0 z-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={images[current]}
            src={images[current]}
            alt={`Bag ${current + 1}`}
            className="w-full h-full object-contain rounded-2xl shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          />
        </AnimatePresence>

        {/* Previous Button */}
        <button
          onClick={prevImage}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition-all"
        >
          <ChevronLeft size={28} className="text-[#4caf50]" />
        </button>

        {/* Next Button */}
        <button
          onClick={nextImage}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-md transition-all"
        >
          <ChevronRight size={28} className="text-[#4caf50]" />
        </button>
      </div>
    </section>
  );
}
