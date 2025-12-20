import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const projects = [
  { id: 1, title: "S. Florida", subtitle: "High Rise Luxe Condo", category: "Residential Construction", location: "S. Florida", image: "https://mcdesign.bio/assets/miami-beach-cover-BhM84cOz.webp" },
  { id: 2, title: "High Alpine Mtn.", subtitle: "Ranch Luxe Retreat", category: "Residential Construction", location: "Montana", image: "https://mcdesign.bio/assets/alpine-ranch-cover-BjXjWziU.webp" },
  { id: 3, title: "Syracuse House", subtitle: "N. Utah Craftsman Estate", category: "Design Build", location: "N. Utah", image: "https://mcdesign.bio/assets/syracuse-1-s4u68PjR.webp" },
  { id: 4, title: "Mtn. Mid-Rise Luxe", subtitle: "Condo", category: "Residential Construction", location: "Montana", image: "https://mcdesign.bio/assets/montana-cover-B0CUOXQL.webp" },
  { id: 5, title: "Ultra Luxe Private Club", subtitle: "Resort Pool", category: "Hospitality", location: "SE Texas", image: "https://mcdesign.bio/assets/pool-design-1-C5ZyjJVV.webp" },
  { id: 6, title: "South Coast Renovation", subtitle: "Complete Remodel", category: "Design Build", location: "Big Sur, CA", image: "https://mcdesign.bio/assets/southcoast-cover-BXExeqou.webp" },
  { id: 7, title: "Carmel Valley New", subtitle: "Custom Residence", category: "Design Build", location: "Carmel Valley, CA", image: "https://mcdesign.bio/assets/carmel-valley-new-cover-kkdCGJ0U.webp" },
  { id: 8, title: "North Florida Renovation", subtitle: "Addition", category: "Residential Construction", location: "N. Florida", image: "https://mcdesign.bio/assets/north-florida-14-C6__PXWr.webp" },
  { id: 9, title: "Abaco Luxe Boat House", subtitle: "Construction", category: "Residential Construction", location: "Abaco, Bahamas", image: "https://mcdesign.bio/assets/abaco-luxe-boathouse-cover-Bq2BTjrn.webp" },
  { id: 10, title: "Carmel Forest to Ocean View", subtitle: "Custom Addition", category: "Residential Construction", location: "Carmel By the Sea, CA", image: "https://mcdesign.bio/assets/carmel-2-cover-E-8IMxc2.webp" },
  { id: 11, title: "Coastal Mountain Residence", subtitle: "Civil Site Work", category: "Civil", location: "Big Sur, CA", image: "https://mcdesign.bio/assets/bigsur-cover-UImfKzx4.webp" },
  { id: 12, title: "Carmel Knolls", subtitle: "More Than Lipstick on an Old Lady!", category: "Civil", location: "Carmel, CA", image: "https://mcdesign.bio/assets/carmel-knolls-cover-BoIPnL8T.webp" },
  { id: 13, title: "Coastal Restoration", subtitle: "Erosion Repair", category: "Civil", location: "Monterey Peninsula, CA", image: "https://mcdesign.bio/assets/coastal-restoration-cover-Ckm2mqOo.webp" },
  { id: 14, title: "Civil Engineering", subtitle: "Infrastructure Projects", category: "Civil", location: "CA, TX, NM, CO, MT", image: "https://mcdesign.bio/assets/civil-cover-EhzLxEls.webp" },
  { id: 15, title: "Beachfront Estate", subtitle: "Residence", category: "Residential Development", location: "Abaco, Bahamas", image: "https://mcdesign.bio/assets/beachfront-1-Ch1qoadh.webp" },
  { id: 16, title: "Development Civil", subtitle: "Infrastructure", category: "Residential Development", location: "Various", image: "https://mcdesign.bio/assets/development-1-NJfqkaXp.webp" },
  { id: 17, title: "Carmel Highlands", subtitle: "New Construction", category: "Design Build", location: "Carmel Highlands, CA", image: "https://mcdesign.bio/assets/carmel-highlands-cover-CNkzEKjJ.webp" },
  { id: 18, title: "Pacific Grove", subtitle: "Renovation", category: "Design Build", location: "Pacific Grove, CA", image: "https://mcdesign.bio/assets/pacific-grove-cover-CVE0R4Jw.webp" },
  { id: 19, title: "Pebble Beach", subtitle: "Estate", category: "Residential Construction", location: "Pebble Beach, CA", image: "https://mcdesign.bio/assets/pebble-beach-cover-DxZMrKlx.webp" },
];

const categories = ["All", "Residential Construction", "Design Build", "Civil", "Hospitality", "Residential Development"];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px]">
        <img 
          src="https://mcdesign.bio/assets/miami-beach-cover-BhM84cOz.webp" 
          alt="Portfolio" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/60" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-primary tracking-[0.3em] uppercase text-sm mb-4">Our Work</p>
            <h1 className="text-5xl md:text-7xl font-serif text-cream mb-6">Portfolio</h1>
            <div className="w-20 h-1 bg-primary mx-auto mb-6" />
            <p className="text-cream/80 max-w-2xl mx-auto px-6">
              A curated selection of residential, commercial, and hospitality projects showcasing 37 years of design excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-charcoal py-8">
        <div className="container mx-auto px-6 flex justify-center gap-16">
          <div className="text-center">
            <p className="text-4xl font-serif text-primary">19</p>
            <p className="text-cream/60 text-sm uppercase tracking-wider">Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-serif text-primary">37</p>
            <p className="text-cream/60 text-sm uppercase tracking-wider">Years</p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-cream py-8 border-b border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 text-sm tracking-wide transition-all border ${
                  activeFilter === cat
                    ? "bg-charcoal text-cream border-charcoal"
                    : "bg-transparent text-charcoal border-border hover:border-charcoal"
                }`}
              >
                {cat} {cat !== "All" && `(${projects.filter(p => p.category === cat).length})`}
                {cat === "All" && ` (${projects.length})`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group relative aspect-[4/3] overflow-hidden cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-primary text-xs tracking-widest uppercase mb-1">{project.category}</p>
                  <h3 className="text-xl font-serif text-cream group-hover:text-primary transition-colors mb-1">{project.title}</h3>
                  <p className="text-cream/70 text-sm">{project.subtitle}</p>
                  <p className="text-cream/50 text-xs mt-2">{project.location}</p>
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
