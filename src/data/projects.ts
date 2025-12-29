import { designAlbums } from "./design-albums";

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

// Helper to map album ID to category
const getCategory = (id: string): string => {
  if (id.includes('pool') || id.includes('exterior')) return 'Pools';
  if (id.includes('kitchen') || id.includes('interior') || id.includes('furniture') || id.includes('lighting') || id.includes('finishes')) return 'Interior';
  if (id.includes('renderings')) return 'Commercial'; // or Residential
  return 'Residential';
};

// Map design albums to projects
export const projects: ProjectData[] = designAlbums.map(album => ({
  id: album.id,
  title: album.title,
  category: getCategory(album.id),
  coverImage: album.coverImage,
  location: "Spring, TX", // Default based on Smelek letter
  description: album.description,
  gallery: album.images,
  role: "Lead Designer & Builder", // Default role
  // Add specific data for the main Pools project to preserve Process View functionality if needed
  ...(album.id === 'pools' ? {
    location: "Spring, TX",
    role: "Master Builder & Lead Technical Designer",
    duration: "14 Months",
    gallons: "35,000",
    processView: {
      beforeImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-5.webp", // Keeping these as placeholders until local before/afters are identified
      afterImage: "https://raw.githubusercontent.com/rulloa1/constructiondesignnew-e33525f5/main/src/assets/projects/pool-design-1.webp",
      beforeLabel: "Structural Concept",
      afterLabel: "Final Build"
    }
  } : {}),
  ...(album.id === 'southcoast-kitchen' ? {
    location: "The Woodlands, TX",
    duration: "6 Months",
    sqft: "800",
    role: "Interior Designer"
  } : {})
}));

export const getProjectById = (id: string) => projects.find(p => p.id === id);
