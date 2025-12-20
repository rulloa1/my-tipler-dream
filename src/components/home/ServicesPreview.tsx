import { Link } from "react-router-dom";
import { Compass, PenTool, HardHat, ClipboardCheck, Shield, Leaf, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Compass,
    title: "Planning",
    description: "Comprehensive site analysis, zoning research, and project feasibility studies to set your project up for success.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Custom architectural design that reflects your unique style, maximizing both aesthetics and functionality.",
  },
  {
    icon: HardHat,
    title: "Construction",
    description: "Expert construction management with skilled craftsmen using premium materials and proven techniques.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Seamless coordination of all project phases, keeping timelines and budgets on track.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous quality control and inspections at every stage to ensure exceptional results.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "Eco-friendly building practices and energy-efficient solutions for a greener future.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="py-24 bg-charcoal text-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">What We Do</p>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">Our Services</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-cream/70 max-w-2xl mx-auto">
            From concept to completion, we offer comprehensive services to bring your vision to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-charcoal-light/50 hover:bg-charcoal-light border border-cream/10 hover:border-primary/30 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <service.icon className="w-12 h-12 text-primary mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-serif mb-4">{service.title}</h3>
              <p className="text-cream/60 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in-up animation-delay-600">
          <Link to="/services">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark">
              Explore All Services
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
