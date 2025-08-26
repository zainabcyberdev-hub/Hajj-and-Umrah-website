"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { CardContent } from "../../components/ui/card";
import { Inter, Marcellus } from "next/font/google";

const marcellus = Marcellus({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

const fadeInUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };

export default function MadinahPage() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Background Image */}
      <div className="fixed inset-0 -z-10">
        <div className="relative w-full h-full">
          {/* apna downloaded bg image daal lena */}
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
      <section className="text-center py-28 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-300 via-yellow-200 to-green-400 bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to Madinah al-Munawwarah
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-gray-200"
        >
          The radiant city of the Prophet ﷺ — a sanctuary of peace, mercy, and light. 
          Madinah holds a special place in the hearts of all Muslims, being the home 
          of the Prophet ﷺ and his companions, and the location of many sacred sites.
        </motion.p>
      </section>

      {/* History & Virtues */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">Virtues of Madinah</h2>
        <p className="text-lg text-gray-200 leading-relaxed mb-6">
          Madinah was chosen by Allah ﷻ as the city of His Messenger ﷺ. 
          The Prophet ﷺ said: <em>“Madinah is better for them if they only knew.”</em> 
          It is a place where faith is renewed, hearts find peace, and the blessings 
          of worship are multiplied.
        </p>
        <ul className="list-disc list-inside space-y-3 text-gray-200">
          <li>The second holiest city after Makkah.</li>
          <li>Home of Masjid an-Nabawi — the Prophet’s Mosque ﷺ.</li>
          <li>Praying once in Masjid an-Nabawi equals 1000 prayers elsewhere (except Makkah).</li>
          <li>Contains Rawdah, a “garden from the gardens of Paradise”.</li>
        </ul>
      </section>

      {/* Sacred Maqamat */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">
          Sacred Maqamat to Visit
        </h2>
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
            <motion.div
              key={i}
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
          ))}
        </div>
      </section>

      {/* Duas */}
      <section className="py-20 px-6 bg-black/60">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-300">
          Duas in Madinah
        </h2>
        <div className="space-y-10 max-w-3xl mx-auto text-center">
          <div>
            <p className="font-arabic text-3xl md:text-4xl mb-2 text-green-300">
              اللّهُمَّ صَلِّ عَلَى مُحَمَّدٍ
            </p>
            <p className="italic text-gray-200">O Allah, send blessings upon Muhammad ﷺ</p>
          </div>
          <div>
            <p className="font-arabic text-3xl md:text-4xl mb-2 text-green-300">
              اَلسَّلاَمُ عَلَيْكَ يَا رَسُوْلَ الله
            </p>
            <p className="italic text-gray-200">Peace be upon you, O Messenger of Allah ﷺ</p>
          </div>
          <div>
            <p className="font-arabic text-3xl md:text-4xl mb-2 text-green-300">
              اَللَّهُمَّ اجعلني مِنْ زُوَّارِهِ
            </p>
            <p className="italic text-gray-200">O Allah, make me among those who visit him ﷺ</p>
          </div>
        </div>
      </section>

      {/* Etiquettes */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-300">
          Etiquettes of Visiting Madinah
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-gray-200">
          <li>Maintain utmost respect and humility inside Masjid an-Nabawi.</li>
          <li>Offer Salam at Rawdah and the grave of Prophet Muhammad ﷺ.</li>
          <li>Spend time in worship, dhikr, and recitation of Qur&apos;an.</li>
          <li>Avoid disturbing others with noise or rushing.</li>
          <li>Dress modestly and follow the etiquette of the Haram.</li>
        </ul>
      </section>

      {/* Things to Do */}
      <section className="py-20 px-6 bg-black/70">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-300">
          Things to Do in Madinah
        </h2>
        <div className="grid md:grid-cols-2 gap-8 text-lg text-gray-200 leading-relaxed">
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-3">Spiritual</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Pray in Masjid an-Nabawi as much as possible.</li>
              <li>Visit Rawdah and make du&apos;a with sincerity.</li>
              <li>Send abundant salutations upon the Prophet ﷺ.</li>
              <li>Perform voluntary fasts and prayers in the blessed city.</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-green-300 mb-3">Ziyarat</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Visit Quba, Qiblatain, and the graves of Uhud martyrs.</li>
              <li>Visit Masjid al-Ghamama and Masjid al-Jum’ah.</li>
              <li>Pay respects at Jannat al-Baqi cemetery.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Travel Tips */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-yellow-300">
          Travel Tips
        </h2>
        <ul className="list-disc list-inside space-y-4 text-lg leading-relaxed text-gray-200">
          <li>Best times to visit: after Fajr or before Isha (less crowded).</li>
          <li>Carry a prayer mat and small Qur&apos;an for personal use.</li>
          <li>Respect local customs and dress modestly.</li>
          <li>Stay hydrated and avoid midday sun during summer.</li>
          <li>Plan visits to maqamat with a group or guide.</li>
        </ul>
      </section>

      {/* Closing Section */}
      <section className="py-20 text-center bg-black/80">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-300">
          Farewell, O Madinah
        </h2>
        <p className="max-w-2xl mx-auto text-gray-200 text-lg leading-relaxed">
          Leaving Madinah is always difficult for a believer. May Allah ﷻ grant 
          us repeated visits to this radiant city and allow us to drink from the 
          blessed fountain of Al-Kawthar by the hand of our beloved Prophet ﷺ. 
          آمين
        </p>
      </section>
      
      {/* Submit Application Section */}
      <section id="application" className="py-24 container mx-auto px-6 text-left">
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.8 }}
          className={`${marcellus.className} text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-yellow-400 via-orange-300 to-yellow-500 bg-clip-text text-transparent`}
        >
          Embark on Your Sacred Journey to Makkah
        </motion.h1>
        <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl space-y-6 text-gray-300">
          <p>
            To apply for your pilgrimage journey, please follow the instructions below. Our team
            will review your application and get in touch with you.
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>📧 Send your details via email: <span className="text-yellow-400">info@yourdomain.com</span></li>
            <li>📞 Contact our helpline: <span className="text-yellow-400">+92 300 1234567</span></li>
            <li>🏢 Visit our office: <span className="text-yellow-400">Lahore, Pakistan</span></li>
            <li>📝 Attach your CNIC, Passport copy, and recent photographs.</li>
          </ul>
          <p className="text-sm text-yellow-400">
            Note: Applications are processed on a first-come, first-serve basis. Ensure that all
            details are accurate to avoid delays.
          </p>
        </div>
      </section>
    </div>
  );
}
