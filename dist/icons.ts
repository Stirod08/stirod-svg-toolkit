export const icons = [
  "astro",
  "css3",
  "facebook",
  "html5",
  "instagran",
  "javascript",
  "linkedin",
  "linux",
  "meta",
  "nextjs",
  "react",
  "tailwind",
  "twitch",
  "twitter",
  "whatsapp",
  "youtube"
] as const;

export type IconName = typeof icons[number];
