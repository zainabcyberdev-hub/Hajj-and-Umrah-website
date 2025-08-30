import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden text-sm">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-16 left-6 w-40 h-40 bg-amber-400/30 rounded-full blur-[90px]" />
        <div className="absolute bottom-0 right-10 w-72 h-72 bg-yellow-500/10 rounded-full blur-[120px]" />
      </div>

      {/* Glass Container */}
      <div className="relative backdrop-blur-xl bg-gradient-to-br from-slate-900/95 via-sky-800/85 to-slate-900/95 border-t border-amber-400/20 shadow-[0_0_30px_rgba(255,193,7,0.08)]">
        <div className="container mx-auto px-4 py-10 md:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Logo / About */}
            <div className="space-y-4">
              <div className="flex items-center text-white space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md">
                  H
                </div>
                <span className="text-lg font-bold tracking-wide">
                  Hajj & Umrah
                </span>
              </div>
              <p className="text-white/70 leading-relaxed text-sm">
                Your trusted companion for planning, booking, and experiencing
                the sacred journey to Makkah & Madinah.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-2">
                {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                  <Button
                    key={i}
                    variant="ghost"
                    size="icon"
                    className="bg-white/5 hover:bg-amber-400/30 text-white/70 hover:text-amber-300 rounded-full transition hover:scale-110"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-base font-bold text-amber-400 mb-4">
                Services
              </h3>
              <ul className="space-y-2 text-sm">
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
                      className="text-white/70 hover:text-amber-400 transition-all hover:pl-1 block"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-base font-bold text-amber-400 mb-4">
                Contact
              </h3>
              <div className="space-y-3 text-white/80 text-sm">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-amber-400" />
                  <span>+966 12 345 6789</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-amber-400" />
                  <span>info@hajj-umrah.sa</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-amber-400" />
                  <span>Riyadh, Saudi Arabia</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-base font-bold text-amber-400 mb-4">
                Subscribe
              </h3>
              <div className="space-y-3">
                <p className="text-white/70 text-sm">
                  Get latest updates and offers.
                </p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <Input
                    placeholder="Your email"
                    className="bg-white/10 border border-amber-400/30 text-white placeholder:text-white/50 rounded-full backdrop-blur-md focus:ring-2 focus:ring-amber-400 text-sm"
                  />
                  <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white rounded-full px-4 py-2 text-sm hover:scale-105 transition">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-4">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
              <p>© 2024 Hajj & Umrah. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link
                  href="/privacy"
                  className="hover:text-amber-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms"
                  className="hover:text-amber-400 transition-colors"
                >
                  Terms of Use
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
