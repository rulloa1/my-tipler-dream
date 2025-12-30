import { designAlbums } from "./design-albums";

export interface Project {
  id: string;
  title: string;
  category: string;
  coverImage: string;
  description: string;
  gallery: string[];
  location: string;
  subtitle?: string;
  role?: string;
  duration?: string;
  sqft?: string;
  gallons?: string;
  bedrooms?: string;
  baths?: string;
  earthMoved?: string;
  retainingWalls?: string;
  decking?: string;
  lotSize?: string;
  poolSize?: string;
  projectArea?: string;
  processView?: {
    beforeImage: string;
    afterImage: string;
    beforeLabel: string;
    afterLabel: string;
  };
}

// Pool images from local design folder
const poolImages = [
  "/design/pools/29088D41-20ED-451A-9478-B3F6A71E9EEF.JPG",
  "/design/pools/02DCFE45-E4A3-4045-A7A0-A35D00E2D661.JPG",
  "/design/pools/A6B04D66-07E6-4175-A5DE-53B5AEAE10D7.JPEG",
  "/design/pools/B51D7E23-55DF-4786-B213-AFF2E14D2C4C.jpg",
  "/design/pools/B5BC2910-FB6E-4C2B-9D67-F6DD6DB3DF47.JPG",
  "/design/pools/DACD2091-90E3-4F85-A4FF-21D26671BF8C (1).jpg",
  "/design/pools/E34A13CE-EEB5-4924-9D48-38E6AFB0D626.JPEG",
  "/design/pools/E67504A4-615C-4D44-944F-862A6840FA98.JPEG",
  "/design/pools/F5BFD0E6-840F-4048-870D-5C9056A45059.JPG",
  "/design/pools/F9AA058C-A210-4A58-92A1-6FE599C5EE18.JPG",
  "/design/pools/IMG_0163.JPG",
  "/design/pools/IMG_0166 2.JPG"
];

