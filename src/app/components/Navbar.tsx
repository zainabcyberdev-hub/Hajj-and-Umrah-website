"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";
// import LanguageSwitcher from "./Translator";

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
    <header className="sticky top-0 z-50 backdrop-blur-lg">
      {/* Topbar */}
      <div className="bg-slate-900/70 backdrop-blur-md text-white text-sm py-2 px-4 md:px-6 flex flex-wrap justify-between items-center gap-2 md:gap-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3 md:gap-6 w-full md:w-auto justify-center md:justify-start text-center md:text-left">
          <Link href="/contact" className="hover:text-amber-400">
            Contact Us
          </Link>
          <span className="block">phone: +966920002814</span>
        </div>
        
</div>


      

      {/* Main Navbar */}
      <div className="bg-gradient-to-r from-sky-950/80 via-sky-900/70 to-slate-800/60 backdrop-blur-md text-white shadow-md">
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 md:space-x-3">
            <Logo />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-all text-base lg:text-lg tracking-wide ${
                  isActive(link.href)
                    ? "text-amber-400 border-b-2 border-amber-400 pb-1"
                    : "hover:text-amber-300"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden md:flex items-center">
            <button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-4 py-2 md:px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition text-sm md:text-base">
              Saudi eVisa
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-slate-900/90 backdrop-blur-md text-white px-6 py-6 shadow-inner"
            >
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`transition-colors text-base ${
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
                <button className="mt-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-white px-5 py-2 w-full rounded-full shadow-md hover:shadow-lg hover:scale-105 transition text-sm">
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
