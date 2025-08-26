import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Background Gradient & Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-20 left-10 w-72 h-72 bg-amber-400/40 rounded-full blur-[130px] animate-pulse" />
        <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[160px] animate-spin-slow" />
      </div>

      {/* Glass Container */}
      <div className="relative backdrop-blur-2xl bg-gradient-to-br from-slate-900/90 via-slate-800/80 to-slate-900/90 border-t border-amber-400/20 shadow-[0_0_50px_rgba(255,193,7,0.15)]">
        <div className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16">
            
            {/* Logo / About */}
            <div className="space-y-6">
              <div className="flex items-center  text-white space-x-3 group">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center text-white font-bold text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  H
                </div>
                <span className="text-2xl font-bold tracking-wide group-hover:text-amber-400 transition">
                  Hajj & Umrah
                </span>
              </div>
              <p className="text-white/70 leading-relaxed max-w-xs">
                Trusted companion for planning, booking, and experiencing your sacred journey to Makkah & Madinah.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-3">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="icon"
                    className="bg-white/5 hover:bg-amber-400/30 text-white/70 hover:text-amber-300 rounded-full transition transform hover:scale-125 shadow-md hover:shadow-amber-400/40"
                  >
                    <Icon className="h-5 w-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 relative inline-block after:content-[''] after:block after:h-[2px] after:w-12 after:bg-amber-400 after:mt-2">
                Services
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Hajj Packages", href: "/packages" },
                  { name: "Umrah Packages", href: "/packages" },
                  { name: "Flight Booking", href: "#" },
                  { name: "Hotel Booking", href: "#" },
                  { name: "Transportation", href: "#" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-amber-400 transition-colors hover:pl-2 block duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 relative inline-block after:content-[''] after:block after:h-[2px] after:w-12 after:bg-amber-400 after:mt-2">
                Contact
              </h3>
              <div className="space-y-4 text-white/80">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-400" />
                  <span>+966 12 345 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span>info@hajj-umrah.sa</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-400" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
              </div>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold">Subscribe to Updates</h4>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Your email"
                    className="bg-white/10 border border-amber-400/30 text-white placeholder:text-white/50 rounded-full backdrop-blur-md focus:ring-2 focus:ring-amber-400 transition-all"
                  />
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full px-6 shadow-lg hover:shadow-amber-400/40 transition transform hover:scale-105">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-amber-400 relative inline-block after:content-[''] after:block after:h-[2px] after:w-12 after:bg-amber-400 after:mt-2">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms of Service", href: "/terms" },
                  { name: "FAQs", href: "/faqs" },
                ].map((item, i) => (
                  <li key={i}>
                    <Link
                      href={item.href}
                      className="text-white/70 hover:text-amber-400 transition-colors hover:pl-2 block duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <p>© 2024 Hajj & Umrah. All rights reserved.</p>
              <div className="flex space-x-6">
                <Link href="/privacy" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="hover:text-amber-400 transition-colors">Terms of Use</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
