"use client";
import { Button } from "../../components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect } from "react";
import Link from "next/link";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
  });

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <section
      className={`${merienda.className} relative min-h-[75vh] lg:min-h-[80vh] 
  bg-gradient-to-br from-sky-900 via-slate-900 to-slate-800 
  overflow-hidden flex items-center`}
    >

      {/* Background Accent */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-amber-400/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-white text-xs sm:text-sm">
              <Star className="h-4 w-4 text-amber-400" />
              <span>Official Hajj & Umrah Platform</span>
            </div>

            {/* Heading */}
            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Begin Your Sacred{" "}
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                  Journey of a Lifetime
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Plan, book, and embark on your spiritual journey to Makkah and
                Madinah with trusted guidance and seamless services.
              </p>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/journey">
        <Button
          size="lg"
          className="bg-gradient-to-r from-amber-500 to-yellow-600 text-white 
          shadow-lg hover:opacity-90 group 
          w-full sm:w-auto sm:px-6 md:px-8 transition-all duration-300"
        >
          Start Your Journey
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>

      {/* Outline Button */}
      <Link href="/learn-more">
        <Button
          size="lg"
          variant="outline"
          className="
          border border-white 
          text-white 
          font-semibold 
          px-6 py-2 
          rounded-full 
          transition-all 
          duration-300 
          hover:text-black 
          hover:bg-white 
          hover:shadow-lg 
          hover:scale-105
          active:scale-95
          w-full sm:w-auto
        "
        >
          Learn More
        </Button>
      </Link>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">
                  2M+
                </div>
                <div className="text-sm text-white/80">Pilgrims Served</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">
                  50+
                </div>
                <div className="text-sm text-white/80">Countries</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl font-bold text-amber-400">
                  24/7
                </div>
                <div className="text-sm text-white/80">Support</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div
              ref={sliderRef}
              className="keen-slider rounded-2xl overflow-hidden shadow-xl w-full max-w-md sm:max-w-lg lg:max-w-full"
            >
              <div className="keen-slider__slide">
                <img
                  src="/background1.jpg"
                  alt="Hajj Image 1"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] object-cover"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/background.svg"
                  alt="Hajj Image 2"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] object-cover"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/background2.jpg"
                  alt="Hajj Image 3"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] object-cover"
                />
              </div>
              <div className="keen-slider__slide">
                <img
                  src="/background3.jpg"
                  alt="Hajj Image 4"
                  className="w-full h-56 sm:h-72 md:h-80 lg:h-[350px] object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
