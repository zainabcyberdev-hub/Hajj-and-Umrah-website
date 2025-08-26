"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Merienda } from "next/font/google";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<{ ok?: boolean; msg?: string }>({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus({});

    const formData = new FormData(formRef.current);

    const data = {
      name: formData.get("name")?.toString() || "",
      email: formData.get("email")?.toString() || "",
      phone: formData.get("phone")?.toString() || "",
      city: formData.get("city")?.toString() || "",
      message: formData.get("message")?.toString() || "",
    };

    try {
      const res = await fetch("https://formspree.io/f/meolqlqg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus({ ok: true, msg: "✅ Thank you! We’ll contact you soon InshAllah." });
        formRef.current.reset(); // ✅ safe reset
      } else {
        setStatus({ ok: false, msg: "❌ Something went wrong. Please try again." });
      }
    } catch (err) {
      setStatus({ ok: false, msg: "❌ Failed to send. Try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.25),transparent_60%)]" />
      </div>

      {/* Contact Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <motion.h1
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent`}
        >
          Contact Us
        </motion.h1>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
          We’re here to help! Fill in the form below, or reach us directly via phone, email, or WhatsApp.
        </p>

        {/* Form */}
        <motion.form
          ref={formRef}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-5 bg-white/10 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-yellow-400/20 shadow-xl"
        >
          <input
            type="text"
            name="name"
            required
            placeholder="Full Name"
            className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="text"
            name="phone"
            required
            placeholder="Phone Number"
            className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <input
            type="text"
            name="city"
            required
            placeholder="City / Country"
            className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            name="message"
            rows={4}
            required
            placeholder="Your Message..."
            className="w-full p-3 rounded-xl bg-black/40 text-white border border-white/10 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <motion.button
            whileTap={{ scale: 0.98 }}
            whileHover={{ scale: 1.01 }}
            disabled={loading}
            type="submit"
            className="w-full py-3 rounded-xl font-semibold bg-gradient-to-r from-amber-400 to-yellow-500 text-black shadow-lg disabled:opacity-70"
          >
            {loading ? "Submitting..." : "Send Message"}
          </motion.button>

          {/* Status Messages */}
          {status.msg && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`text-center p-3 rounded-lg ${
                status.ok
                  ? "bg-green-500/20 border border-green-400/40 text-green-300"
                  : "bg-red-500/20 border border-red-400/40 text-red-300"
              }`}
            >
              {status.msg}
            </motion.div>
          )}
        </motion.form>

        {/* Quick Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <Phone className="mx-auto mb-3 text-yellow-400" size={28} />
            <h2 className={`${merienda.className} text-xl font-bold text-yellow-400 mb-2`}>
              Phone
            </h2>
            <p className="text-gray-300">+92 300 1234567</p>
          </div>
          <div>
            <Mail className="mx-auto mb-3 text-yellow-400" size={28} />
            <h2 className={`${merienda.className} text-xl font-bold text-yellow-400 mb-2`}>
              Email
            </h2>
            <p className="text-gray-300">info@yourdomain.com</p>
          </div>
          <div>
            <MapPin className="mx-auto mb-3 text-yellow-400" size={28} />
            <h2 className={`${merienda.className} text-xl font-bold text-yellow-400 mb-2`}>
              Office
            </h2>
            <p className="text-gray-300">Lahore, Pakistan</p>
          </div>
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 transition text-white font-semibold shadow-lg"
          >
            <MessageCircle size={20} /> Chat on WhatsApp
          </a>
        </div>


        {/* Back Button */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="text-sm text-gray-300 hover:text-white underline underline-offset-4"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}
