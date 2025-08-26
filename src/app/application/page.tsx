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

type Package = { id: number; title: string; price: string; duration: string };
type Message = { type: "success" | "error"; text: string };

export default function HajjLandingPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPkgId, setSelectedPkgId] = useState<number | null>(null);

  // Form state in one object
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    passport: "",
    travelers: 1,
    travelDate: "",
    departureCity: "",
    specialRequest: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<Message | null>(null);

  const defaultPackages: Package[] = [
    { id: 1, title: "Luxury Package", price: "$5000", duration: "15 Days" },
    { id: 2, title: "Economy Package", price: "$2500", duration: "10 Days" },
    { id: 3, title: "Family Package", price: "$8000", duration: "20 Days" },
    { id: 4, title: "Group Package", price: "$2000", duration: "12 Days" },
  ];

  // Fetch packages
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

  // Handle form change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "travelers" ? Number(value) : value,
    }));
  };

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!form.name || !form.email || !form.phone || !form.passport || !selectedPkgId) {
      setMessage({ type: "error", text: "Please fill all required fields." });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, packageId: selectedPkgId }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: data.message || "Booking saved successfully!" });
        // reset form
        setForm({
          name: "",
          email: "",
          phone: "",
          passport: "",
          travelers: 1,
          travelDate: "",
          departureCity: "",
          specialRequest: "",
        });
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
              name="packageId"
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

            <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input name="passport" value={form.passport} onChange={handleChange} placeholder="Passport Number" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input type="number" min="1" name="travelers" value={form.travelers} onChange={handleChange} placeholder="Number of Travelers" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <input type="date" name="travelDate" value={form.travelDate} onChange={handleChange} className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2 text-gray-400" />
            <input name="departureCity" value={form.departureCity} onChange={handleChange} placeholder="Departure City" className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />
            <textarea name="specialRequest" value={form.specialRequest} onChange={handleChange} placeholder="Special Requests (optional)" rows={3} className="w-full bg-black/80 border border-yellow-400/30 rounded-md p-2" />

            {message && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={`p-3 rounded-md text-sm ${message.type === "success" ? "bg-green-800" : "bg-red-800"}`}>
                {message.text}
              </motion.div>
            )}

            <Button type="submit" disabled={submitting} className="w-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black rounded-full">
              {submitting ? "Submitting..." : "Confirm Booking"}
            </Button>
          </form>
        </motion.div>

        {/* Info Section */}
        <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="space-y-8">
          <InfoItem icon={<Shield className="h-10 w-10 text-amber-400" />} title="Secure & Verified" text="Your data is fully encrypted and processed through official channels." />
          <InfoItem icon={<Star className="h-10 w-10 text-amber-400" />} title="Luxury Experience" text="Premium support and hassle-free application process designed for you." />
          <InfoItem icon={<Globe2 className="h-10 w-10 text-amber-400" />} title="Worldwide Access" text="Applications accepted from over 50+ countries across the globe." />
          <InfoItem icon={<CheckCircle2 className="h-10 w-10 text-amber-400" />} title="Fast Processing" text="Receive confirmation updates and visa status instantly." />
        </motion.div>
      </div>
    </section>
  );
}

function InfoItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex items-start gap-4">
      {icon}
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-white/70">{text}</p>
      </div>
    </div>
  );
}
