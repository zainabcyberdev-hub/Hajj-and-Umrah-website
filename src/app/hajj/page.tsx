// app/hajj/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Amiri, Merienda, Marcellus } from "next/font/google";
import MadinahPage from "../components/Madinah";
import MakkahPage from "../components/Makkah";

const amiri = Amiri({
  weight: "400",
  subsets: ["arabic"],
});

const merienda = Merienda({
  weight: "400",
  subsets: ["latin"],
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
});

const hajjSteps = [
  { 
    title: "Ihram & Talbiyah", 
    img: "/ihram.jpg", 
    dua: "لَبَّيْكَ اللَّهُمَّ العُمرةَ وَالحجَّ", 
    translit: "Labbayk Allahumma 'Umratan wa Hajj(an)", 
    translation: "Here I am, O Allah, for Umrah and Hajj.",
    desc: "The intention and state of Ihram marks the beginning of Hajj, accompanied by the recitation of the Talbiyah."
  },
  { 
    title: "Tawaf Dua", 
    img: "/background1.jpg", 
    dua: "بِسْمِ اللَّهِ اللَّهُ أَكْبَرُ وَلِلَّهِ الْحَمْدُ", 
    translit: "Bismillahi Allahu Akbar wa lillahil-hamd", 
    translation: "In the name of Allah, Allah is the Greatest and to Him belongs all praise.",
    desc: "Tawaf is the act of circumambulating the Kaaba seven times, starting from the Black Stone."
  },
  { 
    title: "Sa’ee (Safa-Marwa)", 
    img: "/safa.jpg", 
    dua: "إِنَّ الصَّفَا وَالْمَرْوَةَ مِن شَعَائِرِ اللَّهِ …", 
    translit: "Innaṣ-ṣafaa wal-marwata min sha’a’ir-illaah…", 
    translation: "Indeed, Safa and Marwah are among the symbols of Allah… ",
    desc: "Sa’ee is walking seven times between the hills of Safa and Marwa, commemorating Hajar's search for water."
  },
  { 
    title: "Stoning (Ramy al-Jamarat)", 
    img: "/stonning.jpg", 
    dua: "اللَّهُ أَكْبَرُ", 
    translit: "Allahu Akbar", 
    translation: "Allah is the Greatest.",
    desc: "Pilgrims throw pebbles at the three pillars (Jamarat) in Mina, symbolizing the rejection of evil."
  },
  { 
    title: "Dua at Arafat", 
    img: "/arfat.jpg", 
    dua: "لَا إِلٰهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيْكَ لَهُ…", 
    translit: "La ilaha illallahu wahdahu la sharika lah…", 
    translation: "There is no god but Allah alone, without partner…",
    desc: "Standing at Arafat is the most important part of Hajj, where pilgrims engage in supplication and remembrance."
  },
  { 
    title: "Farewell Tawaf (Tawaf al-Wadaa)", 
    img: "/background.svg", 
    dua: "لَبَّيْكَ اللَّهُمَّ وَلَبَّيْك", 
    translit: "Labbayk Allahumma wa Labbayk", 
    translation: "Here I am, O Allah, here I am (Farewell Tawaf).",
    desc: "The final circumambulation of the Kaaba before leaving Makkah, marking the completion of Hajj."
  },
];

export default function HajjGuidePage() {
  return (
    <div
      className="relative min-h-screen text-white"
      style={{
        backgroundImage: "url('/images/hajj-bg.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-blue-900/70 to-black/80"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 space-y-10">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={`${merienda.className} text-4xl md:text-6xl font-bold text-center text-yellow-300 drop-shadow-[0_0_15px_rgba(250,204,21,0.7)]`}
        >
          Complete Hajj Guide
        </motion.h1>

        <section className="space-y-10">
          <h2
            className={`${marcellus.className} text-2xl font-semibold text-cyan-300 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]`}
          >
            Steps & Duas
          </h2>

          {hajjSteps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid md:grid-cols-2 gap-6 items-center group"
            >
              {/* Image */}
              <Image
                src={step.img}
                alt={step.title}
                width={400}
                height={260}
                className="rounded-xl shadow-lg transform transition duration-500 group-hover:scale-105 group-hover:shadow-yellow-400/50 w-full md:w-[380px] h-auto object-cover"
              />

              {/* Card */}
              <div className="space-y-2 bg-white/10 backdrop-blur-xl p-5 rounded-xl border border-gradient-to-r from-yellow-400 to-green-400 shadow-md transition duration-500 group-hover:shadow-cyan-400/50">
                <h3
                  className={`${marcellus.className} text-lg font-semibold text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.7)]`}
                >
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-gray-200">{step.desc}</p>

                {/* Arabic dua */}
                <p
                  className={`${amiri.className} text-xl text-emerald-300 whitespace-pre-line drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]`}
                >
                  {step.dua}
                </p>

                {/* Transliteration & translation */}
                <p className={`${merienda.className} italic text-cyan-200`}>
                  {step.translit}
                </p>
                <p className={`${merienda.className} italic text-gray-300`}>
                  {step.translation}
                </p>
              </div>
            </motion.div>
          ))}
        </section>

        <MakkahPage />
        <MadinahPage />
      </div>
    </div>
  );
}
