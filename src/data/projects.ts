import galleryData from "../../gallery_data.json";

export const categories = [
  "All",
  "Residential",
  "Commercial",
  "Hospitality",
  "Renovation",
  "Land Development",
];

export type ProjectCategory = Exclude<(typeof categories)[number], "All">;

export interface Project {
  id: number;
  title: string;
  category: ProjectCategory;
  location: string;
  coverImage: string;
  gallery: string[];
  description: string;
  subtitle?: string;
  role?: string;
  duration?: string;
  sqft?: string;
  gallons?: string;
  bedrooms?: number;
  baths?: number;
  processView?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
  };
}

type ProjectDefinition = Pick<Project, "title" | "category" | "location"> & {
  galleryFolder: string;
};

const galleries: Record<string, string[]> = galleryData;

const projectDefinitions: ProjectDefinition[] = [
  {
    title: "Ultra Luxe Private Pool",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "Ultra Luxe Private Pool",
  },
  {
    title: "Abaco Luxe Boat House",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "Abaco Luxe Boat House",
  },
  {
    title: "Development Civil",
    category: "Land Development",
    location: "Private Client Project",
    galleryFolder: "development-civil",
  },
  {
    title: "New Residential Construction",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "New Residential Construction",
  },
  {
    title: "Hillside Renewal",
    category: "Renovation",
    location: "Private Client Project",
    galleryFolder: "hillside-cleanup",
  },
  {
    title: "Carmel Forest to Ocean View",
    category: "Residential",
    location: "Carmel, California",
    galleryFolder: "Carmel Forest to Ocean View",
  },
  {
    title: "Laguna Grande",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "laguna-grande",
  },
  {
    title: "Coastal Mountain Residence",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "Coastal_Mountain_Residence",
  },
  {
    title: "Syracuse House",
    category: "Residential",
    location: "Syracuse, New York",
    galleryFolder: "Syracuse House",
  },
  {
    title: "Coastal Restoration",
    category: "Renovation",
    location: "Private Client Project",
    galleryFolder: "coastal-restoration",
  },
  {
    title: "Pacific Grove",
    category: "Residential",
    location: "Pacific Grove, California",
    galleryFolder: "pacific-grove",
  },
  {
    title: "Mountain Mid-Rise Luxe Condo",
    category: "Commercial",
    location: "Private Client Project",
    galleryFolder: "Mtn. Mid-Rise Luxe Condo",
  },
  {
    title: "South Florida High-Rise Luxe",
    category: "Commercial",
    location: "South Florida",
    galleryFolder: "S. Florida High Rise Luxe",
  },
  {
    title: "North Florida Residence",
    category: "Residential",
    location: "North Florida",
    galleryFolder: "north-florida",
  },
  {
    title: "Carmel Knolls",
    category: "Residential",
    location: "Carmel, California",
    galleryFolder: "carmel-knolls",
  },
  {
    title: "Beachfront Estate",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "beachfront_estate",
  },
  {
    title: "Civil Engineering",
    category: "Land Development",
    location: "Private Client Project",
    galleryFolder: "Civil Engineering",
  },
  {
    title: "High Alpine Mountain Ranch",
    category: "Residential",
    location: "Private Client Project",
    galleryFolder: "High Alpine Mtn. Ranch",
  },
  {
    title: "Carmel Valley",
    category: "Residential",
    location: "Carmel Valley, California",
    galleryFolder: "carmel-valley-new",
  },
];

const createProject = (definition: ProjectDefinition, index: number): Project => {
  const gallery = galleries[definition.galleryFolder];

  if (!gallery?.length) {
    throw new Error(`Missing gallery assets for ${definition.galleryFolder}`);
  }

  return {
    id: index + 1,
    title: definition.title,
    category: definition.category,
    location: definition.location,
    coverImage: gallery[0],
    gallery,
    description: `A curated selection of images from the ${definition.title} project.`,
  };
};

export const projects = projectDefinitions.map(createProject);

export const getProjectById = (id: string | number) =>
  projects.find((project) => project.id === Number(id));
