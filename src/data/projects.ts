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
  duration?: string;
  sqft?: string;
  role?: string;
  bedrooms?: number;
  baths?: number;
  gallons?: string;
  processView?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
  };
}

export const projects: ProjectData[] = [
  {
    id: "pool-design-1",
    title: "Luxury Infinity Pool",
    category: "Pools",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
    location: "Austin, TX",
    description: "A stunning infinity edge pool with custom stone work.",
    duration: "14 Months",
    gallons: "35,000",
    role: "Master Builder & Lead Technical Designer",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-6.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp"
    ],
    processView: {
      beforeImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp",
      afterImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp",
      beforeLabel: "Structural Concept",
      afterLabel: "Final Build"
    }
  },
  {
    id: "modern-residential-1",
    title: "Modern Hill Country",
    category: "Residential",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-10.webp",
    location: "West Lake Hills, TX",
    description: "Contemporary residential design blending with nature.",
    duration: "24 Months",
    sqft: "6,500",
    bedrooms: 5,
    baths: 6.5,
    role: "General Contractor & Interior Architect",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-10.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-11.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-12.webp"
    ]
  },
  {
    id: "commercial-spa-1",
    title: "Resort Wellness Center",
    category: "Hospitality",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-15.webp",
    location: "San Antonio, TX",
    description: "A luxury spa and wellness environment for a world-class resort.",
    duration: "18 Months",
    sqft: "12,000",
    role: "Design-Build Consultant",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-15.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-16.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-17.webp"
    ]
  },
  {
    id: "modern-kitchen-1",
    title: "Chef's Dream Kitchen",
    category: "Interior",
    coverImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-20.webp",
    location: "Dallas, TX",
    description: "A high-end kitchen renovation with professional-grade appliances.",
    duration: "9 Months",
    sqft: "1,200 (Kitchen Suite)",
    role: "Interior Design & Custom Millwork",
    gallery: [
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-20.webp",
      "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-21.webp",
      "special://smelek-letter"
    ]
  }
];

export const getProjectById = (id: string) => projects.find(p => p.id === id);
