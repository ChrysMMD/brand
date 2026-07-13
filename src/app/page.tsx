import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";
import { ProjectCarousel } from "@/components/sections/Projects/ProjectCarousel";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          minHeight: "100vh",
          background: "var(--color-background)",
        }}
      >
        <Hero />
        <ProjectCarousel />
      </main>
    </>
  );
}
