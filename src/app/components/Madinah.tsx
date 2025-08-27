"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardContent } from "../../components/ui/card";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });

// Reusable fadeInUp wrapper
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const FadeInUp: React.FC<{ children: React.ReactNode; delay?: number }> = ({
  children,
  delay = 0,
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.2 }}
    variants={fadeInUp}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default function MadinahPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div className="relative w-full h-full">
          <Image
            src="/madinah1.png"
            alt="Madinah Background"
            fill
            className="object-cover object-center opacity-90"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      </div>

      {/* Hero Section */}
      <section className="text-center py-2 px-6">
        <FadeInUp>
          <h1
            className={`${marcellus.className} text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 via-yellow-200 to-green-400 bg-clip-text text-transparent drop-shadow-lg`}
          >
            Welcome to Madinah al-Munawwarah
          </h1>
        </FadeInUp>
        <FadeInUp delay={0.3}>
          <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-200">
            The radiant city of the Prophet ﷺ — a sanctuary of peace, mercy, and light. 
            Madinah holds a special place in the hearts of all Muslims, being the home 
            of the Prophet ﷺ and his companions, and the location of many sacred sites.
          </p>
        </FadeInUp>
      </section>

      {/* History & Virtues */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
            Virtues of Madinah
          </h2>
        </FadeInUp>
        <FadeInUp delay={0.2}>
          <p className="text-lg text-gray-200 leading-relaxed mb-6">
            Madinah was chosen by Allah ﷻ as the city of His Messenger ﷺ. 
            The Prophet ﷺ said: <em>“Madinah is better for them if they only knew.”</em> 
            It is a place where faith is renewed, hearts find peace, and the blessings 
            of worship are multiplied.
          </p>
        </FadeInUp>
        <FadeInUp delay={0.4}>
          <ul className="list-disc list-inside space-y-3 text-gray-200">
            <li>The second holiest city after Makkah.</li>
            <li>Home of Masjid an-Nabawi — the Prophet’s Mosque ﷺ.</li>
            <li>Praying once in Masjid an-Nabawi equals 1000 prayers elsewhere (except Makkah).</li>
            <li>Contains Rawdah, a “garden from the gardens of Paradise”.</li>
          </ul>
        </FadeInUp>
      </section>

      {/* Sacred Maqamat */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <FadeInUp>
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">
            Sacred Maqamat to Visit
          </h2>
        </FadeInUp>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            {
              title: "Masjid an-Nabawi",
              img: "/masjidenabvi.jpg",
              desc: "The Prophet’s Mosque ﷺ, one of the holiest mosques in Islam. Millions pray here daily."
            },
            {
              title: "Riyadh ul-Jannah",
              img: "/riyazuljannah.jpg",
              desc: "Known as a Garden of Paradise, located inside Masjid an-Nabawi. Praying here is a blessing."
            },
            {
              title: "Uhud Mountain",
              img: "/mountain.jpg",
              desc: "Historic site of the Battle of Uhud, where great sacrifices were made by the companions."
            },
            {
              title: "Quba Mosque",
              img: "/qubamasjid.jpg",
              desc: "The first mosque built in Islam by Prophet Muhammad ﷺ. Praying here equals one Umrah."
            },
            {
              title: "Masjid Qiblatain",
              img: "/qiblatain.jpg",
              desc: "The mosque of the two Qiblas, where the direction of prayer was changed from Jerusalem to Makkah."
            },
            {
              title: "Jannat al-Baqi",
              img: "/jannat.jpg",
              desc: "The blessed graveyard of Madinah where many companions and family of the Prophet ﷺ are buried."
            }
          ].map((place, i) => (
            <FadeInUp key={i} delay={i * 0.2}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden rounded-2xl shadow-xl bg-white/10 backdrop-blur-lg border border-green-400/30 hover:shadow-green-400/40"
              >
                <Image
                  src={place.img}
                  alt={place.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-64 md:h-72"
                />
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold text-green-300 mb-3">
                    {place.title}
                  </h3>
                  <p className="text-base text-gray-200 leading-relaxed">{place.desc}</p>
                </CardContent>
              </motion.div>
            </FadeInUp>
          ))}
        </div>
      </section>
    </div>
  );
}
