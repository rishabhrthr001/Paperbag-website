"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, FileText, ZoomIn, ZoomOut, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LetterheadPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const images = [
    "/products/letterheads/letterhead1.jpg",
    "/products/letterheads/letterhead2.jpg",
    "/products/letterheads/letterhead3.jpg",
    "/products/letterheads/letterhead4.jpg",
    "/products/letterheads/letterhead5.jpg",
    "/products/letterheads/letterhead6.jpg",
    "/products/letterheads/letterhead7.jpg",
    "/products/letterheads/letterhead8.jpg",
    "/products/letterheads/letterhead9.jpg",
  ];

  const handleZoomIn = () => setZoom((prev) => Math.min(prev + 0.25, 3));
  const handleZoomOut = () => setZoom((prev) => Math.max(prev - 0.25, 1));

  return (
    <section className="relative py-20 px-6 md:px-12 lg:px-20 overflow-hidden min-h-screen bg-[#fdfaf6]">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.95)_0%,rgba(245,240,230,0.9)_90%)] -z-10" />

      {/* Back button */}
      <button
        onClick={() => router.push("/")}
        className="flex items-center gap-2 mb-10 text-[#5d4037] hover:text-[#4caf50] transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Back to Products</span>
      </button>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#5d4037] mb-8 flex items-center gap-3"
      >
        <FileText className="text-[#4caf50]" size={40} />
        Custom Printed Letterheads
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl text-gray-700 text-lg leading-relaxed mb-10"
      >
        Our <span className="font-semibold text-[#4caf50]">Letterheads</span>
        are crafted to give your brand a professional, elegant presence in every
        correspondence. Designed with premium paper and advanced printing
        techniques, these letterheads reflect your company’s identity and
        credibility. Perfect for invoices, proposals, corporate communication,
        and more.
      </motion.p>

      {/* Specifications */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 md:p-8 mb-16 border border-[#4caf50]/10"
      >
        <h2 className="text-2xl font-semibold text-[#5d4037] mb-4">
          Specifications
        </h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 text-base">
          <li>
            <span className="font-semibold text-[#4caf50]">Paper Type:</span>{" "}
            Executive Bond / Maplitho / Textured / Imported Paper
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">GSM Range:</span> 90
            – 150 GSM
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Printing:</span>{" "}
            Offset / Digital (Single or Multi-color)
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Size:</span> Standard
            A4 (8.27" x 11.69") or Custom Sizes
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Finish:</span> Matte
            / Gloss / UV / Watermark
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Customization:</span>{" "}
            Logo, Header & Footer, Signature Area, Contact Details, QR Codes
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Usage:</span>
            Corporate Communication, Invoices, Proposals, Letters
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Delivery Time:</span>{" "}
            3–5 business days
          </li>
        </ul>
      </motion.div>

      {/* Image Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {images.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="relative overflow-hidden rounded-xl shadow-md hover:shadow-xl group cursor-pointer"
            onClick={() => {
              setSelectedImage(src);
              setZoom(1);
            }}
          >
            <Image
              src={src}
              alt={`Letterhead ${i + 1}`}
              width={800}
              height={600}
              className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal for zoom */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="relative max-w-5xl w-full px-4 flex flex-col items-center">
              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-6 text-white hover:text-[#4caf50] transition"
              >
                <X size={32} />
              </button>

              {/* Zoom Controls */}
              <div className="absolute top-4 left-6 flex gap-3">
                <button
                  onClick={handleZoomIn}
                  className="text-white hover:text-[#4caf50] transition"
                >
                  <ZoomIn size={28} />
                </button>
                <button
                  onClick={handleZoomOut}
                  className="text-white hover:text-[#4caf50] transition"
                >
                  <ZoomOut size={28} />
                </button>
              </div>

              {/* Image */}
              <motion.div
                className="overflow-hidden rounded-lg mt-12"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage}
                  alt="Zoomed Letterhead"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[80vh] transition-transform duration-300"
                  style={{
                    transform: `scale(${zoom})`,
                    cursor: zoom > 1 ? "grab" : "default",
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
