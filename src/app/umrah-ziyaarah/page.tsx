"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Merienda } from "next/font/google";

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });

const maqamat = [
  {
    title: "The Kaaba",
    description:
      "The Kaaba is the most sacred site in Islam, located in the center of Masjid al-Haram. Muslims around the world face towards it during prayers.",
    image: "/background1.jpg",
  },
  {
    title: "Maqam Ibrahim",
    description:
      "This is the stone on which Prophet Ibrahim (AS) stood while building the Kaaba. It holds deep spiritual value for pilgrims.",
    image: "/maqameibrahim.jpg",
  },
  {
    title: "The Black Stone (Al-Hajar Al-Aswad)",
    description:
      "Placed in one corner of the Kaaba, pilgrims try to touch or kiss it during Tawaf as a Sunnah of Prophet Muhammad (PBUH).",
    image: "/hajraeaswad.jpg",
  },
  {
    title: "The Well of Zamzam",
    description:
      "The blessed well from which water miraculously sprung forth for Hazrat Ismail (AS) and Bibi Hajra (AS). Pilgrims drink from it with devotion.",
    image: "/zamzam.jpg",
  },
  {
    title: "Mina",
    description:
      "A valley where pilgrims stay during Hajj and perform the symbolic stoning of the devil at Jamarat.",
    image: "/mina.jpg",
  },
  {
    title: "Arafat",
    description:
      "The plain of Arafat is where the central rite of Hajj, Wuquf, takes place. It is known as the 'Mount of Mercy'.",
    image: "/arafat.jpg",
  },
  {
    title: "Muzdalifah",
    description:
      "Pilgrims spend the night here after Arafat, collecting pebbles for the ritual stoning in Mina.",
    image: "/muzdalifah.jpg",
  },
  {
    title: "Gar-e-Hira",
    description:
      "The cave where Prophet Muhammad (PBUH) received the first revelation of the Qur’an from Angel Jibreel (AS).",
    image: "/garehira.jpg",
  },
  {
    title: "Masjid E Quba & Masjid Ayesha",
    description: "Historic mosques where pilgrims often wear Ihram for Umrah.",
    image: "/quba.png",
  },
  {
    title: "Jannat-ul-Mualla",
    description:
      "A famous cemetery in Makkah where many of the Prophet’s family members are buried.",
    image: "/jannatUlMualla.jpg",
  },
  {
    title: "Sulah Hudaibiya",
    description:
      "The place where the historic Treaty of Hudaibiya was signed between the Prophet (PBUH) and the Quraysh.",
    image: "/hudaibiah.jpg",
  },
  {
    title: "Masjid Al Ejabah",
    description:
      "A mosque in Makkah known for the acceptance of the Prophet’s (PBUH) prayers.",
    image: "/ejabah.jpg",
  },
  {
    title: "Masjid Jin",
    description:
      "Located in Makkah, this is the place where Prophet Muhammad (PBUH) delivered a sermon to the Jinn.",
    image: "/jin.jpg",
  },
];

export default function MaqamatPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Fixed Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/servicesBack.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 text-center py-20 md:py-32 px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${merienda.className} text-4xl md:text-6xl font-bold 
          text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500
          drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]`}
        >
          Sacred Maqamat and Ziyaarah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-base md:text-xl text-gray-200 leading-relaxed"
        >
          Explore the blessed landmarks and sacred sites visited by millions of
          pilgrims, each carrying immense historical and spiritual significance.
        </motion.p>
      </section>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12 md:py-20 space-y-20">
        {maqamat.map((maqam, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-8 md:gap-14 group`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={maqam.image}
                alt={maqam.title}
                width={650}
                height={450}
                className="rounded-2xl object-cover transform transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Card */}
            <div
              className="w-full md:w-1/2 p-8 rounded-2xl 
              bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg 
              border border-yellow-400/30 shadow-lg 
              transition duration-500 group-hover:shadow-yellow-300/40 group-hover:scale-[1.02]"
            >
              <h2
                className={`${merienda.className} text-2xl md:text-3xl font-bold text-yellow-300`}
              >
                {maqam.title}
              </h2>
              <p className="text-base md:text-lg leading-relaxed text-gray-200 mt-4">
                {maqam.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Divider */}
        <div className="h-[2px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 mt-16" />
      </div>
    </div>
  );
}
