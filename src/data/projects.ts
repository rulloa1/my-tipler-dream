export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Pools",
  "Interior"
];

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  location: string;
  subtitle?: string;
  description?: string;
  gallery?: string[];
}

export const projects: ProjectData[] = [
  {
    id: "pool-design-1",
    title: "Luxury Infinity Pool",
    category: "Pools",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
    location: "Austin, TX",
    description: "A stunning infinity edge pool with custom stone work."
  },
  {
    id: "modern-residential-1",
    title: "Modern Hill Country",
    category: "Residential",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-10.webp",
    location: "West Lake Hills, TX",
    description: "Contemporary residential design blending with nature."
  },
  {
    id: "commercial-spa-1",
    title: "Resort Wellness Center",
    category: "Hospitality",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-15.webp",
    location: "San Antonio, TX",
    description: "A luxury spa and wellness environment for a world-class resort."
  },
  {
    id: "modern-kitchen-1",
    title: "Chef's Dream Kitchen",
    category: "Interior",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-20.webp",
    location: "Dallas, TX",
    description: "A high-end kitchen renovation with professional-grade appliances."
  }
];

export const getProjectById = (id: string) => projects.find(p => p.id === id);
