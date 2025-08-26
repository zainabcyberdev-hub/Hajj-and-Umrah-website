"use client";

import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import { Shield, Star, Globe2, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function HajjLandingPage() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    let mounted = true;
    fetch("/api/packages")
      .then((res) => (res.ok ? res.json() : Promise.reject("no api")))
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

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-sky-950 via-slate-900 to-slate-800 text-white">
      <div className="absolute inset-0">
        <img src="/servicesBack.png" alt="Background" className="w-full h-full object-cover opacity-20" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-4xl mx-auto mb-16">
          <h1 className={`${merienda.className} text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight`}>
            Begin Your{" "}
            <span className="bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
              Sacred Application
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed">
            A luxurious and seamless way to apply for your <span className="text-amber-400">Hajj & Umrah visa</span>. Trusted by millions worldwide, backed by 24/7 support.
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-xl mx-auto bg-black/70 p-6 rounded-md mb-16">
          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <select
              value={selectedPkgId ?? ""}
              onChange={(e) => setSelectedPkgId(Number(e.target.value))}
              className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2 text-white"
            >
              <option value="">-- choose package --</option>
              {(packages.length ? packages : defaultPackages).map((p) => (
                <option key={p.id} value={p.id}>
                  {p.title} — {p.price}
                </option>
              ))}
            </select>

            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Full Name" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input value={passport} onChange={(e) => setPassport(e.target.value)} placeholder="Passport Number" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input type="number" min="1" value={travelers} onChange={(e) => setTravelers(Number(e.target.value))} placeholder="Number of Travelers" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input type="date" value={travelDate} onChange={(e) => setTravelDate(e.target.value)} className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2 text-gray-400" />
            <input value={departureCity} onChange={(e) => setDepartureCity(e.target.value)} placeholder="Departure City" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} placeholder="Special Requests (optional)" rows={3} className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />

            {message && (
              <div className={`p-3 rounded-md ${message.type === "success" ? "bg-green-800" : "bg-red-800"}`}>
                {message.text}
              </div>
            )}

            <Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full">
              {submitting ? "Submitting..." : "Confirm Booking"}
            </Button>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
          <div className="flex items-start gap-4">
            <Shield className="h-10 w-10 text-amber-400" />
            <div>
              <h3 className="text-xl font-semibold">Secure & Verified</h3>
              <p className="text-white/70">Your data is fully encrypted and processed through official channels.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Star className="h-10 w-10 text-amber-400" />
            <div>
              <h3 className="text-xl font-semibold">Luxury Experience</h3>
              <p className="text-white/70">Premium support and hassle-free application process designed for you.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Globe2 className="h-10 w-10 text-amber-400" />
            <div>
              <h3 className="text-xl font-semibold">Worldwide Access</h3>
              <p className="text-white/70">Applications accepted from over 50+ countries across the globe.</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-10 w-10 text-amber-400" />
            <div>
              <h3 className="text-xl font-semibold">Fast Processing</h3>
              <p className="text-white/70">Receive confirmation updates and visa status instantly.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
