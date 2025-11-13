"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    name: "Amit Sharma",
    company: "Delhi Traders",
    message:
      "Excellent quality and timely delivery. The team understood our requirements perfectly and executed them flawlessly.",
  },
  {
    name: "Priya Mehta",
    company: "Metro Print Works",
    message:
      "Professional and reliable supplier. The finish and printing on our paper bags were top class.",
  },
  {
    name: "Ravi Patel",
    company: "Surat Mart",
    message:
      "We ordered in bulk and were impressed with the consistency and packaging. Highly recommended for retail supplies.",
  },
  {
    name: "Sneha Iyer",
    company: "GreenLeaf Stationers",
    message:
      "Their bill books and letterheads are of superior print quality. Great service and coordination throughout.",
  },
  {
    name: "Arjun Verma",
    company: "Craftopia",
    message:
      "They deliver exactly what’s promised — excellent quality and neat finishing on every order.",
  },
  {
    name: "Neha Bansal",
    company: "Jaipur Boutique",
    message:
      "Customized paper bags turned out beautiful. My customers love the premium look and feel!",
  },
  {
    name: "Vivek Nair",
    company: "Kochi Organics",
    message:
      "Smooth communication, fast turnaround, and high-quality printing. Very professional vendor.",
  },
  {
    name: "Rahul Singh",
    company: "PrintMax India",
    message:
      "We’ve been working with them for a while — reliable service and attention to detail every single time.",
  },
  {
    name: "Meena Joshi",
    company: "Indore Café & Bakes",
    message:
      "The takeaway bags are sturdy and well-designed. Really happy with the overall experience.",
  },
  {
    name: "Karan Malhotra",
    company: "Urban Edge",
    message:
      "Great people to work with. Quick response, on-time delivery, and unmatched quality in packaging material.",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef(null);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-slide only on mobile
  useEffect(() => {
    if (isMobile) {
      startAutoSlide();
      return stopAutoSlide;
    }
  }, [isMobile]);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleSwipe = (direction) => {
    stopAutoSlide();
    if (direction === "left") {
      setIndex((prev) => (prev + 1) % testimonials.length);
    } else if (direction === "right") {
      setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    }
    startAutoSlide();
  };

  return (
    <section
      id="testimonies"
      className="relative w-full bg-[#fff8f0] py-20 overflow-hidden flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-[#795548] mb-12">
        What Our Clients Say
      </h2>

      {/* Desktop continuous scroll */}
      {!isMobile && (
        <div className="relative w-full max-w-6xl overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-sm bg-white shadow-lg rounded-xl p-6 flex-shrink-0"
              >
                <p className="text-gray-700 italic mb-4">“{t.message}”</p>
                <div className="text-[#795548] font-semibold">{t.name}</div>
                <div className="text-sm text-gray-500">{t.company}</div>
              </div>
            ))}
          </motion.div>

          {/* Fade edges */}
          <div className="pointer-events-none absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#fff8f0] to-transparent"></div>
          <div className="pointer-events-none absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#fff8f0] to-transparent"></div>
        </div>
      )}

      {/* Mobile carousel */}
      {isMobile && (
        <div className="relative w-full max-w-xs overflow-hidden px-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) handleSwipe("left");
                else if (info.offset.x > 50) handleSwipe("right");
              }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white shadow-lg rounded-xl p-6 text-center cursor-grab active:cursor-grabbing select-none"
            >
              <p className="text-gray-700 italic mb-4">
                “{testimonials[index].message}”
              </p>
              <div className="text-[#795548] font-semibold">
                {testimonials[index].name}
              </div>
              <div className="text-sm text-gray-500">
                {testimonials[index].company}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, i) => (
              <div
                key={i}
                onClick={() => {
                  stopAutoSlide();
                  setIndex(i);
                  startAutoSlide();
                }}
                className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all ${
                  i === index ? "bg-[#795548]" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
