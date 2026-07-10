import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";

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
        <Projects />
      </main>
    </>
  );
}
