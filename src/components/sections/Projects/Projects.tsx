import { Container } from "@/components/layouts/Container/Container";
import { Section } from "@/components/layouts/Section/Section";
import { ProjectCarousel } from "./ProjectCarousel";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <Section
      id="projects"
      spacing="lg"
      className={styles.projects}
      aria-labelledby="projects-heading"
    >
      <Container size="xl">
        <h2 id="projects-heading" className={styles.heading}>
          Selected Projects
        </h2>

        <ProjectCarousel />
      </Container>
    </Section>
  );
}
