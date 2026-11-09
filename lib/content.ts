// All page copy, transcribed from the ANANTA ONE brochures (source-assets/).
// Numbers and statuses are as printed there; keep them in sync with the MahaRERA-registered documents.

export const heroStats = [
  { value: "G+22", label: "Storey tower" },
  { value: "1 & 2", label: "BHK homes" },
  { value: "4", label: "Lifts" },
  { value: "Podium", label: "Swimming pool" },
] as const;

export const overviewStats = [
  { value: 22, suffix: "", label: "Floors of spacious living" },
  { value: 214, suffix: "", label: "Homes in a gated community" },
  { value: 4, suffix: "", label: "Lifts incl. 1 fire lift" },
  { value: 13, suffix: "+", label: "Lifestyle amenities" },
] as const;

export const standoutFeatures = [
  { icon: "lobby", title: "Elegant Entrance Lobby", text: "with reception desk" },
  { icon: "lift", title: "3 Passenger Lifts + 1 Fire Lift", text: "fire / fireman's lift" },
  { icon: "bolt", title: "Generator Backup", text: "for common areas, lifts & water pumps" },
  { icon: "cctv", title: "CCTV Surveillance", text: "with 24×7 security" },
  { icon: "users", title: "Visitor Management", text: "system at the entrance" },
  { icon: "rain", title: "Rainwater Harvesting", text: "system" },
  { icon: "bath", title: "Branded Sanitaryware", text: "& CP fittings" },
  { icon: "kitchen", title: "Modular Kitchen", text: "in every home" },
] as const;

export type Amenity = { title: string; image: string; alt: string };

export const amenityGroups = [
  {
    id: "wellness",
    title: "Lifestyle & Wellness",
    tagline: "Move freely. Breathe deeply. Live fully.",
    items: ["Sky / Terrace Garden", "Green Walkway / Fitness Track", "Gymnasium", "Yoga Deck & Meditation Lawn", "Swimming Pool"],
    photos: [
      { title: "Yoga Deck & Meditation Lawn", image: "/images/amenity-yoga-deck.webp", alt: "Residents practising yoga on the landscaped rooftop yoga deck at sunset" },
      { title: "Green Walkway & Fitness Track", image: "/images/amenity-fitness-track.webp", alt: "Couple jogging on the rooftop fitness track lined with greenery" },
      { title: "Gymnasium", image: "/images/amenity-gymnasium.webp", alt: "Fully equipped gymnasium with treadmills and free weights" },
    ] satisfies Amenity[],
  },
  {
    id: "community",
    title: "Leisure & Community",
    tagline: "For shared laughter and peaceful pauses.",
    items: [
      "Stargazing Deck",
      "Kids' Play Area",
      "Chit-Chat Corner",
      "Reader's Lounge",
      "Adults' Swing",
      "Senior Citizen Corner",
      "Gazebo",
      "Rooftop Garden",
    ],
    photos: [
      { title: "Kids' Play Area", image: "/images/amenity-kids-play-area.webp", alt: "Children playing on swings and soft-play blocks in the rooftop kids' play area" },
      { title: "Gazebo", image: "/images/amenity-gazebo.webp", alt: "Families relaxing in a wooden gazebo on the rooftop garden" },
      { title: "Senior Citizen Corner", image: "/images/amenity-senior-citizen-corner.webp", alt: "Senior residents playing chess in the senior citizen corner" },
    ] satisfies Amenity[],
  },
] as const;

export const allAmenities = [...new Set(amenityGroups.flatMap((g) => g.items))];

export const gallery = [
  {
    image: "/images/lifestyle-living-reading.webp",
    title: "Where ordinary days become precious",
    text: "Because sometimes, it's the smallest moments that leave the biggest smiles and make ordinary days unforgettable.",
    alt: "Woman reading with a cup of coffee in a warm, wood-panelled living room",
  },
  {
    image: "/images/living-room-family-view.webp",
    title: "One day, these will be the good old days",
    text: "The toys on the floor, the stories before bedtime, the laughter from the next room. Childhood moves quickly, but the memories stay for a lifetime.",
    alt: "Family in a living room with floor-to-ceiling windows overlooking the city at sunset",
  },
  {
    image: "/images/living-room-interior.webp",
    title: "Living room",
    text: "A cup of tea, a familiar laugh, a story told for the hundredth time. Sometimes, the smallest moments become the ones we remember most.",
    alt: "Sunlit living room with a sectional sofa, plants and a round coffee table",
  },
  {
    image: "/images/bedroom-interior.webp",
    title: "Bedroom",
    text: "Away from the noise, discover the beauty of having a moment all to yourself. Here, silence has its own rhythm and rest feels like a gentle embrace.",
    alt: "Calm bedroom with an upholstered bed, bedside lamps and a work desk by the window",
  },
] as const;

