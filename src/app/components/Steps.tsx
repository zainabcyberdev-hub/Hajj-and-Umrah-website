"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const packages = [
  {
    title: "Basic Umrah Package",
    price: "$999",
    duration: "7 Days",
    features: [
      "3-Star Hotel Accommodation",
      "Economy Flights",
      "Guided Ziyarat Tours",
      "Breakfast Included",
    ],
  },
  {
    title: "Premium Umrah Package",
    price: "$1799",
    duration: "10 Days",
    features: [
      "5-Star Hotel Accommodation",
      "Business Class Flights",
      "Private Transport",
      "All Meals Included",
      "24/7 Assistance",
    ],
  },
  {
    title: "Luxury Umrah Experience",
    price: "$2999",
    duration: "14 Days",
    features: [
      "Luxury 5-Star Suites",
      "First Class Flights",
      "VIP Ziyarat Tours",
      "Personal Guide",
      "All-Inclusive Services",
    ],
  },
];

export default function UmrahPackages() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16"
      >
        Choose Your <span className="text-amber-400">Umrah Package</span>
      </motion.h2>

      {/* Package Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="relative group bg-white/10 backdrop-blur-xl 
            p-6 sm:p-8 rounded-2xl shadow-2xl 
            border border-white/10 hover:border-amber-400/40 
            hover:shadow-amber-400/40 transition-all duration-500
            w-full max-w-sm mx-auto overflow-visible"
          >
            {/* ✅ Price Badge (Responsive) */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="absolute top-2 right-2 sm:-top-4 sm:right-6 
              px-3 sm:px-4 py-1.5 sm:py-2
              bg-gradient-to-r from-amber-400 to-yellow-500 
              text-black text-xs sm:text-sm font-bold rounded-full shadow-lg"
            >
              {pkg.price}
            </motion.div>

            {/* Title & Duration */}
            <h3 className="text-2xl font-semibold mb-2">{pkg.title}</h3>
            <p className="text-amber-300 font-medium mb-6">{pkg.duration}</p>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {pkg.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="text-amber-400 w-5 h-5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 px-6 rounded-xl bg-amber-400 text-black 
              font-bold shadow-md hover:shadow-amber-400/50 hover:bg-amber-300 
              transition-all duration-300"
            >
              Book Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
