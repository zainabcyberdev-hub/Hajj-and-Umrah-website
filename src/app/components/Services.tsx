"use client";

import { motion } from "framer-motion";
import { Card } from "../../components/ui/card";
import {
  FileText,
  Plane,
  Hotel,
  Navigation,
  Clock,
  Shield,
} from "lucide-react";
import { Merienda, Playfair_Display } from "next/font/google";

// Main Heading Font
const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

// Card Titles Font
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
});

const services = [
  {
    icon: FileText,
    title: "eVisa Application",
    description:
      "Simplified visa application process for pilgrims from all over the world",
    color: "bg-gradient-to-r from-emerald-500 to-green-600",
    image: "/hajjVisa.jpg",
  },
  {
    icon: Plane,
    title: "Flight Booking",
    description:
      "Find and book the best flights to Saudi Arabia with our partners",
    color: "bg-gradient-to-r from-sky-500 to-blue-600",
    image: "/flightbooking.jpg",
  },
  {
    icon: Hotel,
    title: "Accommodation",
    description:
      "Book verified hotels in Makkah, Madina and other holy cities",
    color: "bg-gradient-to-r from-amber-500 to-yellow-600",
    image: "/hotels.jpg",
  },
  {
    icon: Navigation,
    title: "Guided Tours",
    description:
      "Spiritual guided tours to important Islamic sites and landmarks",
    color: "bg-gradient-to-r from-purple-500 to-indigo-600",
    image: "/tours.jpg",
  },
  {
    icon: Clock,
    title: "Tawaf Tracker",
    description: "Real-time tracking and guidance during your Tawaf rituals",
    color: "bg-gradient-to-r from-pink-500 to-rose-600",
    image: "/tawafTracker.jpeg",
  },
  {
    icon: Shield,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance throughout your pilgrimage journey",
    color: "bg-gradient-to-r from-red-500 to-orange-600",
    image: "/support.avif",
  },
];

export default function Services() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Sticky Background Image */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/servicesBack.png')" }}
      >
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-16 md:mb-24"
        >
          <h2
            className={`${merienda.className} text-4xl sm:text-5xl md:text-6xl font-bold 
              bg-gradient-to-r from-teal-950 to-blue-900 bg-clip-text text-transparent`}
          >
            Our Services
          </h2>
          <p className="text-teal-950 sm:text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
            From visa applications to guided tours, we provide everything you
            need for a seamless and spiritual pilgrimage experience.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="p-0 overflow-hidden rounded-3xl 
                  border border-white/20 
                  bg-white/10 backdrop-blur-md 
                  shadow-lg hover:shadow-2xl 
                  hover:border-primary/50 
                  hover:-translate-y-3 transition-all duration-500 group"
                >
                  {/* Image */}
                  <div className="h-48 sm:h-52 md:h-56 lg:h-60 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 md:p-8 space-y-6">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center 
                                  shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-8 w-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3
                        className={`${playfair.className} text-xl sm:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
