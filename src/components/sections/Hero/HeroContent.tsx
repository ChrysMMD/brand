import { Button } from "@/components/ui/Button/Button";
import styles from "./HeroContent.module.css";

export function HeroContent() {
  return (
    <div className={styles.content}>
      <p className={styles.eyebrow}>Hello, I&apos;m</p>

      <h1 className={styles.title}>
        Astrid
        <span>Jørgensen</span>
      </h1>

      <p className={styles.role}>
        UX/UI Designer &amp; Frontend Developer &amp; Digital Designer
      </p>

      <p className={styles.intro}>
        Creating intuitive products with a balance of creativity, technology and
        human-centered design.
      </p>

      <div className={styles.actions}>
        <Button href="#projects" variant="secondary" nav="next">
          View projects
        </Button>

        <Button href="#contact" variant="secondary" nav="next">
          Contact me
        </Button>
      </div>
    </div>
  );
}
