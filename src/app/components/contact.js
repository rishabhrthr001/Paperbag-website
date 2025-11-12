"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          time: new Date().toLocaleString(),
          reply_to: form.email,
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      );

      if (result.text === "OK") {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("⚠️ Something went wrong.");
      }
    } catch (err) {
      console.error("EmailJS Error:", err);
      setStatus("❌ Failed to send. Try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-16 gap-12 overflow-hidden"
    >
      {/* --- Background Image --- */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg1.jpg')" }}
      ></div>

      {/* --- Light Overlay for readability --- */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.92)_0%,rgba(243,240,234,0.96)_80%)] z-0"></div>

      {/* --- Map Section --- */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full md:w-1/2 h-[500px] rounded-2xl overflow-hidden shadow-2xl"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1762977521304!6m8!1m7!1s3W_U-4iEaTIyi6Th5RhBHA!2m2!1d28.65863599500068!2d77.13670727183846!3f329.329915155184!4f4.7564731993847715!5f0.7820865974627469"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="border-0 rounded-lg"
        />
      </motion.div>

      {/* --- Contact Form --- */}
      <motion.form
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        onSubmit={sendEmail}
        className="relative z-10 w-full md:w-1/2 h-[500px] bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6 flex flex-col justify-between border border-[#4caf50]/10"
      >
        <h2 className="text-3xl font-bold text-[#5d4037]">Get in Touch</h2>

        <div className="space-y-4 flex-1">
          <div>
            <label className="block text-sm font-medium text-[#3e2723] mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="w-full p-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#3e2723] mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
            />
          </div>

          <div className="flex-1">
            <label className="block text-sm font-medium text-[#3e2723] mb-1">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Type your message..."
              className="w-full p-3 rounded-lg border border-gray-300 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#4caf50]"
            />
          </div>
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#4caf50] text-white font-semibold py-3 rounded-xl hover:bg-[#43a047] transition-colors"
        >
          Send Message
        </motion.button>

        {status && (
          <p className="text-center text-sm text-[#3e2723] mt-3">{status}</p>
        )}
      </motion.form>
    </section>
  );
}
