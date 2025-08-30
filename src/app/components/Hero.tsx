"use client";
import { Button } from "../../components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Merienda } from "next/font/google";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      instanceRef.current?.next();
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [instanceRef]);

  const images = [
    { src: "/background1.jpg", alt: "Hajj Image 1" },
    { src: "/background2.jpg", alt: "Hajj Image 2" },
    { src: "/background3.jpg", alt: "Hajj Image 3" },
  ];

  return (
    <section
      className={`${merienda.className} relative min-h-[75vh] lg:min-h-[80vh] overflow-hidden flex items-center`}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/background1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="space-y-8 text-center lg:text-left text-white"
          >
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-xs sm:text-sm">
              <Star className="h-4 w-4 text-amber-400" />
              <span>Official Hajj & Umrah Platform</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Begin Your Sacred{" "}
                <span className="block bg-gradient-to-r from-amber-400 to-yellow-200 bg-clip-text text-transparent">
                  Journey of a Lifetime
                </span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Plan, book, and embark on your spiritual journey to Makkah and
                Madinah with trusted guidance, modern tools, and seamless
                services designed to support every pilgrim.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/application">
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
          </motion.div>

          {/* Right Content - Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center lg:items-end"
          >
            <div
              ref={sliderRef}
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
              className="keen-slider rounded-2xl overflow-hidden shadow-xl w-full max-w-md sm:max-w-lg lg:max-w-full"
            >
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="keen-slider__slide relative h-56 sm:h-72 md:h-80 lg:h-[350px]"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover rounded-2xl"
                    priority
                  />
                </div>
              ))}
            </div>

            {/* Progress Indicators */}
            <div className="flex gap-2 mt-4">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className="relative w-10 h-1 bg-white/30 rounded-full overflow-hidden"
                >
                  <div
                    className={`absolute left-0 top-0 h-full bg-amber-400 transition-all duration-[4000ms] ${
                      currentSlide === idx ? "w-full" : "w-0"
                    }`}
                  ></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
