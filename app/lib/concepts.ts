export type Concept = {
  slug: string;
  title: string;
  category: string;
  description: string;
  palette: string[];
  imageClass: string;
  overviewTitle: string;
  overview: string;
  directionTitle: string;
  directionPoints: string[];
  paletteTitle: string;
  typographyTitle: string;
  typographyDescription: string;
  desktopTitle: string;
  mobileTitle: string;
  notesTitle: string;
  notes: string[];
};

export const concepts: Concept[] = [
  {
    slug: "vera",
    title: "VÉRA Coffee House",
    category: "Concept Brand & Web Experience",
    description:
      "A cinematic neighborhood café concept built around warm light, slow mornings, espresso, and atmosphere.",
    palette: ["#171411", "#4d3327", "#bd8c4a", "#f5ead8"],
    imageClass: "vera-image",
    overviewTitle: "A neighborhood café imagined as a morning ritual.",
    overview:
      "VÉRA is shaped around slow light, ceramic warmth, polished espresso counters, and intimate service. The concept translates that sensory world into a website that feels calm, cinematic, and immediately place-specific.",
    directionTitle: "Warm light, espresso depth, quiet luxury.",
    directionPoints: ["Slow mornings", "Burnished details", "Neighborhood intimacy"],
    paletteTitle: "Espresso, brass, cream.",
    typographyTitle: "Slow mornings, beautifully served.",
    typographyDescription:
      "Elegant serif headlines carry the cinematic brand voice, while a restrained sans-serif system keeps navigation, menus, and visit actions crisp.",
    desktopTitle: "A homepage built like an opening scene.",
    mobileTitle: "Compact, tactile, and easy to move through.",
    notesTitle: "The experience stays atmospheric without losing clarity.",
    notes: [
      "Warm editorial imagery sets the emotional temperature before any offer appears.",
      "The interface moves like a quiet cafe ritual: slower reveals, generous pauses, and soft transitions.",
      "UX priorities stay simple: orient visitors, establish mood, highlight signature moments, and invite a visit.",
    ],
  },
  {
    slug: "marlow-stay",
    title: "Marlow Stay",
    category: "Boutique Hotel Concept",
    description:
      "A refined coastal guesthouse concept with quiet luxury, linen textures, slow travel pacing, and a reservation-first digital experience.",
    palette: ["#fbf4e8", "#7f8a79", "#bda47c", "#211c18"],
    imageClass: "marlow-image",
    overviewTitle: "A boutique stay built around ease, silence, and arrival.",
    overview:
      "Marlow Stay imagines a small coastal guesthouse that feels thoughtful before a guest ever books. The digital experience pairs soft hospitality cues with clear room, location, and reservation pathways.",
    directionTitle: "Linen texture, coastal restraint, quiet service.",
    directionPoints: ["Soft arrival", "Tactile calm", "Reservation clarity"],
    paletteTitle: "Cream, sage, linen, ink.",
    typographyTitle: "A slower pace for modern travel.",
    typographyDescription:
      "Large serif type gives the stay a composed editorial voice, while minimal interface text keeps booking moments simple and reassuring.",
    desktopTitle: "A stay experience that sells the feeling first.",
    mobileTitle: "A calm booking path for guests on the move.",
    notesTitle: "The concept balances atmosphere with practical guest decisions.",
    notes: [
      "The hero emphasizes place and feeling before rates or amenities.",
      "Room and reservation modules would stay clean, scannable, and confidence-building.",
      "The visual system avoids resort cliches and leans into quiet, boutique hospitality.",
    ],
  },
  {
    slug: "solara-wellness",
    title: "Solara Wellness Studio",
    category: "Lifestyle Brand Refresh Concept",
    description:
      "A warm wellness studio direction built around calm movement, soft rituals, editorial photography, and a more elevated class-booking flow.",
    palette: ["#fff8ec", "#b98f72", "#d9c7aa", "#2b241f"],
    imageClass: "solara-image",
    overviewTitle: "A wellness studio refresh with warmth and structure.",
    overview:
      "Solara Wellness Studio is designed as a softer, more premium identity direction for a local movement space. The concept focuses on calm imagery, welcoming language, and a class flow that feels easy to begin.",
    directionTitle: "Soft ritual, movement, warmth.",
    directionPoints: ["Calm energy", "Editorial wellness", "Easy booking"],
    paletteTitle: "Ivory, clay, oat, cacao.",
    typographyTitle: "Grounded, warm, and human.",
    typographyDescription:
      "Expressive serif moments create brand warmth, while clean sans-serif details keep schedules, memberships, and class descriptions usable.",
    desktopTitle: "A studio homepage that lowers the barrier to starting.",
    mobileTitle: "A booking experience designed for quick decisions.",
    notesTitle: "The brand refresh makes wellness feel premium without becoming cold.",
    notes: [
      "The concept avoids clinical wellness language in favor of approachable confidence.",
      "Class discovery would prioritize schedule clarity, instructor trust, and first-visit comfort.",
      "Visual direction supports a stronger brand presence across web, social, and local marketing.",
    ],
  },
  {
    slug: "atlas-table",
    title: "Atlas Table",
    category: "Restaurant Brand & Web Concept",
    description:
      "A moody neighborhood restaurant concept with atmospheric dining photography, concise storytelling, and a menu experience designed for appetite.",
    palette: ["#171411", "#643a2a", "#bd8c4a", "#f5ead8"],
    imageClass: "atlas-image",
    overviewTitle: "A restaurant concept designed to feel appetizing before the menu.",
    overview:
      "Atlas Table is a moody neighborhood restaurant direction built around intimate dining photography, restrained copy, and a digital experience that makes the room, food, and reservation feel desirable.",
    directionTitle: "Low light, rich flavor, neighborhood pull.",
    directionPoints: ["Dining atmosphere", "Menu desire", "Reservation focus"],
    paletteTitle: "Charcoal, oxblood, brass, cream.",
    typographyTitle: "Elegant enough for dinner, simple enough for service.",
    typographyDescription:
      "Editorial serif headlines create the restaurant mood, while compact sans-serif UI keeps menu, hours, and reservations clear.",
    desktopTitle: "A restaurant homepage with appetite and pace.",
    mobileTitle: "A fast path to menu, hours, and booking.",
    notesTitle: "The UX keeps the dining mood intact while helping people act.",
    notes: [
      "Imagery would lead with texture, plates, and room atmosphere rather than generic dining tropes.",
      "Menu hierarchy would make signature items easy to scan without flattening the brand voice.",
      "Reservation and contact actions stay visible without turning the page into a utility layout.",
    ],
  },
];
