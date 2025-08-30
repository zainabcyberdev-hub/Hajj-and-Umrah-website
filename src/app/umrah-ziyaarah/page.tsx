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
    image: "/arfat.jpg",
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
    image: "/qubanaisha.png",
  },
  {
    title: "Jannat-ul-Mualla",
    description:
      "A famous cemetery in Makkah where many of the Prophet's family members are buried.",
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
      "A mosque in Makkah known for the acceptance of the Prophet's (PBUH) prayers.",
    image: "/ejabah.png",
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
    <div className="relative min-h-screen text-white bg-black">
    <section className="relative w-full h-[60vh] md:h-[75vh] flex flex-col items-center justify-center text-center overflow-hidden">


  {/* Hero Content */}
  <div className="relative z-10 px-6">
    <motion.h1
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className={`${merienda.className} text-4xl md:text-6xl font-bold 
      text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 drop-shadow-lg`}
    >
      Sacred Maqamat and Ziyaarah
    </motion.h1>

    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="mt-4 max-w-2xl mx-auto text-sm md:text-lg text-gray-200 leading-relaxed"
    >
      Explore the blessed landmarks and sacred sites visited by millions of
      pilgrims, each carrying immense historical and spiritual significance.
    </motion.p>
  </div>
</section>

      {/* 🔹 Maqamat List */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-14 space-y-12">
        {maqamat.map((maqam, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-6 md:gap-8`}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.4 }}
              className="w-full md:w-1/2 overflow-hidden rounded-xl shadow-lg shadow-black/40"
            >
              <div className="relative w-full h-[220px] md:h-[280px] lg:h-[320px]">
                <Image
                  src={maqam.image}
                  alt={maqam.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="rounded-xl object-cover object-center transition-transform duration-700 ease-out hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.div>

            {/* Content */}
            <div
              className="w-full md:w-1/2 p-5 md:p-7 rounded-xl 
              bg-white/5 backdrop-blur-md border border-yellow-400/20 shadow-md 
              transition duration-300 hover:shadow-yellow-400/30 hover:scale-[1.01]"
            >
              <h2
                className={`${merienda.className} text-lg md:text-2xl font-semibold text-yellow-300`}
              >
                {maqam.title}
              </h2>
              <p className="text-sm md:text-base leading-relaxed text-gray-200 mt-2">
                {maqam.description}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Divider */}
        <div className="h-[1px] w-2/3 mx-auto bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-40 mt-8" />
      </div>
    </div>
  );
}
