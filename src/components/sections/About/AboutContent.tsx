import { Button } from "@/components/ui/Button/Button";
import styles from "./AboutContent.module.css";

export function AboutContent() {
  return (
    <div className={styles.content}>
      <h2 className={`${styles.heading} displayL`}>About me</h2>

      <p className={`${styles.intro} h2`}>
        I’m a designer, developer and storyteller with a love for meaningful
        details and big ideas.
      </p>

      <div className={styles.body}>
        <p>
          I&apos;m a frontend developer and digital designer who loves creating
          products that feel intuitive, beautiful and meaningful.
        </p>

        <p>
          I believe the best digital experiences happen where thoughtful design,
          clean development and strong storytelling come together.
        </p>
      </div>

      <div className={styles.action}>
        <Button
          href="/cv.pdf"
          variant="primary"
          nav="next"
          className={styles.cvButton}
        >
          Download my CV
        </Button>
      </div>
    </div>
  );
}
