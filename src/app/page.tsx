import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";
import { ProjectCarousel } from "@/components/sections/Projects/ProjectCarousel";
import { Container } from "@/components/layouts/Container/Container";
import { Section } from "@/components/layouts/Section/Section";

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
        <Section id="hero" variant="hero">
          <Container size="xl">
            <Hero />
          </Container>
        </Section>

        <Section id="projects" variant="projects">
          <Container size="xl">
            <ProjectCarousel />
          </Container>
        </Section>
      </main>
    </>
  );
}
