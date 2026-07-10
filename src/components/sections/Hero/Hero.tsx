import { Container } from "@/components/layouts/Container/Container";
import { Section } from "@/components/layouts/Section/Section";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <Section className={styles.hero} spacing="lg">
      <Container size="xl">
        <div className={styles.layout}>
          <HeroContent />
          <HeroVisual />
        </div>
      </Container>
    </Section>
  );
}
