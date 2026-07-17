import type { CaseStudy } from "@/types/caseStudy";

export const caseStudies: CaseStudy[] = [
  {
    slug: "tusmoerke",

    hero: {
      eyebrow: "Case Study",

      title: "Tusmørke",

      description:
        "Designed and developed a full-stack platform that helps LARP organizers and players manage bookings, territories and essential game information in one intuitive mobile experience.",

      divider: "/images/projectScene/tusmoerke/line.svg",

      role: ["UX/UI Designer", "Frontend Developer", "Design System"],

      tools: ["Figma", "React", "Next.js", "TypeScript", "Supabase"],

      type: "Graduation Project",

      scene: {
        background: "/images/cases/tusmoerke/case_desk_tus.png",
      },
    },

    challenge: {
      eyebrow: "The Challenge",
      title: "The Challenge",

      challenges: [
        {
          title: "Scattered Information",
          description:
            "Players relied on multiple platforms to find important game information.",
        },
        {
          title: "Booking Friction",
          description:
            "Reserving private scenes required unnecessary steps and navigation.",
        },
        {
          title: "Territory Overview",
          description:
            "Players lacked a quick overview of changing territory ownership and events.",
        },
      ],

      image: "/images/cases/tusmoerke/challenge_bg.png",
    },

    research: {
      eyebrow: "Research",
      title: "Understanding the users",
      description:
        "I explored how players prepared for events, where they found information and which parts of their existing workflow created unnecessary friction.",

      items: [
        {
          title: "User interviews",
          description:
            "Conversations with players helped uncover their habits, needs and frustrations.",
          image: {
            src: "/images/case-studies/tusmoerke/research-interviews.webp",
            alt: "Research notes from interviews with Tusmørke players",
          },
        },
        {
          title: "Existing workflow",
          description:
            "I mapped the different tools and platforms players used before and during events.",
          image: {
            src: "/images/case-studies/tusmoerke/research-workflow.webp",
            alt: "Overview of the players' existing workflow",
          },
        },
        {
          title: "Key insights",
          description:
            "The research was organised into recurring needs and pain points that could guide the solution.",
          image: {
            src: "/images/case-studies/tusmoerke/research-insights.webp",
            alt: "Organised research findings and key user insights",
          },
        },
      ],
    },

    process: {
      eyebrow: "The Process",
      title: "From idea to working product",
      description:
        "The project followed an iterative process from early discovery and definition to design, development and testing.",

      steps: [
        {
          title: "Discover",
          description:
            "I explored the community, its users and their existing ways of finding and managing information.",
          image: {
            src: "/images/case-studies/tusmoerke/process-discover.webp",
            alt: "Discover phase of the Tusmørke design process",
          },
        },
        {
          title: "Define",
          description:
            "Research findings were transformed into clear user needs, priorities and a focused problem statement.",
          image: {
            src: "/images/case-studies/tusmoerke/process-define.webp",
            alt: "Define phase of the Tusmørke design process",
          },
        },
        {
          title: "Ideate",
          description:
            "I explored user flows, sketches and wireframes before committing to the final direction.",
          image: {
            src: "/images/case-studies/tusmoerke/process-ideate.webp",
            alt: "Ideate phase of the Tusmørke design process",
          },
        },
        {
          title: "Design",
          description:
            "The interface and reusable design system were developed in Figma with a strong mobile-first focus.",
          image: {
            src: "/images/case-studies/tusmoerke/process-design.webp",
            alt: "Design phase of the Tusmørke design process",
          },
        },
        {
          title: "Develop",
          description:
            "The finished experience was built with Next.js, React, Supabase and the Google Sheets API.",
          image: {
            src: "/images/case-studies/tusmoerke/process-develop.webp",
            alt: "Development phase of the Tusmørke project",
          },
        },
      ],
    },

    designHighlights: {
      eyebrow: "Design",
      title: "Design highlights",
      description:
        "The visual identity balances the dark atmosphere of the Tusmørke universe with a clear and practical interface.",

      highlights: [],
    },

    platform: {
      eyebrow: "The Solution",
      title: "The platform in action",
      description:
        "The final platform gives players quick access to the tools they need before and during an event.",

      screens: [],
    },

    implementation: {
      eyebrow: "Development",
      title: "Building the platform",
      description:
        "The application combines a modern frontend with authentication, realtime data and an existing booking workflow.",

      technologies: [
        {
          name: "Next.js",
          description:
            "Application structure, routing and server-side functionality.",
        },
        {
          name: "React",
          description: "Reusable components and interactive user interfaces.",
        },
        {
          name: "Supabase",
          description:
            "Authentication, database storage and realtime territory updates.",
        },
        {
          name: "Google Sheets API",
          description:
            "Integration with the community's existing event booking system.",
        },
        {
          name: "Vercel",
          description: "Deployment and hosting of the finished application.",
        },
      ],

      features: [
        "Supabase authentication",
        "Private notes with CRUD functionality",
        "Realtime territory updates",
        "Booking and waiting-list integration",
        "Responsive mobile-first interface",
      ],
    },

    reflection: {
      eyebrow: "Reflection",
      title: "What I learned",
      description:
        "Tusmørke gave me experience taking a digital product through the full process from research and UX decisions to development and deployment.",

      learned: [
        "Turning qualitative research into clear product priorities",
        "Building reusable interfaces from a design system",
        "Connecting multiple external services in one application",
        "Balancing technical constraints with user needs",
      ],

      challenges: [
        "Integrating an existing Google Sheets booking workflow",
        "Managing realtime data consistently across users",
        "Keeping several connected features simple on mobile",
      ],

      improvements: [
        "Add push notifications for booking and territory updates",
        "Expand usability testing with more active players",
        "Improve offline support during events",
      ],
    },
  },
];

export function getCaseStudyBySlug(slug: string) {
  return caseStudies.find((caseStudy) => caseStudy.slug === slug);
}
