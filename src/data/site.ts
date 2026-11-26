export type Language = "de" | "en";

export const spots = [
  {
    name: { de: "Wochenmarkt Lübeck", en: "Lübeck weekly market" },
    lat: 53.86659,
    lng: 10.68491,
    description: {
      de: "Wochenmarkt auf dem Lübecker Markt in der Altstadt.",
      en: "Weekly market on Lübeck's historic market square.",
    },
  },
  {
    name: { de: "Turm der St. Petri Kirche", en: "St Peter's Church tower" },
    lat: 53.8659379,
    lng: 10.6829632,
    description: {
      de: "Weitblick über die Dächer der Lübecker Altstadt.",
      en: "Wide views across the rooftops of Lübeck's old town.",
    },
  },
  {
    name: { de: "Museum Holstentor", en: "Holstentor Museum" },
    lat: 53.8661407,
    lng: 10.6796886,
    description: {
      de: "Lübecker Stadtgeschichte im historischen Holstentor.",
      en: "Lübeck's city history inside the historic Holstentor gate.",
    },
  },
  {
    name: { de: "Boat-Now Lübeck", en: "Boat-Now Lübeck" },
    lat: 53.8636774,
    lng: 10.6805615,
    description: {
      de: "Bootsverleih an der Obertrave für Touren auf den Stadtgewässern.",
      en: "Boat rental on the Obertrave for trips around the city's waterways.",
    },
  },
  {
    name: { de: "Restaurant Wolkenlos", en: "Wolkenlos restaurant" },
    lat: 53.99575093404265,
    lng: 10.79362905795249,
    description: {
      de: "Restaurant auf der Seeschlösschenbrücke direkt über der Ostsee.",
      en: "A restaurant on Seeschlösschen pier, right above the Baltic Sea.",
    },
  },
  {
    name: { de: "Ferienhaus", en: "Holiday home" },
    lat: 53.99749298663205,
    lng: 10.76833728094691,
    description: {
      de: "Unser Ausgangspunkt in Timmendorfer Strand.",
      en: "Our base in Timmendorfer Strand.",
    },
  },
  {
    name: { de: "Alt-Travemünde", en: "Old Travemünde" },
    lat: 53.9566035,
    lng: 10.8687975,
    description: {
      de: "Die historische Vorderreihe im Zentrum von Travemünde.",
      en: "The historic Vorderreihe in the centre of Travemünde.",
    },
  },
  {
    name: { de: "Softeis bei Tonegutti", en: "Soft ice cream at Tonegutti" },
    lat: 53.999665,
    lng: 10.7739598,
    description: {
      de: "Der eingeplante Eis-Stopp auf dem Rückweg.",
      en: "Our planned ice-cream stop on the way home.",
    },
  },
  {
    name: { de: "Adventure Golf Sierksdorf", en: "Adventure Golf Sierksdorf" },
    lat: 54.0727469,
    lng: 10.7856774,
    description: {
      de: "Abenteuer-Minigolf im Ferienpark Sierksdorf.",
      en: "Adventure mini golf in Sierksdorf holiday park.",
    },
  },
  {
    name: { de: "MEET'n move Bowling", en: "MEET'n move Bowling" },
    lat: 54.0724591,
    lng: 10.7817673,
    description: {
      de: "Bowling und eine gute Schlechtwetter-Alternative.",
      en: "Bowling and a good option for a rainy day.",
    },
  },
  {
    name: { de: "Kutter 4 auf Rügen", en: "Kutter 4 on Rügen" },
    lat: 54.51483,
    lng: 13.64891,
    description: {
      de: "Die große Fischtheke bei Sassnitz.",
      en: "The large fish counter near Sassnitz.",
    },
  },
  {
    name: { de: "Top Motel Sassnitz", en: "Top Motel Sassnitz" },
    lat: 54.5145627,
    lng: 13.6045136,
    description: {
      de: "Zwischenstopp im Gewerbepark Sassnitz.",
      en: "A stopover in Sassnitz.",
    },
  },
  {
    name: { de: "Störtebeker Festspiele", en: "Störtebeker Festival" },
    lat: 54.4759149,
    lng: 13.4462776,
    description: {
      de: "Freilichttheater am Großen Jasmunder Bodden in Ralswiek.",
      en: "Open-air theatre on the Großer Jasmunder Bodden in Ralswiek.",
    },
  },
];

