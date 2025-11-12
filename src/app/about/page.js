"use client";

import { motion } from "framer-motion";
import { Truck, Package, Users } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section className="bg-[#f5f2eb] py-20 px-8 md:px-20 min-h-screen">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-[#5d4037] text-center mb-12"
      >
        About Us
      </motion.h1>

      {/* Introduction */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16 text-gray-700 space-y-4"
      >
        <p>
          <strong>Shree Hardev Packers</strong> has been a trusted name in
          professional packing and delivery services since <strong>2010</strong>
          . With over a decade of expertise, we specialize in ensuring your
          goods reach safely, on time, and in pristine condition.
        </p>
        <p>
          Our mission is to combine reliability, efficiency, and sustainability,
          offering high-quality packing solutions tailored for businesses and
          individuals alike.
        </p>
      </motion.div>

      {/* Core Values / Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
        {[
          {
            Icon: Users,
            title: "Trusted Team",
            desc: "Our trained staff ensures every package is handled with care and professionalism.",
          },
          {
            Icon: Package,
            title: "Quality Packing",
            desc: "We use high-quality materials and innovative techniques for safe and secure packing.",
          },
          {
            Icon: Truck,
            title: "On-Time Delivery",
            desc: "Reliable and timely delivery is our top priority, keeping you worry-free.",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-shadow"
          >
            <item.Icon size={40} className="text-[#4caf50] mb-4" />
            <h3 className="text-xl font-semibold text-[#5d4037] mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Our Story */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-gray-700 space-y-4 mb-20"
      >
        <h2 className="text-3xl font-bold text-[#5d4037] mb-4">Our Journey</h2>
        <p>
          Started in 2010 with a small team and a big vision, Shree Hardev
          Packers has grown into a full-service packing and delivery company
          serving Delhi and beyond. Our dedication to quality and customer
          satisfaction has earned us long-term relationships with countless
          businesses and individuals.
        </p>
        <p>
          From humble beginnings to becoming a trusted brand, we continuously
          innovate our processes, ensuring your items are handled with the
          utmost care.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center "
      >
        <Link href="/#contact" scroll={true}>
          <span className="inline-block px-8 py-4 bg-[#4caf50] text-white font-semibold rounded-4xl shadow-md hover:bg-[#43a047] transition-colors cursor-pointer">
            Get in Touch
          </span>
        </Link>
      </motion.div>
    </section>
  );
}
