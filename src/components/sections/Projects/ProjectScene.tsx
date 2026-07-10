import Image from "next/image";
import { Button } from "@/components/ui/Button/Button";
import type { Project } from "./projects.data";
import styles from "./ProjectScene.module.css";

type ProjectSceneProps = {
  project: Project;
};

export function ProjectScene({ project }: ProjectSceneProps) {
  const isPublished = project.status === "published";

  return (
    <article className={styles.scene} aria-labelledby={`${project.id}-title`}>
      <Image
        src={project.sceneImage}
        alt={project.imageAlt}
        width={1220}
        height={730}
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 1220px"
        priority={project.id === "tusmoerke"}
      />

      <div className={styles.content}>
        <h3 id={`${project.id}-title`} className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.description}>{project.description}</p>

        <div className={styles.information}>
          <div className={styles.column}>
            <h4 className={styles.subheading}>My role</h4>

            <ul className={styles.roleList}>
              {project.roles.map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <h4 className={styles.subheading}>Tech stack</h4>

            <ul className={styles.tags}>
              {project.techStack.map((technology) => (
                <li key={technology} className={styles.tag}>
                  {technology}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isPublished && project.href ? (
          <Button href={project.href} variant="secondary" nav="next">
            Learn more
          </Button>
        ) : (
          <p className={styles.comingSoon}>Case study coming soon</p>
        )}
      </div>
    </article>
  );
}
