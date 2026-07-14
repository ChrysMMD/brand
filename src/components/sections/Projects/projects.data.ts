import { type LucideIcon } from "lucide-react";
import { Binoculars, PanelsTopLeft, CodeXml, Diamond } from "lucide-react";

export type ProjectSceneAssets = {
  background: string;
  mobile?: string;
  mobileShadow?: string;
  swipe?: string;
  bookingCard?: string;
  frontPageCard?: string;
  beam?: string;
  doodleInteractive?: string;
  doodleTerritory?: string;
  doodleBooking?: string;
};

export type ProjectRole = {
  label: string;
  icon: LucideIcon;
};

export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  href?: string;
  status: "published" | "coming-soon";

  roles: ProjectRole[];
  techStack: string[];

  scene: ProjectSceneAssets;

  thumbnailImage: string;
  thumbnailAlt: string;
};

export const projects: Project[] = [
  {
    id: "tusmoerke",
    number: "01",
    title: "Tusmørke",
    subtitle: "UX/UI · Full-stack Web App",
    description:
      "A web app for a live action roleplay community. Manage territories in real time, handle bookings and waiting lists, and keep information organized — all in one place.",
    href: "/projects/tusmoerke",
    status: "published",

    roles: [
      { label: "UX Research", icon: Binoculars },
      { label: "UX/UI Design", icon: PanelsTopLeft },
      { label: "Frontend Development", icon: CodeXml },
      { label: "Branding", icon: Diamond },
    ],

    scene: {
      background: "/images/projectScene/tusmoerke/Background.png",
      mobile: "/images/projectScene/tusmoerke/tus_mobil.png",
      mobileShadow: "/images/projectScene/tusmoerke/scene_shadow_mobile.png",
      bookingCard: "/images/projectScene/tusmoerke/tus_booking.png",
      frontPageCard: "/images/projectScene/tusmoerke/tus_home.png",
      swipe: "/images/projectScene/tusmoerke/tus_swipe.png",
      beam: "/images/projectScene/tusmoerke/tus_beam.png",
      doodleInteractive:
        "/images/projectScene/tusmoerke/tus_doodle_interactive.png",
      doodleTerritory:
        "/images/projectScene/tusmoerke/tus_doodle_territory.png",
      doodleBooking: "/images/projectScene/tusmoerke/tus_doodle_booking.png",
    },

    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Figma",
    ],

    thumbnailImage: "/images/thumbnails/thumbnail_tusmoerke.webp",
    thumbnailAlt: "Preview of the Tusmørke project",
  },

  {
    id: "project-two",
    number: "02",
    title: "Launching soon",
    subtitle: "New case study",
    description:
      "A new project is currently being prepared and will be added soon.",
    status: "coming-soon",

    scene: {
      background: "/images/projects/launching/background.webp",
      mobile: "/images/projects/launching/scene-mobile.webp",
      mobileShadow: "/images/projects/launching/shadow-mobile.webp",
    },

    roles: [{ label: "UX Research", icon: Binoculars }],

    techStack: ["Figma"],

    thumbnailImage: "/images/thumbnails/thumbnail_launching.webp",
    thumbnailAlt: "Preview of an upcoming project",
  },

  {
    id: "project-three",
    number: "03",
    title: "Launching soon",
    subtitle: "New case study",
    description:
      "Another project is currently being refined before publication.",
    status: "coming-soon",

    roles: [{ label: "Digital Design", icon: PanelsTopLeft }],
    techStack: ["Figma"],

    scene: {
      background: "/images/projects/tusmoerke/background.webp",
      mobile: "/images/projects/tusmoerke/scene-mobile.webp",
      mobileShadow: "/images/projects/tusmoerke/shadow-mobile.webp",
    },

    thumbnailImage: "/images/thumbnails/thumbnail_launching.webp",
    thumbnailAlt: "Preview of an upcoming project",
  },
];