export type RoomSize = { room: string; size: string };

export const configurations = [
  {
    type: "1 BHK",
    name: "Smart Starter Homes",
    blurb: "For young couples and first-time buyers ready to stop renting.",
    rooms: [
      { room: "Living", size: `9'5" × 16'4"` },
      { room: "Bedroom", size: `9'0" × 10'0"` },
      { room: "Kitchen", size: `7'8" × 10'0"` },
      { room: "Toilets", size: "2" },
    ] satisfies RoomSize[],
  },
  {
    type: "2 BHK",
    name: "Spacious Family Homes",
    blurb: "For growing families who need a room for the children, and for parents.",
    rooms: [
      { room: "Living", size: `16'4" × 9'5"` },
      { room: "Bedroom 1", size: `10'4" × 9'1"` },
      { room: "Bedroom 2", size: `9'0" × 9'0"` },
      { room: "Kitchen", size: `9'0" × 7'2"` },
    ] satisfies RoomSize[],
  },
] as const;

export const everyHomeIncludes = [
  "Modular kitchen",
  "Elegant entrance lobby with reception",
  "Generator backup for lifts, pumps & common areas",
  "Rainwater harvesting",
  "Branded sanitaryware & CP fittings",
  "3 passenger lifts + 1 fire lift",
  "CCTV surveillance & visitor management",
  "Podium-level swimming pool",
];

export const floorPlan = {
  image: "/images/floor-plan-typical.webp",
  width: 2400,
  height: 1173,
  title: "Typical Floor Plan",
  floors: ["3rd to 7th", "9th to 12th", "14th to 18th", "20th to 22nd"],
};

export const specifications = [
  {
    title: "Living Room",
    icon: "sofa",
    items: [
      "Vitrified tiles",
      "Corner POP false ceiling",
      "Full-height aluminium windows with powder coating",
      "FRD main door",
      "Provision for safety door",
    ],
  },
  {
    title: "Bedroom(s)",
    icon: "bed",
    items: ["Vitrified / wooden flooring", "Full-height aluminium windows with powder coating", "Painted flush door", "Corner false ceiling"],
  },
  {
    title: "Kitchen",
    icon: "kitchen",
    items: [
      "Modular kitchen",
      "Vitrified tiles",
      "Aluminium window with powder coating",
      "Point provision for exhaust fan",
      "Ceramic tile backdrop above platform",
      "Dual platform",
      "Dry balcony",
    ],
  },
  {
    title: "Bathroom & Plumbing",
    icon: "bath",
    items: [
      "Ceramic tile flooring",
      "Ceramic tiles up to door height",
      "Loft tank provision",
      "Branded sanitaryware & fixtures",
      "Concealed plumbing",
    ],
  },
  {
    title: "Electrification",
    icon: "bolt",
    items: [
      "Concealed wiring",
      "Branded modular switches",
      "Inverter provision",
      "ELCB as a safety device",
      "Geyser, fridge & washing machine point provision",
      "TV & telephone point provision",
    ],
  },
] as const;

export const connectivity = [
  {
    status: "Connected today",
    title: "Western Railway Suburban Line",
    text: "Vasai Road station puts you on the Western line, with local trains running through to Borivali, Andheri, Dadar and Churchgate.",
    image: "/images/connect-vasai-railway-station.webp",
    alt: "Western Railway local train at Vasai Road station",
  },
  {
    status: "Connected today",
    title: "Mumbai–Ahmedabad Highway (NH-48)",
    text: "Road access towards Thane via Ghodbunder Road, the Western suburbs and Gujarat.",
    image: "/images/connect-mumbai-ahmedabad-highway.webp",
    alt: "Mumbai–Ahmedabad National Highway 48",
  },
  {
    status: "Under execution",
    title: "Virar–Alibaug Multimodal Corridor",
    text: "Planned to link the region with Bhiwandi, Kalyan, Panvel and Navi Mumbai.",
    image: "/images/connect-virar-alibaug-corridor.webp",
    alt: "Artist's impression of the Virar–Alibaug Multimodal Corridor",
  },
  {
    status: "Proposed",
    title: "Metro Line 13 (Vasai–Virar)",
    text: "Proposed metro connectivity for the Vasai–Virar region.",
    image: "/images/connect-metro-line-13.webp",
    alt: "Artist's impression of a metro train at Vasai station",
  },
] as const;

