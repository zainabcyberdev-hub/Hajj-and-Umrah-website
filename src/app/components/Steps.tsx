"use client";

import { Button } from "../../components/ui/button";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Google Fonts
import { Merienda, Orbitron } from "next/font/google";

const meriendaFont = Merienda({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const orbitronFont = Orbitron({
  weight: ["600", "700"],
  subsets: ["latin"],
});

export default function PackagesSection() {
  const router = useRouter();

  const packages = [
    {
      name: "Silver Umrah Package",
      price: "Rs. 250,000",
      features: [
        "Economy class flights",
        "3-star hotel accommodation",
        "Daily breakfast included",
        "Guided Ziyaarah tour",
        "Shared transport facility",
      ],
    },
    {
      name: "Gold Hajj Package",
      price: "Rs. 850,000",
      features: [
        "Business class flights",
        "5-star hotel near Haram",
        "All meals included",
        "VIP guided Ziyaarah",
        "Private AC transport",
      ],
    },
    {
      name: "Platinum VIP Package",
      price: "Rs. 1,500,000",
      features: [
        "First class flights",
        "Luxury 5-star hotel (Kaaba view)",
        "All-inclusive meals",
        "Private guided tours",
        "Luxury transport (SUV)",
        "24/7 personal assistant",
      ],
    },
  ];

  // Slick Settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2, centerMode: false } }, // xl
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // lg
      { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } }, // md
      { breakpoint: 480, settings: { slidesToShow: 1, arrows: false, centerMode: false } }, // sm
    ],
  };

  return (
    <section
      className="relative py-12 sm:py-16 md:py-24 text-white bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/hajj-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      <div className="container mx-auto px-3 sm:px-6 md:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-14 md:mb-20"
        >
          <h2
            className={`${orbitronFont.className} text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 
              leading-tight bg-gradient-to-r from-amber-400 to-yellow-500 
              bg-clip-text text-transparent drop-shadow-2xl`}
          >
            Our Hajj & Umrah Packages
          </h2>
          <p className="text-sm sm:text-base md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Select the package that suits your spiritual journey and enjoy a
            luxurious, comfortable experience.
          </p>
        </motion.div>

        {/* Slick Slider */}
        <Slider {...settings}>
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
              className="px-2 sm:px-4"
            >
              <div
                className="relative group bg-white/10 backdrop-blur-xl 
                p-4 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl shadow-2xl w-full 
                border border-white/10 hover:border-amber-400/40 
                hover:shadow-amber-400/40 transition-all duration-500"
              >
                {/* Price Badge */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="absolute -top-3 sm:-top-5 right-3 sm:right-6 px-3 sm:px-4 py-1.5 sm:py-2 
                  bg-gradient-to-r from-amber-400 to-yellow-500 
                  text-black text-xs sm:text-sm font-bold rounded-full shadow-lg"
                >
                  {pkg.price}
                </motion.div>

                <h3
                  className={`${meriendaFont.className} text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-amber-400`}
                >
                  {pkg.name}
                </h3>

                <ul className="space-y-2 sm:space-y-3 text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="text-yellow-400 w-4 h-4 sm:w-5 sm:h-5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 
                  text-black font-semibold shadow-lg hover:opacity-90 
                  hover:shadow-amber-400/50 transition-all"
                  onClick={() => router.push("/application")}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
