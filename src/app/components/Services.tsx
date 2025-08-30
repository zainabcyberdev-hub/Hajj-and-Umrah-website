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
    color: "bg-gradient-to-r from-amber-500 to-yellow-600",
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
    color: "bg-gradient-to-r from-amber-400 to-amber-600",
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
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } }, // desktop large
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // tablet landscape
      { breakpoint: 768, settings: { slidesToShow: 1, arrows: false } }, // tablet portrait
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false } }, // mobile
    ],
  };

  return (
    <section className="relative py-14 sm:py-20 lg:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-950 via-blue-950 to-teal-950 opacity-95" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <h2
            className={`${merienda.className} text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold 
              bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent 
              drop-shadow-[2px_4px_6px_rgba(0,0,0,0.6)]`}
          >
            Our Premium Services
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 leading-relaxed">
            Experience luxury, comfort, and spirituality through our
            all-inclusive services crafted for your sacred journey.
          </p>
        </motion.div>

        {/* Slider */}
        <Slider {...settings} className="px-2 sm:px-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="px-2"
              >
                <Card
                  className="p-0 w-full mx-auto overflow-hidden rounded-2xl 
                  border border-white/20 bg-white/80 backdrop-blur-xl 
                  shadow-md hover:shadow-xl 
                  hover:border-amber-400 hover:shadow-amber-200/50
                  hover:-translate-y-2 
                  transition-all duration-500 group"
                >
                  {/* Image */}
                  <div className="h-40 sm:h-48 md:h-56 lg:h-60 w-full relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                      priority
                    />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 md:p-6 space-y-3">
                    {/* Icon */}
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 ${service.color} 
                        rounded-xl flex items-center justify-center 
                        shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 text-white" />
                    </div>

                    {/* Title & Description */}
                    <div className="space-y-1">
                      <h3
                        className={`${playfair.className} text-base sm:text-lg md:text-xl font-bold text-gray-900 
                          group-hover:text-amber-600 transition-colors`}
                      >
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed">
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
