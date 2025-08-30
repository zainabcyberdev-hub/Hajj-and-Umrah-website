"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Ziyaarah", href: "/umrah-ziyaarah" },
    { name: "Hajj & Umrah", href: "/hajj" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* 🔹 Announcement Bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-black via-blue-950 to-green-950 text-white text-xs sm:text-sm font-medium shadow-md">
        <motion.div
          className="flex whitespace-nowrap gap-12 py-2 px-4"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          <span>
            ✨ Welcome to <strong>Hajj & Umrah</strong> — Your trusted partner
            for sacred journeys.
          </span>
          <span>
            📌 Book your <strong>2024 Hajj & Umrah Packages</strong> today!
          </span>
          <span>
            📞 Call us anytime: <strong>+966 920002814</strong>
          </span>
          <span>
            🕋 Guided tours of <strong>Makkah & Madinah</strong> available.
          </span>
        </motion.div>
      </div>

      {/* 🔹 Navbar */}
      <div className="bg-gradient-to-r from-sky-950/80 via-sky-900/60 to-slate-800/60 backdrop-blur-md text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all text-sm lg:text-base xl:text-lg tracking-wide ${
                  isActive(link.href)
                    ? "text-amber-400 border-b-2 border-amber-400 pb-1"
                    : "hover:text-amber-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 sm:px-5 lg:px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition text-xs sm:text-sm md:text-base">
              Saudi eVisa
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-7 w-7" />
            ) : (
              <Menu className="h-7 w-7" />
            )}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900/95 backdrop-blur-md text-white px-6 py-6 shadow-inner"
            >
              <nav className="flex flex-col space-y-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors text-base sm:text-lg ${
                      isActive(link.href)
                        ? "text-amber-400 font-semibold"
                        : "hover:text-amber-300"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Mobile CTA Button */}
                <button className="mt-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2 w-full rounded-full shadow-md hover:shadow-lg hover:scale-105 transition text-sm sm:text-base">
                  Saudi eVisa
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
