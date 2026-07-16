import { Navbar } from "@/components/ui/Navbar/Navbar";
import { Hero } from "@/components/sections/Hero/Hero";
import { Projects } from "@/components/sections/Projects/Projects";
import { Container } from "@/components/layouts/Container/Container";
import { Section } from "@/components/layouts/Section/Section";
import { About } from "@/components/sections/About/About";
import { WorkProcess } from "@/components/sections/WorkProcess/WorkProcess";
import { Contact } from "@/components/sections/Contact/Contact";
import { Footer } from "@/components/layouts/Footer/Footer";

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
            <Projects />
          </Container>
        </Section>

        <Section id="about" variant="about">
          <Container size="xl">
            <About />
          </Container>
        </Section>

        <Section id="process" variant="process">
          <Container size="xl">
            <WorkProcess />
          </Container>
        </Section>
      </main>

      <Footer />
    </>
  );
}
