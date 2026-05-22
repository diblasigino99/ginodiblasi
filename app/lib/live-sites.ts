export type LiveSite = {
  title: string;
  category: string;
  description: string;
  href: string;
  image: string;
};

export const liveSites: LiveSite[] = [
  {
    title: "La Casa Dei Limoni",
    category: "Live Website",
    description:
      "A published hospitality website with a warm destination feel, built around atmosphere, place, and a polished guest-facing experience.",
    href: "https://www.lacasasdeilimoni.com",
    image: "/live-sites/la-casas-dei-limoni.png",
  },
  {
    title: "Infinity HVAC LI",
    category: "Live Website",
    description:
      "A live local service website designed to give homeowners a clear, trustworthy way to understand services and get in touch.",
    href: "https://infinityhvacli.com",
    image: "/live-sites/infinity-hvac-li.png",
  },
];