export const projects: Project[] = [
  // S. Florida High Rise Luxe Condo
  {
    id: "s-florida-condo",
    title: "S. Florida",
    subtitle: "High Rise Luxe Condo",
    category: "Residential Construction",
    location: "S. Florida",
    description: "Over a 5-month period, we transformed a 4,200 sq ft condominium into a beachfront sanctuary of modern design. This custom renovation introduces a new standard of coastal living, where breathtaking ocean views are framed by floor-to-ceiling hurricane-rated windows. We infused the space with custom Italian marble stone floors as a foundation for designers who added beautiful stone, hand-applied specialty wall finishes, and crafted bespoke millwork, culminating in a chef's kitchen equipped with professional-grade appliances. The newest Smart-Home Technologies were obtained and installed, with most components not even available to the public yet. Custom scalloped Solid Wood Paneling was made from rare South American wood—the likes of which cannot be obtained in this country anymore. Hand-picked craftsmen, world-class millworkers, and extremely talented specialists installed hand-applied specialty wall finishes, all working in perfect harmony to deliver this one-of-a-kind ocean-side residence. On Budget, On Schedule, and Perfectly On Point.",
    coverImage: "/design/interiors/cover.png",
    gallery: ["/design/interiors/cover.png"],
    sqft: "4,200",
    bedrooms: "4",
    baths: "4",
    role: "Contractor Identification/Contract Negotiation/Project Management, Owner Representation, Property Management, International Furniture/Material/Art Receiving, Vehicle/Management/Procurement/Shipping",
  },
  // High Alpine Mtn - Montana
  {
    id: "high-alpine-mtn",
    title: "High Alpine Mtn.",
    subtitle: "Ranch Luxe Retreat",
    category: "Residential Construction",
    location: "Montana",
    description: "Nestled in the high-alpine region of Montana, this 8,500 sq ft luxury ranch was brought to life over 24 months. We merged modern mountain architecture with rustic charm, using exposed timber and custom stone masonry to complement the panoramic landscape. The residence features 22-foot high vaulted ceilings and floor-to-ceiling windows that dissolve the boundary between the interior and the breathtaking mountain views. Radiant floor heating, a gourmet kitchen with natural stone countertops, and custom millwork throughout ensure that comfort and elegance are felt in every corner. A custom forced air system and 2 special air systems were designed to maximize all efficiencies.",
    coverImage: "/design/renderings/1.png",
    gallery: ["/design/renderings/1.png", "/design/renderings/2.png"],
    sqft: "8,500",
    bedrooms: "5",
    baths: "6",
    role: "Owner Representative, Design, Contractor, Procurement, Project Management, Contract Negotiation, Property Management",
  },
  // Syracuse House - N. Utah
  {
    id: "syracuse-house",
    title: "Syracuse House",
    subtitle: "N. Utah Craftsman Estate",
    category: "Design/Build",
    location: "N. Utah",
    description: "This 6,200 sq ft craftsman-style estate is a testament to our integrated design-build approach. Over 18 months, we orchestrated the creation of not just a home, but a complete two-acre landscape. The project's exterior is defined by over 400 tons of decorative stone, professional hardscaping, and dramatic low-voltage evening lighting. Our design embraced drought-tolerant native plantings and elegant water features, creating a seamless transition between the built and natural environments. Additional features include a 6-car garage/workshop, 4BR + horse barn + storage, creating the perfect home/estate/equestrian property.",
    coverImage: "/design/lighting/IMG_8242.jpg",
    gallery: ["/design/lighting/IMG_8242.jpg", "/design/lighting/IMG_5563.jpg"],
    sqft: "6,200",
    role: "Owner Representation, Project Management, Property Management",
  },
  // Mtn. Mid-Rise Luxe - Montana
  {
    id: "mtn-mid-rise-luxe",
    title: "Mtn. Mid-Rise Luxe",
    subtitle: "Condo",
    category: "Residential Construction",
    location: "Montana",
    description: "In just eight months, this new build 2,800 sq ft condo was completed as a sophisticated mountain retreat. The new build focused on creating a sanctuary of modern comfort, featuring spa-inspired bathrooms with heated floors and contemporary finishes throughout. The selections were of a Calacatta marble, warm walnut, and refined brass fixtures to evoke a sense of understated luxury. The result is a space that perfectly balances modern living with the tranquility of a mountain setting, along with warm wood accents and special wall/ceiling finishes. Fine marbles, many of which were installed as full slabs for floor-to-ceiling finishes.",
    coverImage: "/design/interiors/1.png",
    gallery: ["/design/interiors/1.png"],
    sqft: "2,800",
    role: "Owner Representation, Project Management, Property Management",
  },
  // Ultra Luxe Private Club - SE Texas
  {
    id: "ultra-luxe-private-club",
    title: "Ultra Luxe Private Club",
    subtitle: "Resort Pool",
    category: "Hospitality",
    location: "SE Texas",
    description: "We orchestrated the creation of a 189,000-gallon ultra-luxury private club amenity, a project that demanded the coordination of over 15 specialty trades. The centerpiece is a beautiful free-form pool with a swim-up bar, complemented by a 1,200 sq ft pool house. The interior design, inspired by 1950s New York smoking clubs, features imported travertine and custom stonework. This 18-month project delivered a resort-style oasis with professional landscaping, fire pits, and an outdoor kitchen, setting a new standard for private club luxury. Features include 10-foot high south mahogany wood walls and doors.",
    coverImage: poolImages[0],
    gallery: poolImages,
    poolSize: "189,000 gallons",
    projectArea: "3 Acres",
    role: "Owner Representative Total, Daily Project Management, Co-Design of Many Elements, Property Management",
  },
  // South Coast Renovation
  {
    id: "south-coast-renovation",
    title: "South Coast Renovation",
    subtitle: "Complete Remodel",
    category: "Design/Build",
    location: "Big Sur, CA",
    description: "This 3,800 sq ft residence was completely reimagined through our design-build process. Over 16 months, we opened up the home to panoramic ocean views with new floor-to-ceiling windows and custom skylights. The interior transformation features white oak flooring, a gourmet kitchen with waterfall quartzite countertops, and spa-quality bathrooms with radiant heat. We undertook a complete structural renovation, culminating in a home that is as solid as it is beautiful, a true sanctuary on the Big Sur coast.",
    coverImage: "/design/southcoast-kitchen/11 Kitchen AFTER.jpg",
    gallery: ["/design/southcoast-kitchen/11 Kitchen AFTER.jpg"],
    sqft: "3,800",
    role: "Project Manager, Owner Representative, Designer, Int. Designer, Builder, Property Manager, Owner Assignee - During Photo Ad Campaign and Cinema Movie Shoots",
  },
  // Carmel Valley New
  {
    id: "carmel-valley-new",
    title: "Carmel Valley New",
    subtitle: "Custom Residence",
    category: "Design/Build",
    location: "Carmel Valley, CA",
    description: "In the heart of Carmel Valley, we crafted a 4,800 sq ft custom residence that is a dialogue between architecture and nature. This 20-month design-build project features exposed steel beams and floor-to-ceiling glass walls that frame the oak-studded landscape. We integrated the home with its surroundings through extensive site work and native habitat restoration, creating a dwelling that is both a part of and a tribute to the natural beauty of the valley.",
    coverImage: "/design/exterior/2.png",
    gallery: ["/design/exterior/2.png"],
    sqft: "4,800",
    role: "Designer, Builder, Project Manager, Civil Engineering Contractor",
  },
  // North Florida Renovation/Addition
  {
    id: "north-florida-renovation",
    title: "North Florida Renovation/Addition",
    category: "Residential Construction",
    location: "N. Florida",
    description: "We revitalized this 3,600 sq ft home with a 1,200 sq ft addition over a 10-month period. Our comprehensive approach included a new roof, impact windows, and updated electrical and plumbing systems. The interior was completely refreshed, and our estate management services ensured a seamless coordination of all trades. The result is a home that is not only more spacious and modern but also fortified and meticulously detailed.",
    coverImage: "/design/n-florida/NIMG_9178.jpg",
    gallery: [
      "/design/n-florida/NIMG_9178.jpg",
      "/design/n-florida/NIMG_9179.jpg",
      "/design/n-florida/NIMG_9180.jpg",
      "/design/n-florida/NIMG_9182.jpg",
      "/design/n-florida/NIMG_9184.jpg",
      "/design/n-florida/NIMG_9185.jpg",
      "/design/n-florida/NIMG_9890.jpg",
      "/design/n-florida/NIMG_9892.jpg",
      "/design/n-florida/NIMG_9893.jpg",
      "/design/n-florida/NIMG_9894.jpg",
      "/design/n-florida/NIMG_9895.jpg"
    ],
    sqft: "3,600 (Orig) / 1,200 (Add)",
    role: "Contractor",
  },
  // Abaco Luxe Boat House
  {
    id: "abaco-luxe-boat-house",
    title: "Abaco Luxe Boat House",
    subtitle: "Construction",
    category: "Residential Construction",
    location: "Abaco, Bahamas",
    description: "On the pristine shores of the Abaco Islands, we constructed an 1,800 sq ft luxury boat house in just six months. Built to withstand the Caribbean climate, this waterfront structure features hurricane-resistant construction and premium marine-grade finishes. Custom mahogany millwork and covered dock access provide a touch of elegance, creating a functional and beautiful gateway to the open water.",
    coverImage: "/design/exterior/cover.png",
    gallery: ["/design/exterior/cover.png"],
    sqft: "1,800",
    role: "Project Manager in a Foreign Country for US Owners",
  },
  // Carmel Forest to Ocean View
  {
    id: "carmel-forest-ocean",
    title: "Carmel Forest to Ocean View",
    subtitle: "Custom Addition",
    category: "Residential Construction",
    location: "Carmel By the Sea, CA",
    description: "This project is a celebration of its stunning location, a coastal home that harmonizes with the natural beauty of the Carmel coastline. Our focus was on refined craftsmanship and thoughtful design, creating a space that feels both luxurious and deeply connected to its environment. The result is a home that is more than a structure; it is a serene retreat.",
    coverImage: "/design/exterior/2.png",
    gallery: ["/design/exterior/2.png"],
    role: "Designer, Builder, Project Manager",
  },
  // Coastal Mountain Residence
  {
    id: "coastal-mountain-residence",
    title: "Coastal Mountain Residence",
    subtitle: "Civil Site Work",
    category: "Civil",
    location: "Big Sur, CA",
    description: "Over 11 months, we reshaped a 1.2-acre mountain site in Big Sur, a project that required both heavy machinery and a delicate touch. We moved over 3,000 cubic yards of earth, constructed 320 linear feet of retaining walls, and built a 900 sq ft custom garage and workshop. Our work focused on erosion control and drainage systems, all while preserving the property's stunning ocean views and protecting the natural landscape.",
    coverImage: "/design/exterior/1.png",
    gallery: ["/design/exterior/1.png"],
    earthMoved: "3,000 cu yds",
    retainingWalls: "320 ln ft",
    role: "Owner Representative, Designer, Builder, Project Manager, Permit Procurement",
  },
  // Carmel Knolls
  {
    id: "carmel-knolls",
    title: "Carmel Knolls",
    subtitle: "More Than Lipstick on an Old Lady!",
    category: "Civil",
    location: "Carmel, CA",
    description: "This was more than a remodel; it was a complete transformation. Over 12 months, we took a 2,200 sq ft house and revitalized it from the ground up. The project included a new roofline, foundation repairs, 18 energy-efficient windows, and 1,400 sq ft of new composite decking. We also undertook extensive site work, including 200 linear feet of retaining walls and a complete landscape renovation, proving that with the right vision, any property can be reborn.",
    coverImage: "/design/n-florida/NIMG_9890.jpg",
    gallery: ["/design/n-florida/NIMG_9890.jpg"],
    sqft: "2,200",
    decking: "1,400 sq ft",
    role: "Designer, Int. Designer, Builder, Project Manager, Permit Procurement",
  },
  // Coastal Restoration
  {
    id: "coastal-restoration",
    title: "Coastal Restoration",
    subtitle: "Erosion Repair",
    category: "Civil",
    location: "Monterey Peninsula, CA",
    description: "Faced with a dramatically eroded coastal property, we undertook a nine-month restoration project to preserve this spectacular oceanfront site. We moved over 2,500 cubic yards of material, installed 180 linear feet of engineered retaining walls, and performed comprehensive foundation work. This project was a battle against the elements, a successful effort to stabilize and restore a piece of the California coastline for generations to come.",
    coverImage: "/design/n-florida/NIMG_9180.jpg",
    gallery: ["/design/n-florida/NIMG_9180.jpg"],
    earthMoved: "2,500 cu yds",
    retainingWalls: "180 ln ft",
    role: "Civil Engineering Contractor, Builder, Permit Procurement (Emergency Construction Permit)",
  },
  // Civil Engineering
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    subtitle: "Infrastructure Projects",
    category: "Civil",
    location: "CA, TX, NM, CO, MT",
    description: "Our civil engineering portfolio is a testament to our ability to tackle complex infrastructure challenges across five states. From 2015 to 2024, we have moved over 50,000 cubic yards of earth, installed more than 2,500 linear feet of retaining walls, and executed numerous coastal restoration and hillside stabilization projects. Our expertise in heavy construction and infrastructure development allows us to deliver exceptional results, even in the most challenging terrains.",
    coverImage: "/design/n-florida/NIMG_9182.jpg",
    gallery: ["/design/n-florida/NIMG_9182.jpg", "/design/n-florida/NIMG_9178.jpg"],
    role: "Civil Engineering, Contractor/Builder",
  },
  // Beachfront Estate
  {
    id: "beachfront-estate",
    title: "Beachfront Estate",
    subtitle: "Residence",
    category: "Residential Development",
    location: "Abaco, Bahamas",
    description: "We developed a 2.5-acre beachfront estate, creating a 6,800 sq ft main residence that embodies luxury Caribbean living. This premier property features 180 feet of private beach frontage and is fortified with Category 5 hurricane-resistant construction. The estate is a self-sufficient oasis, with an infinity pool, guest cottage, dock facilities, solar power backup, and rainwater collection systems. This is more than a home; it is a legacy property on the shores of the Atlantic.",
    coverImage: "/design/renderings/cover.png",
    gallery: ["/design/renderings/cover.png", "/design/renderings/1.png", "/design/renderings/2.png"],
    sqft: "6,800",
    lotSize: "2.5 Acres",
    role: "Project Manager in a Foreign Country for US Owners",
  },
  // Pools & Exterior Spas
  {
    id: "pools-exterior-spa",
    title: "Pools & Exterior Spas",
    category: "Exterior",
    location: "California",
    description: "Luxury pools, infinity edges, and integrated spa environments showcasing modern design and relaxation.",
    coverImage: poolImages[0],
    gallery: poolImages,
  },
  // Map other design albums to projects to populate the site
  ...designAlbums.map(album => ({
    id: album.id,
    title: album.title,
    category: "Design",
    location: "Various Locations",
    description: album.description,
    coverImage: album.coverImage,
    gallery: album.images,
  }))
];

export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};

export const categories = ["All", ...new Set(projects.map((project) => project.category))];