import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { PremiumButton } from "@/components/ui/PremiumButton";

const heroImages = [
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/miami-beach-cover.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/southcoast-cover.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp",
  "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/alpine-ranch-cover.webp",
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <section className="relative h-screen overflow-hidden bg-charcoal">
      {/* Background Images with Zoom Effect */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={heroImages[currentSlide]}
            alt="Luxury architecture"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal/70" />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-5xl"
        >
          <p className="text-primary tracking-[0.5em] uppercase text-xs mb-6 font-semibold">Master Builder & Designer</p>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-cream mb-8 tracking-tight leading-[0.9]">
            Michael <br />
            <span className="italic font-light">Chandler</span>
          </h1>

          <div className="w-24 h-[1px] bg-gold mx-auto mb-12 opacity-50" />

          {/* Refined Stats Container */}
          <div className="grid grid-cols-2 gap-12 md:gap-32 mb-16 max-w-2xl mx-auto">
            <div className="text-center group">
              <span className="block text-5xl md:text-7xl font-light text-primary leading-none mb-3 group-hover:scale-110 transition-transform duration-500">
                19
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-cream/60 uppercase font-medium">
                Signature Projects
              </span>
            </div>
            <div className="text-center group">
              <span className="block text-5xl md:text-7xl font-light text-primary leading-none mb-3 group-hover:scale-110 transition-transform duration-500">
                37
              </span>
              <span className="block text-[10px] tracking-[0.3em] text-cream/60 uppercase font-medium">
                Years of Legacy
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Mobile Menu - Elegant Full Screen Overlay */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, x: "100%" }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: "100%" }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  className="fixed inset-0 z-[60] bg-charcoal flex flex-col p-12 lg:hidden"
                >
                  <div className="flex justify-between items-center mb-20">
                    <img src={mcLogo} alt="" className="h-8 w-auto" />
                    <button
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="w-12 h-12 border border-white/10 flex items-center justify-center text-cream"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <nav className="flex flex-col gap-10">
                    {navLinks.map((link, idx) => (
                      <motion.div
                        key={link.path}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.1 }}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={cn(
                            "text-4xl font-serif tracking-tight transition-colors",
                            location.pathname === link.path ? "text-primary italic" : "text-cream hover:text-primary"
                          )}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>

                  <div className="mt-auto space-y-6 pt-12 border-t border-white/5">
                    <p className="text-[10px] tracking-widest text-primary uppercase font-bold">Inquiry</p>
                    <a href="tel:+14352377373" className="block text-xl text-cream font-light">(435) 237-7373</a>
                    <a href="mailto:Mike.rcccon@yahoo.com" className="block text-xl text-cream font-light">Mike.rcccon@yahoo.com</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
          );
};

export default Header; Dots */}
          <div className="absolute bottom-12 left-12 z-30 hidden md:flex flex-col gap-4">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className="group flex items-center gap-4"
              >
                <div className={`h-[1px] transition-all duration-500 ${index === currentSlide ? "w-12 bg-primary" : "w-6 bg-cream/20 group-hover:w-12 group-hover:bg-cream/40"}`} />
                <span className={`text-[10px] tracking-widest transition-opacity duration-500 ${index === currentSlide ? "opacity-100 text-primary" : "opacity-0 group-hover:opacity-100 text-cream/40"}`}>
                  0{index + 1}
                </span>
              </button>
            ))}
          </div>

          {/* Arrow Controls - Minimal */}
          <div className="absolute bottom-12 right-12 z-30 flex gap-4">
            <button
              onClick={prevSlide}
              className="w-14 h-14 border border-white/10 flex items-center justify-center text-cream/40 hover:text-primary hover:border-primary transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-14 h-14 border border-white/10 flex items-center justify-center text-cream/40 hover:text-primary hover:border-primary transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
          >
            <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent mx-auto opacity-50" />
          </motion.div>
        </section>
        );
};

        export default HeroSection;
