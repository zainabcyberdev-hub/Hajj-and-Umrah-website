"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Fixed Background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/about.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black/95" />
      </div>

      {/* Floating Geometric Pattern Overlay */}
      <div className="absolute inset-0 -z-0 opacity-10 pointer-events-none bg-[url('/pattern.png')] bg-repeat" />

      {/* Hero Section */}
      <section className="relative z-30 text-center py-32 md:py-40">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${merienda.className} text-5xl md:text-7xl font-bold 
            text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
            drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]`}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-8 max-w-3xl mx-auto text-xl md:text-2xl text-gray-300 leading-relaxed"
        >
          Since 2019, we’ve been committed to creating meaningful, spiritually
          enriching journeys to the holy lands – blending tradition with innovation.
        </motion.p>
      </section>

      {/* Section Divider */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        className="h-[2px] w-3/4 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent mb-16"
      />

      {/* Our Story */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-12`}
        >
          Our Story
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
          Founded in 2019 with a simple mission of helping local communities, we
          have now grown into a trusted name serving thousands worldwide. Our
          journey is a reflection of sincerity, dedication, and the blessings of Allah.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
        {[
          {
            title: "Our Mission",
            text: "To facilitate authentic and meaningful pilgrimage experiences through trusted partnerships and complete support.",
          },
          {
            title: "Our Vision",
            text: "To become the world’s leading Hajj & Umrah platform, connecting millions with their spiritual aspirations.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ rotateY: 8, scale: 1.03 }}
            transition={{ duration: 0.7 }}
            className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-yellow-400/30 shadow-2xl transform-gpu"
          >
            <h2
              className={`${merienda.className} text-3xl font-bold text-yellow-300`}
            >
              {item.title}
            </h2>
            <p className="text-gray-200 mt-5 leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-yellow-300 mb-16`}
        >
          Why Choose Us?
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-12">
          {[
            {
              title: "Experienced Team",
              desc: "Years of expertise guiding pilgrims with care and sincerity.",
            },
            {
              title: "Comprehensive Packages",
              desc: "All-in-one services tailored for every pilgrim’s needs.",
            },
            {
              title: "24/7 Support",
              desc: "Dedicated assistance throughout your sacred journey.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, rotateX: 4 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-10 rounded-3xl bg-white/10 backdrop-blur-lg border border-yellow-400/40 shadow-lg"
            >
              <h3
                className={`${merienda.className} text-2xl font-bold text-yellow-300`}
              >
                {item.title}
              </h3>
              <p className="text-gray-200 mt-4">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-20`}
        >
          Our Journey So Far
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-12 text-center">
          {[
            { number: "2019", label: "Founded" },
            { number: "5,000+", label: "Pilgrims Served" },
            { number: "20+", label: "Trusted Partners" },
            { number: "15+", label: "Global Destinations" },
          ].map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.08, rotateY: 6 }}
              className="p-8 rounded-3xl bg-white/10 backdrop-blur-lg border border-yellow-400/30 shadow-lg"
            >
              <h3
                className={`${merienda.className} text-4xl font-bold text-yellow-300`}
              >
                {milestone.number}
              </h3>
              <p className="text-gray-200 mt-3">{milestone.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Dua */}
      <section className="relative z-10 text-center py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${merienda.className} text-3xl md:text-4xl font-bold text-yellow-300`}
        >
          May Allah Accept Your Journey
        </motion.h2>
        <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto mt-8 leading-relaxed italic">
          “O Allah, make this pilgrimage safe, blessed, and accepted, and return
          us forgiven with hearts full of light.”
        </p>
      </section>
    </div>
  );
}
