"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { Truck, Tag } from "lucide-react";

const products = [
  {
    name: "Paper Bags",
    slug: "paper-bags",
    link: "/paperbags",
    description: "Premium quality kraft paper bags for retail & gifting.",
    images: [
      "products/paperbags/Paperbag4.jpg",
      "products/paperbags/Paperbag7.jpg",
      "products/paperbags/Paperbag11.jpg",
    ],
    price: "On Quotation",
    delivery: "7-10 days",
  },
  {
    name: "Non-Woven Bags",
    slug: "non-woven-bags",
    link: "/nonwovenbags",
    description: "Eco-friendly, reusable and customizable non-woven bags.",
    images: [
      "products/nonwovenbags/Nonwoven11.jpg",
      "products/nonwovenbags/Nonwoven2.jpg",
      "products/nonwovenbags/Nonwoven6.jpg",
    ],
    price: "On Quotation",
    delivery: "7-10 days",
  },
  {
    name: "Flexo & Press Printed Shopping Bags",
    slug: "printed-shopping-bags",
    link: "/printedshoppingbags",
    description: "Custom branded printed shopping bags for your store.",
    images: ["/printed1.jpg", "/printed2.jpg", "/printed3.jpg"],
    price: "On Quotation",
    delivery: "5-8 days",
  },
  {
    name: "Bill Books",
    slug: "bill-books",
    link: "/billbooks",
    description: "High-quality printed bill books and receipt books.",
    images: [
      "products/billbooks/billbook1.jpg",
      "products/billbooks/billbook3.jpg",
      "products/billbooks/billbook5.jpg",
    ],
    price: "On Quotation",
    delivery: "4-6 days",
  },
  {
    name: "Letterhead",
    slug: "letterhead",
    link: "/letterhead",
    description: "Custom printed letterheads to represent your brand.",
    images: [
      "products/letterheads/letterhead1.jpg",
      "products/letterheads/letterhead3.jpg",
      "products/letterheads/letterhead4.jpg",
    ],
    price: "On Quotation",
    delivery: "3-5 days",
  },
  {
    name: "Stationery",
    slug: "stationery",
    link: "/stationery",
    description: "Professional office stationery with custom branding.",
    images: [
      "products/stationery/Stationery1.jpg",
      "products/stationery/Stationery8.jpg",
      "products/stationery/Stationery7.jpg",
    ],
    price: "On Quotation",
    delivery: "3-5 days",
  },
];

export default function Products() {
  const router = useRouter();
  const [imageIndexes, setImageIndexes] = useState(products.map(() => 0));

  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      setImageIndexes((prev) => {
        const newIndexes = [...prev];
        newIndexes[current] =
          (prev[current] + 1) % products[current].images.length;
        return newIndexes;
      });

      current = (current + 1) % products.length;
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="products"
      className="relative py-24 flex flex-col items-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      ></div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.9)_0%,rgba(243,240,234,0.95)_80%)] z-0"></div>

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-[#5d4037] mb-14 text-center relative z-10"
      >
        Our Products
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl w-full relative z-10">
        {products.map((product, index) => (
          <motion.div
            key={product.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -8 }}
            onClick={() => router.push(product.link)}
            className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer border border-[#4caf50]/10"
          >
            <div className="relative h-80 w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imageIndexes[index]}
                  src={product.images[imageIndexes[index]]}
                  alt={product.name}
                  className="object-cover w-full h-full absolute top-0 left-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-black/10 hover:bg-black/5 transition-colors" />
            </div>

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[#5d4037]">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.description}
              </p>

              <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Tag className="text-[#4caf50]" size={18} />
                  <span>{product.price}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="text-[#4caf50]" size={18} />
                  <span>{product.delivery}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
