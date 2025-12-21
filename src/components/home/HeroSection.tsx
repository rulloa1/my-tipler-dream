import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mcLogo from "@/assets/mc-logo.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-charcoal overflow-hidden">
      <div className="relative h-full flex flex-col items-center justify-center p-8">
        <img 
          src={mcLogo} 
          alt="MC Logo" 
          className="h-40 sm:h-48 w-auto mb-8"
        />
        
        {/* Decorative divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-px bg-primary/40" />
          <div className="w-2 h-2 rotate-45 border border-primary/40" />
          <div className="w-12 h-px bg-primary/40" />
        </div>
        
        <p className="font-inter text-cream/70 text-sm tracking-[0.25em] uppercase mb-8">
          Fine Construction & Design
        </p>
        
        <Link to="/portfolio">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-inter text-sm tracking-wide">
            Open Portfolio
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
