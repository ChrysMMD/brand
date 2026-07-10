export type Project = {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  sceneImage: string;
  thumbnailImage: string;
  imageAlt: string;
  roles: string[];
  techStack: string[];
  href?: string;
  status?: "published" | "coming-soon";
};

export const projects: Project[] = [
  {
    id: "tusmoerke",
    number: "01",
    title: "Tusmørke",
    subtitle: "UX/UI · Full-stack Web App",
    description:
      "A web app for a live action roleplay community. Manage territories in real time, handle bookings and waiting lists, and keep information organized — all in one place.",
    sceneImage: "/images/projects/tusmoerke-scene.webp",
    thumbnailImage: "/images/projects/tusmoerke-thumbnail.webp",
    imageAlt:
      "Tusmørke project scene showing the mobile platform and its main features",
    roles: ["UX Research", "UX/UI Design", "Frontend Development", "Branding"],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Figma",
    ],
    href: "/projects/tusmoerke",
    status: "published",
  },
  {
    id: "project-two",
    number: "02",
    title: "New project",
    subtitle: "Under development",
    description:
      "A new case study is currently being prepared and will be added soon.",
    sceneImage: "/images/projects/launching-soon-scene.webp",
    thumbnailImage: "/images/projects/launching-soon-thumbnail.webp",
    imageAlt: "Preview announcing an upcoming portfolio project",
    roles: ["UX/UI Design", "Frontend Development"],
    techStack: ["Next.js", "React", "Figma"],
    status: "coming-soon",
  },
  {
    id: "project-three",
    number: "03",
    title: "New project",
    subtitle: "Under development",
    description:
      "Another project is currently being refined before publication.",
    sceneImage: "/images/projects/launching-soon-scene.webp",
    thumbnailImage: "/images/projects/launching-soon-thumbnail.webp",
    imageAlt: "Preview announcing an upcoming portfolio project",
    roles: ["Digital Design", "Frontend Development"],
    techStack: ["React", "TypeScript", "Figma"],
    status: "coming-soon",
  },
];
