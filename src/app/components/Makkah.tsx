"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Marcellus, Inter } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

// Types
interface Hotel {
  id: number;
  name: string;
  rating: number;
  price: number;
  desc: string;
  details?: string;
}

interface ItineraryStep {
  step: string;
  detail: string;
}

interface FaqItem {
  q: string;
  a: string;
}

const MakkahPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeHotel, setActiveHotel] = useState<number | null>(null);

  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [itinerary, setItinerary] = useState<ItineraryStep[]>([]);
  const [faqData, setFaqData] = useState<FaqItem[]>([]);

  // Fetch backend data
  useEffect(() => {
    fetch("/api/hotels")
      .then(res => res.json())
      .then((data: Hotel[]) => setHotels(data));

    fetch("/api/itinerary")
      .then(res => res.json())
      .then((data: ItineraryStep[]) => setItinerary(data));

    fetch("/api/faq")
      .then(res => res.json())
      .then((data: FaqItem[]) => setFaqData(data));
  }, []);

  return (
    <div className="relative min-h-screen text-white">
      <div className={`relative z-10 ${inter.className}`}>
        {/* Hero Section */}
        <section className="py-15 text-center relative">
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8 }}
            className={`${marcellus.className} text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent`}
          >
            Embark on Your Sacred Journey to Makkah
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto"
          >
            Your spiritual voyage begins here.
          </motion.p>
          <motion.a
            href="#application"
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px rgba(255,215,0,0.8)" }}
            className="px-10 py-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold rounded-full transition text-lg inline-block"
          >
            Submit Your Application
          </motion.a>
        </section>

        {/* Hotels */}
        <section className="py-20 container mx-auto px-6 text-left">
          <h2  className={`${marcellus.className} text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent`}
         >Featured Hotels & Packages</h2>
          <div className="grid md:grid-cols-3 gap-10">
            {hotels.map((hotel, i) => (
              <motion.div
                key={hotel.id}
                className="bg-gradient-to-br from-white/10 to-white/5 p-8 rounded-2xl backdrop-blur-md shadow-xl border border-white/20 hover:border-yellow-400 transition"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="font-bold text-2xl mb-2">{hotel.name}</h3>
                <p className="mb-2 text-yellow-400">⭐ {hotel.rating}</p>
                <p className="mb-4">Starting from ${hotel.price}/night</p>
                <button
                  onClick={() => setActiveHotel(activeHotel === i ? null : i)}
                  className="px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition"
                >
                  {activeHotel === i ? "Hide Details" : "View Details"}
                </button>
                <AnimatePresence>
                  {activeHotel === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-300 overflow-hidden"
                    >
                      <p>{hotel.desc}</p>
                      {hotel.details && <p className="mt-2">{hotel.details}</p>}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Itinerary */}
        <section className="py-8 container mx-auto px-6 text-left">
          <h2  className={`${marcellus.className} text-2xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent`}
         >Itinerary Planner</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {itinerary.map((step, i) => (
              <motion.div
                key={i}
                className={`p-6 rounded-xl text-center cursor-pointer transition-all duration-300 ${
                  activeStep === i
                    ? "bg-yellow-500 text-black shadow-xl scale-105"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                whileHover={{ scale: 1.05 }}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              >
                <h3 className="font-bold mb-2">{step.step}</h3>
                <AnimatePresence>
                  {activeStep === i && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-sm"
                    >
                      {step.detail}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 container mx-auto px-6 text-left">
          <h2  className={`${marcellus.className} text-3xl md:text-3xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent`}
         >Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqData.map((faq, i) => (
              <div key={i} className="bg-white/10 p-6 rounded-xl cursor-pointer">
                <div onClick={() => setActiveFaq(activeFaq === i ? null : i)}>
                  <h3 className="font-bold">{faq.q}</h3>
                </div>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-300 mt-2"
                    >
                      {faq.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MakkahPage;
