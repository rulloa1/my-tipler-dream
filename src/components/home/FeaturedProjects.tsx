import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "Coastal Modern Estate",
    category: "New Construction",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
  },
  {
    id: 2,
    title: "Urban Loft Renovation",
    category: "Renovation",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: 3,
    title: "Mountain Retreat",
    category: "Custom Home",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80",
  },
  {
    id: 4,
    title: "Mediterranean Villa",
    category: "Luxury Estate",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <div className="animate-slide-in-left">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Our Work</p>
            <h2 className="text-4xl md:text-5xl font-serif text-charcoal">Featured Projects</h2>
          </div>
          <Link to="/portfolio" className="animate-slide-in-right">
            <Button variant="outline" className="border-charcoal text-charcoal hover:bg-charcoal hover:text-cream">
              View All Projects
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to={`/portfolio#project-${project.id}`}
              className="group relative aspect-[4/3] overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary text-sm tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-2xl md:text-3xl font-serif text-cream group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>
              <div className="absolute top-6 right-6 w-12 h-12 bg-primary/0 group-hover:bg-primary flex items-center justify-center transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-cream opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
