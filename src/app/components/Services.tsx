"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "../../components/ui/card";
import Slider from "react-slick";
import {
  FileText,
  Plane,
  Hotel,
  Navigation,
  Clock,
  Shield,
} from "lucide-react";
import { Merienda, Playfair_Display } from "next/font/google";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

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
    description: "Book verified hotels in Makkah, Madina and other holy cities",
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
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } },
    ],
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/servicesBack.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mx-auto mb-10 sm:mb-14 md:mb-20"
        >
          <motion.h2
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className={`${merienda.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold 
              bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent 
              drop-shadow-[2px_4px_6px_rgba(0,0,0,0.6)]`}
          >
            Our Services
          </motion.h2>
          <p className="text-amber-400 text-sm sm:text-base md:text-lg leading-relaxed mt-4 sm:mt-6 max-w-2xl mx-auto">
            From visa applications to guided tours, we provide everything you
            need for a seamless and spiritual pilgrimage experience.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings}>
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-2 sm:px-3"
              >
                <Card
                  className="p-0 w-full max-w-sm mx-auto overflow-hidden rounded-xl sm:rounded-2xl 
                  border border-white/20 sm:border-white/30 
                  bg-white/60 backdrop-blur-xl 
                  shadow-lg hover:shadow-2xl 
                  hover:border-amber-400 
                  hover:-translate-y-2 sm:hover:-translate-y-3 
                  transition-all duration-500 group"
                >
                  {/* Image */}
                  <div className="h-40 sm:h-48 md:h-56 w-full relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 ${service.color} 
                        rounded-xl flex items-center justify-center 
                        shadow-md group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-white" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1 sm:space-y-2">
                      <h3
                        className={`${playfair.className} text-base sm:text-lg md:text-xl font-bold text-gray-900 
                          group-hover:text-amber-600 transition-colors`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}
