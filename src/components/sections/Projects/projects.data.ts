import {
  type LucideIcon,
  Binoculars,
  PanelsTopLeft,
  CodeXml,
  Diamond,
} from "lucide-react";

export type ProjectSceneAssets = {
  background: string;

  // Tusmørke
  mobile?: string;
  mobileShadow?: string;
  swipe?: string;
  bookingCard?: string;
  frontPageCard?: string;

  // Launching Soon
  browser?: string;
  browserShadow?: string;
  comingSoonCard?: string;
  lock?: string;
  doodleIdea?: string;

  // Shared
  beam?: string;

  // Tusmørke doodles
  doodleInteractive?: string;
  doodleTerritory?: string;
  doodleBooking?: string;
};

export type ProjectRole = {
  label: string;
  icon: LucideIcon;
};

export type ProjectProgress = {
  label: string;
  status: string;
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
  progress?: ProjectProgress[];

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
      "I'm currently crafting a new experience from the ground up. It's still taking shape, but I can't wait to share it with you.",
    status: "coming-soon",

    roles: [],
    techStack: [],

    progress: [
      {
        label: "Research",
        status: "Complete",
        icon: Binoculars,
      },
      {
        label: "Design",
        status: "In progress",
        icon: PanelsTopLeft,
      },
      {
        label: "Development",
        status: "In progress",
        icon: CodeXml,
      },
    ],

    scene: {
      background: "/images/projectScene/launching/background.png",
      lock: "/images/projectScene/launching/lock.png",
    },

    thumbnailImage: "/images/thumbnails/thumbnail_launching.webp",
    thumbnailAlt: "Preview of an upcoming project",
  },

  {
    id: "project-three",
    number: "03",
    title: "Launching soon",
    subtitle: "New case study",
    description:
      "I'm currently crafting a new experience from the ground up. It's still taking shape, but I can't wait to share it with you.",
    status: "coming-soon",

    roles: [],
    techStack: [],

    progress: [
      {
        label: "Research",
        status: "In progress",
        icon: Binoculars,
      },
      {
        label: "Design",
        status: "In progress",
        icon: PanelsTopLeft,
      },
      {
        label: "Development",
        status: "In progress",
        icon: CodeXml,
      },
    ],

    scene: {
      background: "/images/projectScene/launching/background.png",
      lock: "/images/projectScene/launching/lock.png",
    },

    thumbnailImage: "/images/thumbnails/thumbnail_launching.webp",
    thumbnailAlt: "Preview of an upcoming project",
  },
];
