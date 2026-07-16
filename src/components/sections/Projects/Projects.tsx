import { ProjectCarousel } from "./ProjectCarousel";
import styles from "./Projects.module.css";

export function Projects() {
  return (
    <div className={styles.projects}>
      <h1 className={styles.heading}>Selected projects</h1>

      <ProjectCarousel />
    </div>
  );
}
