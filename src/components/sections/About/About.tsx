import { AboutContent } from "./AboutContent";
import { AboutVisual } from "./AboutVisual";
import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.about}>
      <AboutContent />
      <AboutVisual />
    </div>
  );
}
