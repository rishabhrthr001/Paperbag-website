"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, X, ZoomIn, ZoomOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function FlexoBagsPage() {
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const images = [
    "/products/flexobags/flexo1.jpg",
    "/products/flexobags/flexo2.jpg",
    "/products/flexobags/flexo3.jpg",
    "/products/flexobags/flexo4.jpg",
    "/products/flexobags/flexo5.jpg",
    "/products/flexobags/flexo6.jpg",
    "/products/flexobags/flexo7.jpg",
    "/products/flexobags/flexo8.jpg",
    "/products/flexobags/flexo9.jpg",
    "/products/flexobags/flexo10.jpg",
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
        <ShoppingBag className="text-[#4caf50]" size={40} />
        Flexo Printed Shopping Bags
      </motion.h1>

      {/* Description */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-3xl text-gray-700 text-lg leading-relaxed mb-10"
      >
        Our{" "}
        <span className="font-semibold text-[#4caf50]">
          Flexo Printed Shopping Bags
        </span>
        combine durability with vibrant, high-quality prints — ideal for
        brand-conscious businesses. Using advanced flexographic printing
        technology, these bags deliver sharp and colorful designs on
        eco-friendly materials like kraft paper and non-woven fabrics, ensuring
        your brand stands out in every carry.
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
            <span className="font-semibold text-[#4caf50]">Material:</span>{" "}
            Kraft Paper / Non-Woven Polypropylene
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">GSM Range:</span> 80
            – 250 GSM (customizable)
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Printing:</span>{" "}
            Multi-color Flexographic Printing (up to 8 colors)
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Finish:</span> Matte
            / Gloss / UV Lamination
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Handle Type:</span>{" "}
            Rope, Die-Cut, Twisted Paper, or Loop Handle
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Customization:</span>{" "}
            Sizes, colors, logo placement, and coating options available
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Usage:</span> Retail,
            Apparel, Luxury Stores, Promotions, Gifting
          </li>
          <li>
            <span className="font-semibold text-[#4caf50]">Delivery Time:</span>{" "}
            5–8 business days
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
              alt={`Flexo Printed Bag ${i + 1}`}
              width={800}
              height={600}
              className="object-cover w-full h-80 transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Modal with Zoom */}
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
              {/* Close Button */}
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
                  alt="Zoomed Flexo Bag"
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