export const westernLine = ["Virar", "Nalasopara", "Vasai Road", "Bhayandar", "Borivali", "Andheri", "Dadar", "Churchgate"];

export const nearbyRoads = [
  "Veer Savarkar Road",
  "Gokhivare Road",
  "Ambadi Road",
  "Proposed DP Road",
  "Vasai Flyover",
  "Vasai Railway Station",
];

export const upgrade = {
  renting: [
    "Rent goes up with every 11-month agreement",
    "Agreement renewals, brokerage, shifting again",
    "Every rupee builds the landlord's asset",
    "Old building, no lift, no security",
    "Making do with someone else's kitchen",
  ],
  owning: [
    "Your own address, for life",
    "No more packing boxes every few years",
    "Every EMI builds yours",
    "4 lifts, CCTV, 24×7 security, generator backup",
    "A modular kitchen that's yours from day one",
  ],
};

export const personas = [
  {
    title: "From a rented room to a home of your own",
    text: "For the young family that has outgrown cramped rented rooms and wants a proper home before the children grow up.",
  },
  {
    title: "Your first home, not your last stop",
    text: "For working couples who have rented in the suburbs long enough and want their monthly outgo to finally build their own asset.",
  },
  {
    title: "Three generations, one address",
    text: "For Vasai families moving out of an older building, who want lifts, security and room for grandparents and grandchildren alike.",
  },
  {
    title: "Room for parents, room for ambition",
    text: "For growing families and small-business owners who want comfort for their elders and a better address for the next generation.",
  },
] as const;

export const faqs = [
  {
    q: "Where is Ananta One located?",
    a: "Ananta One is at Madhuban Hills, Golani Naka, Vasai East, Vasai-Virar, Maharashtra 401208, off Veer Savarkar Road. Vasai Road station on the Western Railway suburban line and the Mumbai–Ahmedabad Highway (NH-48) are both within easy reach.",
  },
  {
    q: "What configurations are available at Ananta One?",
    a: "Ananta One offers 1 BHK smart starter homes and 2 BHK spacious family homes. Some layouts also include a study room. Contact our sales team for RERA carpet areas and the current price sheet.",
  },
  {
    q: "How tall is the tower and how many homes are there?",
    a: "Ananta One is a G+22 tower with 214 homes in a standalone gated community, served by 3 passenger lifts and 1 fire lift.",
  },
  {
    q: "What amenities does Ananta One offer?",
    a: "Amenities include a podium-level swimming pool, sky/terrace garden, green walkway and fitness track, gymnasium, yoga deck and meditation lawn, stargazing deck, kids' play area, chit-chat corner, reader's lounge, adults' swing, senior citizen corner, gazebo and rooftop garden.",
  },
  {
    q: "Is Ananta One RERA registered?",
    a: "Yes. Ananta One is registered with MahaRERA under Registration No. PM1240002601890. Details are available at https://maharera.maharashtra.gov.in.",
  },
  {
    q: "Who is developing Ananta One?",
    a: "Ananta One is developed by Setuone and Sokha Realty. The architects are Sanat Mehta & Associates and the RCC consultant is Bhavin C Shah.",
  },
  {
    q: "What specifications do the homes come with?",
    a: "Homes come with a modular kitchen with dual platform and dry balcony, vitrified tiles, full-height powder-coated aluminium windows, an FRD main door, branded sanitaryware and CP fittings, concealed wiring and plumbing, branded modular switches, inverter provision and an ELCB safety device.",
  },
  {
    q: "Are there shops in the project?",
    a: "Yes. Neighbourhood shops on the ground floor keep everyday essentials just downstairs.",
  },
  {
    q: "What is the price of flats at Ananta One?",
    a: "Prices depend on the configuration, floor and view. Share your details through the enquiry form or call +91 91672 87797 to receive the latest price sheet.",
  },
] as const;