export const highlights = [
  {
    number: "01",
    title: { de: "Eishalle Timmendorf", en: "Timmendorf ice rink" },
    kind: { de: "Bewegung", en: "Active" },
    text: {
      de: "Eislaufen als Kontrastprogramm zu Strand und Meer – und eine sichere Idee bei norddeutschem Wetter.",
      en: "Ice skating as a change from beach and sea — and a reliable plan for northern weather.",
    },
  },
  {
    number: "02",
    title: { de: "Wolkenlos", en: "Wolkenlos" },
    kind: { de: "Meerblick", en: "Sea view" },
    text: {
      de: "Abendessen auf der Seeschlösschenbrücke, mit dem Wasser direkt unter uns.",
      en: "Dinner on Seeschlösschen pier, with the water directly beneath us.",
    },
  },
  {
    number: "03",
    title: {
      de: "Softeis auf dem Rückweg",
      en: "Soft ice cream on the way home",
    },
    kind: { de: "Kleine Tradition", en: "Little tradition" },
    text: {
      de: "Ein guter Urlaub braucht keine großen Programmpunkte für jeden Moment.",
      en: "A good holiday does not need a grand plan for every moment.",
    },
  },
  {
    number: "04",
    title: { de: "Adventure Golf", en: "Adventure golf" },
    kind: { de: "Familienausflug", en: "Family outing" },
    text: {
      de: "Eine spielerische Runde in Sierksdorf, nicht weit von Timmendorfer Strand.",
      en: "A playful round in Sierksdorf, not far from Timmendorfer Strand.",
    },
  },
  {
    number: "05",
    title: { de: "Störtebeker auf Rügen", en: "Störtebeker on Rügen" },
    kind: { de: "Großer Ausflug", en: "Big day out" },
    text: {
      de: "Freilichttheater am Wasser – der weiteste, aber vielleicht eindrucksvollste Abstecher.",
      en: "Open-air theatre by the water — our furthest, but perhaps most memorable excursion.",
    },
  },
];

export const copy = {
  de: {
    title: "Ostsee 2026 — Timmendorfer Strand",
    description:
      "Unser Familienurlaub an der Ostsee: Timmendorfer Strand, Lübeck, Travemünde und ein Abstecher nach Rügen.",
    eyebrow: "19.–27. August 2026",
    intro:
      "Acht Tage zwischen Strandkörben, Lübecker Gassen und kleinen Abenteuern.",
    byline: "Kay, Manu & Frieda",
    overview: "Überblick",
    map: "Karte",
    ideas: "Reiseideen",
    plan: "Unser Plan",
    planText:
      "Timmendorfer Strand ist unsere Basis. Von hier aus verbinden wir ruhige Strandtage mit Lübeck, Travemünde, Sierksdorf und einem größeren Ausflug nach Rügen.",
    places: "Orte, die wir uns merken",
    placesIntro:
      "Alle Ziele aus unserer ursprünglichen Sammlung – vom Ferienhaus bis zu den Störtebeker Festspielen.",
    openMap: "In OpenStreetMap öffnen",
    mapHint:
      "Die Karte zeigt alle 13 gemerkten Orte. Wähle einen Marker für Details.",
    home: "Zur Projektübersicht",
    language: "Sprache wählen",
    footer: "Eine persönliche Reiseplanung von Kay Löhmann.",
  },
  en: {
    title: "Baltic Sea 2026 — Timmendorfer Strand",
    description:
      "Our family holiday on the Baltic Sea: Timmendorfer Strand, Lübeck, Travemünde, and a trip to Rügen.",
    eyebrow: "19–27 August 2026",
    intro:
      "Eight days among beach chairs, Lübeck's old lanes, and small adventures.",
    byline: "Kay, Manu & Frieda",
    overview: "Overview",
    map: "Map",
    ideas: "Travel ideas",
    plan: "Our plan",
    planText:
      "Timmendorfer Strand is our base. From here, we combine relaxed beach days with Lübeck, Travemünde, Sierksdorf, and a longer trip to Rügen.",
    places: "Places to remember",
    placesIntro:
      "Every destination from our original collection — from the holiday home to the Störtebeker Festival.",
    openMap: "Open in OpenStreetMap",
    mapHint: "The map shows all 13 saved places. Select a marker for details.",
    home: "Back to all projects",
    language: "Choose language",
    footer: "A personal travel plan by Kay Löhmann.",
  },
};
