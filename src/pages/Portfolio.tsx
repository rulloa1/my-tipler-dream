import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  { id: 1, title: "Coastal Modern Estate", category: "New Construction", image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" },
  { id: 2, title: "Urban Loft Renovation", category: "Renovation", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" },
  { id: 3, title: "Mountain Retreat", category: "Custom Home", image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80" },
  { id: 4, title: "Mediterranean Villa", category: "Luxury Estate", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" },
  { id: 5, title: "Contemporary Farmhouse", category: "New Construction", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80" },
  { id: 6, title: "Lakefront Luxury", category: "Custom Home", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80" },
];

const Portfolio = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Our Work</p>
            <h1 className="text-5xl md:text-6xl font-serif text-charcoal mb-6">Portfolio</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto">Explore our collection of custom homes, renovations, and luxury estates.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="group relative aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-sm tracking-widest uppercase mb-2">{project.category}</p>
                  <h3 className="text-xl font-serif text-cream group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-gold-dark">
                Start Your Project <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Portfolio;
