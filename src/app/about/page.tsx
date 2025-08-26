"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });

export default function AboutPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/aboutBack.jpg"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${merienda.className} text-4xl md:text-6xl font-bold 
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
          drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]`}
        >
          About Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200 leading-relaxed"
        >
          We are dedicated to providing pilgrims with seamless, spiritually
          enriching journeys to the holy lands, combining tradition with
          innovation since 2019.
        </motion.p>
      </section>

      {/* Our Story */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${merienda.className} text-4xl font-bold text-yellow-300 text-center mb-12`}
        >
          Our Story
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-200 leading-relaxed text-center max-w-4xl mx-auto">
          Founded in 2019 with the vision of simplifying the sacred journey, we
          started as a small team assisting local communities. Today, Alhamdulillah,
          we proudly serve thousands of pilgrims across the globe with tailored
          Hajj and Umrah experiences. Our growth is a reflection of trust, dedication,
          and the blessings of Allah.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-400/30 shadow-lg"
        >
          <h2
            className={`${merienda.className} text-3xl font-bold text-yellow-300`}
          >
            Our Mission
          </h2>
          <p className="text-gray-200 mt-4 leading-relaxed">
            To facilitate authentic and meaningful pilgrimage experiences by
            providing comprehensive services, trusted partnerships, and
            unwavering support throughout every step of the sacred journey.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-400/30 shadow-lg"
        >
          <h2
            className={`${merienda.className} text-3xl font-bold text-yellow-300`}
          >
            Our Vision
          </h2>
          <p className="text-gray-200 mt-4 leading-relaxed">
            To be the world&apos;s leading platform for Hajj and Umrah services,
            connecting millions of pilgrims with their spiritual aspirations
            through innovative technology and exceptional service.
          </p>
        </motion.div>
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
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Experienced Team",
              desc: "Years of expertise guiding pilgrims with care and sincerity.",
            },
            {
              title: "Comprehensive Packages",
              desc: "All-in-one services designed to suit every pilgrim&apos;s needs.",
            },
            {
              title: "24/7 Support",
              desc: "Dedicated assistance throughout the spiritual journey.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-yellow-400/40 shadow-lg"
            >
              <h3
                className={`${merienda.className} text-2xl font-bold text-yellow-300`}
              >
                {item.title}
              </h3>
              <p className="text-gray-200 mt-3">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-yellow-300 mb-16`}
        >
          Our Core Values
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Guidance",
              desc: "Providing pilgrims with clarity, support, and trusted direction at every step.",
            },
            {
              title: "Trust",
              desc: "Building long-lasting relationships with transparency, honesty, and integrity.",
            },
            {
              title: "Excellence",
              desc: "Constantly striving to exceed expectations with quality services and innovation.",
            },
          ].map((value, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-lg border border-yellow-400/40 shadow-lg"
            >
              <h3
                className={`${merienda.className} text-2xl font-bold text-yellow-300`}
              >
                {value.title}
              </h3>
              <p className="text-gray-200 mt-3">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Milestones / Achievements */}
      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`${merienda.className} text-4xl md:text-5xl font-bold text-yellow-300 text-center mb-16`}
        >
          Our Journey So Far
        </motion.h2>
        <div className="grid md:grid-cols-4 gap-10 text-center">
          {[
            { number: "2019", label: "Founded" },
            { number: "5,000+", label: "Pilgrims Served" },
            { number: "20+", label: "Trusted Partners" },
            { number: "15+", label: "Global Destinations" },
          ].map((milestone, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-yellow-400/30 shadow-lg"
            >
              <h3
                className={`${merienda.className} text-3xl font-bold text-yellow-300`}
              >
                {milestone.number}
              </h3>
              <p className="text-gray-200 mt-2">{milestone.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Closing Dua */}
      <section className="relative z-10 text-center py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${merienda.className} text-3xl md:text-4xl font-bold text-yellow-300`}
        >
          May Allah Accept Your Journey
        </motion.h2>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mt-6 leading-relaxed">
          “O Allah, make this pilgrimage safe, blessed, and accepted, and return
          us forgiven and with hearts full of light.”
        </p>
      </section>
    </div>
  );
}
