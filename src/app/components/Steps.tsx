"use client";

import { Button } from "../../components/ui/button";
import { motion, Variants } from "framer-motion";
import { Merienda } from "next/font/google";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";

const meriendaFont = Merienda({
  weight: ["400", "700"],
  subsets: ["latin"],
});

// ✅ Typed Variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

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

  return (
    <section
      className="relative py-28 text-white bg-fixed bg-center bg-cover"
      style={{ backgroundImage: "url('/hajj-background.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-20"
        >
          <h2
            className={`${meriendaFont.className} text-4xl lg:text-5xl font-bold mb-6 leading-tight bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent`}
          >
            Our Hajj & Umrah Packages
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Select the package that suits your spiritual journey and enjoy a
            luxurious, comfortable experience.
          </p>
        </motion.div>

        {/* Packages */}
        <div className="grid gap-10 md:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl 
              border border-white/10 hover:border-amber-400/40 
              hover:shadow-amber-400/30 transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Price Badge */}
              <div className="absolute -top-5 right-6 px-4 py-2 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-sm font-bold rounded-full shadow-lg">
                {pkg.price}
              </div>

              <h3
                className={`${meriendaFont.className} text-2xl font-bold mb-4 text-amber-400`}
              >
                {pkg.name}
              </h3>

              <ul className="space-y-3 text-gray-200 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <CheckCircle2 className="text-yellow-400 w-5 h-5" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-amber-400 to-yellow-500 text-black font-semibold shadow-lg hover:opacity-90 hover:shadow-amber-400/50 transition-all"
                onClick={() => router.push("/application")}
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
