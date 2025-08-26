"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, ShieldCheck, Clock, Users } from "lucide-react";

/* ------------------- Variants ------------------- */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  show: { x: 0, transition: { type: "tween", duration: 0.32 } },
};

export default function HajjLandingPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedPkgId, setSelectedPkgId] = useState<number | null>(null);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [passport, setPassport] = useState("");
  const [travelers, setTravelers] = useState(1);
  const [travelDate, setTravelDate] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [specialRequest, setSpecialRequest] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const defaultPackages = [
    { id: 1, title: "Luxury Package", price: "$5000", duration: "15 Days" },
    { id: 2, title: "Economy Package", price: "$2500", duration: "10 Days" },
    { id: 3, title: "Family Package", price: "$8000", duration: "20 Days" },
    { id: 4, title: "Group Package", price: "$2000", duration: "12 Days" },
  ];

  /* ------------------- Fetch Packages ------------------- */
  useEffect(() => {
    let mounted = true;
    fetch("/api/packages")
      .then((res) => {
        if (!res.ok) throw new Error("no api");
        return res.json();
      })
      .then((data) => {
        if (!mounted) return;
        setPackages(Array.isArray(data) && data.length ? data : defaultPackages);
      })
      .catch(() => {
        if (!mounted) return;
        setPackages(defaultPackages);
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);

  const openBookingDrawer = (pkgId?: number) => {
    if (pkgId) setSelectedPkgId(pkgId);
    setMessage(null);
    setDrawerOpen(true);
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
    setSubmitting(false);
  };

  /* ------------------- Handle Booking ------------------- */
  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!name || !email || !phone || !passport || !selectedPkgId) {
      setMessage({ type: "error", text: "Please fill all required fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          passport,
          travelers,
          travelDate,
          departureCity,
          specialRequest,
          packageId: selectedPkgId,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "Booking saved successfully!" });
        // reset form
        setName("");
        setEmail("");
        setPhone("");
        setPassport("");
        setTravelers(1);
        setTravelDate("");
        setDepartureCity("");
        setSpecialRequest("");
        setSelectedPkgId(null);
      } else {
        setMessage({ type: "error", text: data?.message || "Booking failed. Try again." });
      }
    } catch {
      setMessage({ type: "error", text: "Network error. Try later." });
    } finally {
      setSubmitting(false);
    }
  };

  const selectedPkg = packages.find((p) => p.id === selectedPkgId);

  return (
    <main className="font-sans text-gray-900">
      {/* ---------------- HERO ---------------- */}
      <section className="relative min-h-screen flex items-center justify-center text-center">
        <Image src="/servicesBack.png" alt="Kaaba Background" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/70" />
        <motion.div variants={fadeUp} initial="hidden" animate="show" className="relative z-10 text-white max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Embark on Your{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Sacred Journey
            </span>{" "}
            of Hajj & Umrah
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Trusted guidance, seamless services, and spiritual fulfillment for every pilgrim.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              onClick={() => openBookingDrawer()}
              className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              Book Now
            </Button>

            <Link href="/hajj" className="inline-block">
              <Button
                size="lg"
                variant="outline"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black rounded-full"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ---------------- WHY CHOOSE US ---------------- */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-yellow-400 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, text: "Trusted & Certified Guides" },
              { icon: Clock, text: "24/7 Customer Support" },
              { icon: Users, text: "Thousands of Happy Pilgrims" },
              { icon: Star, text: "15+ Years of Experience" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={cardFade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="bg-black/70 p-6 rounded-xl border border-yellow-400/30 shadow-lg hover:shadow-yellow-500/40 backdrop-blur-md"
              >
                <item.icon className="h-10 w-10 text-yellow-400 mx-auto mb-4" />
                <p className="font-medium text-gray-200">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- BOOKING DRAWER ---------------- */}
      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
              className="fixed inset-0 bg-black z-40"
            />
            <motion.aside
              className="fixed top-0 right-0 h-full w-full md:w-[420px] z-50 bg-black/95 text-white p-6 overflow-auto"
              variants={drawerVariants}
              initial="hidden"
              animate="show"
              exit="hidden"
              aria-modal="true"
              role="dialog"
            >
              <div className="flex justify-between mb-6">
                <h3 className="text-xl font-bold">Book Your Package</h3>
                <button onClick={closeDrawer} aria-label="Close">✕</button>
              </div>

              <form onSubmit={handleSubmitBooking} className="space-y-4">
                <select
                  value={selectedPkgId ?? ""}
                  onChange={(e) => setSelectedPkgId(Number(e.target.value))}
                  className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2 text-white"
                >
                  <option value="">-- choose package --</option>
                  {(packages.length ? packages : defaultPackages).map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.title} — {p.price}
                    </option>
                  ))}
                </select>

                <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />
                <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />
                <input value={passport} onChange={(e) => setPassport(e.target.value)} placeholder="Passport Number" className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />
                <input type="number" min="1" value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} placeholder="Number of Travelers" className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />
                <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2 text-gray-400" />
                <input value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} placeholder="Departure City" className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />
                <textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} placeholder="Special Requests (optional)" rows={3} className="w-full bg-black/70 border border-yellow-400/30 rounded-md p-2" />

                {message && <div className={`p-3 rounded-md ${message.type === "success" ? "bg-green-800" : "bg-red-800"}`}>{message.text}</div>}

                <Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full">
                  {submitting ? "Submitting..." : "Confirm Booking"}
                </Button>
              </form>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    
    </main>
   
    
  );
}
