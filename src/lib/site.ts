export const site = {
  url: "https://eliyahu-for-artlist.vercel.app",
  name: "Eliyahu — for Artlist",
  email: "eliyahuofficialmusic@gmail.com",

  fullName: "Eliyahu Levi",
  github: "https://github.com/eliyahuOfficial",
  linkedin: "https://www.linkedin.com/in/eliyahuofficial/",
  whatsapp: "+972528393196",
  calendly: "",
  // Two Spotify artist profiles — Eliyahu uses both aliases
  spotifyArtistA: "https://open.spotify.com/artist/42Cgi8xQ1mM8ZizCeJZK46",
  spotifyArtistB: "https://open.spotify.com/artist/7Jjt3yNageTRKFs8qkCLHt",
  spotifyEmbedA:
    "https://open.spotify.com/embed/artist/42Cgi8xQ1mM8ZizCeJZK46?utm_source=generator",
  spotifyEmbedB:
    "https://open.spotify.com/embed/artist/7Jjt3yNageTRKFs8qkCLHt?utm_source=generator",

  artistAlias: "Eliyahu (IL)",
  yearsCoding: 5,
  currentRole: "Frontend developer",
  location: "Tel Aviv, Israel",
  photo: "/eliyahu-bg.jpg",
} as const;

export type Locale = "en" | "he";
export const locales: Locale[] = ["en", "he"];
export const defaultLocale: Locale = "en";
