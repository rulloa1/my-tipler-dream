export interface DesignAlbum {
    id: string;
    title: string;
    description: string;
    coverImage: string; // Used for the card
    images: string[]; // Used for the lightbox/gallery
}

export const designAlbums: DesignAlbum[] = [
    {
        id: "pools",
        title: "Pools & Exterior Spas",
        description: "Luxury pools, infinity edges, and integrated spa environments.",
        coverImage: "/design/pools/29088D41-20ED-451A-9478-B3F6A71E9EEF.JPG",
        images: [
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
        ]
    },
    {
        id: "southcoast-kitchen",
        title: "Southcoast Kitchen & Living",
        description: "Complete remodel of kitchen, dining, and living spaces with modern finishes.",
        coverImage: "/design/southcoast-kitchen/36 AFTER.JPG",
        images: [
            "/design/southcoast-kitchen/36 AFTER.JPG",
            "/design/southcoast-kitchen/11 Kitchen AFTER.jpg",
            "/design/southcoast-kitchen/12 Kitchen After.jpg",
            "/design/southcoast-kitchen/13 Kitchen After.jpg",
            "/design/southcoast-kitchen/18 Living Rm AFTER.JPG",
            "/design/southcoast-kitchen/20 Living Dining AFTER.jpg",
            "/design/southcoast-kitchen/22 Living After.JPG",
            "/design/southcoast-kitchen/24 Living After.JPG",
            "/design/southcoast-kitchen/35 AFTER.JPG",
            "/design/southcoast-kitchen/37 AFTER.jpg",
            "/design/southcoast-kitchen/38 AFTER.jpg",
            "/design/southcoast-kitchen/39 AFTER.jpg",
            "/design/southcoast-kitchen/40 AFTER.jpg",
            "/design/southcoast-kitchen/41 AFTER.jpg",
            "/design/southcoast-kitchen/42 AFTER.jpg",
            "/design/southcoast-kitchen/43 AFTER.jpg",
            "/design/southcoast-kitchen/44 AFTER.JPG",
            "/design/southcoast-kitchen/45 AFTER.JPG",
            "/design/southcoast-kitchen/46 AFTER.JPG",
            "/design/southcoast-kitchen/47 AFTER.JPG"
        ]
    },
    {
        id: "lighting",
        title: "Specialty & Mood Lighting",
        description: "Custom lighting solutions that set the mood and highlight architectural details.",
        coverImage: "/design/lighting/IMG_5563.jpg",
        images: [
            "/design/lighting/IMG_5563.jpg",
            "/design/lighting/IMG_8242.jpg",
            "/design/lighting/IMG_5564.jpg",
            "/design/lighting/IMG_5565.jpg",
            "/design/lighting/IMG_5553.jpg",
            "/design/lighting/IMG_5566.jpg",
            "/design/lighting/IMG_5575.jpg",
            "/design/lighting/IMG_5574.jpg",
            "/design/lighting/IMG_5573.jpg",
            "/design/lighting/IMG_5571.jpg",
            "/design/lighting/IMG_5570.jpg",
            "/design/lighting/IMG_5569.jpg",
            "/design/lighting/IMG_5551.jpg",
            "/design/lighting/IMG_5552.jpg",
            "/design/lighting/IMG_8238.jpg",
            "/design/lighting/IMG_8243.jpg",
            "/design/lighting/IMG_4621.PNG",
            "/design/lighting/IMG_3154.PNG",
            "/design/lighting/168093.jpeg",
            "/design/lighting/168095.jpeg",
            "/design/lighting/168096.jpeg"
        ]
    },
    {
        id: "finishes",
        title: "Specialty Finishes & Textures",
        description: "Exquisite surface treatments, custom plasters, and unique tactile elements.",
        coverImage: "/design/finishes/IMG_6629.jpg",
        images: [
            "/design/finishes/IMG_6629.jpg",
            "/design/finishes/IMG_2751.jpg",
            "/design/finishes/IMG_3317.jpg",
            "/design/finishes/IMG_3318.jpg",
            "/design/finishes/IMG_3319.jpg",
            "/design/finishes/IMG_3320.jpg",
            "/design/finishes/IMG_6794.jpg",
            "/design/finishes/IMG_6680.jpg",
            "/design/finishes/IMG_5112.jpg",
            "/design/finishes/IMG_5101.jpg",
            "/design/finishes/IMG_5117.jpg",
            "/design/finishes/IMG_4883.jpg",
            "/design/finishes/IMG_4332.jpg",
            "/design/finishes/IMG_3727.jpg",
            "/design/finishes/IMG_4429.jpg",
            "/design/finishes/IMG_4430.jpg"
        ]
    },
    // Development & Concepts Albums
    {
        id: "land-development",
        title: "Land Development",
        description: "Entitlements, Infrastructure, Planning",
        coverImage: "/projects/development-civil/development (1).jpg",
        images: [
            "/projects/development-civil/development (1).jpg",
            "/projects/development-civil/development (2).jpg",
            "/projects/development-civil/development (3).jpg",
            "/projects/development-civil/development (4).jpg",
            "/projects/development-civil/development (5).jpg",
            "/projects/development-civil/development (6).jpg",
            "/projects/development-civil/development (7).jpg",
            "/projects/development-civil/development (8).jpg",
            "/projects/development-civil/development (9).jpg",
            "/projects/development-civil/development (10).jpg"
        ]
    },
    {
        id: "residential-communities",
        title: "Residential Communities",
        description: "Master Plan, Amenities, HOA",
        coverImage: "/projects/development-civil/development (12).jpg",
        images: [
            "/projects/development-civil/development (11).jpg",
            "/projects/development-civil/development (12).jpg",
            "/projects/development-civil/development (13).jpg",
            "/projects/development-civil/development (14).jpg",
            "/projects/development-civil/development (15).jpg",
            "/projects/development-civil/development (16).jpg",
            "/projects/development-civil/development (17).jpg",
            "/projects/development-civil/development (18).jpg",
            "/projects/development-civil/development (19).jpg",
            "/projects/development-civil/development (20).jpg"
        ]
    },
    {
        id: "resort-hospitality",
        title: "Resort & Hospitality",
        description: "Mixed-Use, Golf, Private Clubs",
        coverImage: "/projects/laguna-grande/6.0 Laguna Grande Design Build_001_COVER.png",
        images: [
            "/projects/laguna-grande/6.0 Laguna Grande Design Build_001_COVER.png",
            "/projects/laguna-grande/6.0 Laguna Grande Design Build_002_(2).png",
            "/projects/laguna-grande/6.0 Laguna Grande Design Build_003.png",
            "/projects/laguna-grande/6.0 Laguna Grande Design Build_004.png",
            "/projects/laguna-grande/6.0 Laguna Grande Design Build_005.png",
            "/projects/laguna-grande/6.0 Laguna Grande Design Build_006.png"
        ]
    },
    {
        id: "renovation-repositioning",
        title: "Renovation & Repositioning",
        description: "Historic, Adaptive Reuse, Restoration",
        coverImage: "/projects/carmel-knolls/001 Cover Carmel Knolls, CA Remodel, Before & After.png",
        images: [
            "/projects/carmel-knolls/001 Cover Carmel Knolls, CA Remodel, Before & After.png",
            "/projects/carmel-knolls/0010.JPG",
            "/projects/carmel-knolls/0011.JPG",
            "/projects/carmel-knolls/0012.JPG",
            "/projects/carmel-knolls/0013.JPG",
            "/projects/carmel-knolls/0014.JPG",
            "/projects/carmel-knolls/0015.JPG",
            "/projects/carmel-knolls/0016.JPG",
            "/projects/carmel-knolls/0017.JPG",
            "/projects/carmel-knolls/002.JPG",
            "/projects/carmel-knolls/003.JPG",
            "/projects/carmel-knolls/004.JPG"
        ]
    },
];
