import { Button } from "@/components/ui/Button/Button";
import type { Project } from "./projects.data";
import styles from "./ProjectContent.module.css";

type ProjectContentProps = {
  project: Project;
};

export function ProjectContent({ project }: ProjectContentProps) {
  const isPublished = project.status === "published";

  return (
    <div
      className={styles.content}
      aria-labelledby={`${project.id}-project-title`}
    >
      <div className={styles.introduction}>
        <h3 id={`${project.id}-project-title`} className={styles.title}>
          {project.title}
        </h3>

        <span className={styles.decoration} aria-hidden="true" />

        <p className={styles.description}>{project.description}</p>
      </div>

      <div className={styles.details}>
        <div className={styles.detailGroup}>
          <h4 className={styles.subheading}>My role</h4>

          <ul className={styles.roleList}>
            {project.roles.map((role) => (
              <li className={styles.role} key={role.label}>
                <span className={styles.roleIcon} aria-hidden="true" />

                <span>{role.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.detailGroup}>
          <h4 className={styles.subheading}>Tech stack</h4>

          <ul className={styles.techStack}>
            {project.techStack.map((technology) => (
              <li className={styles.tag} key={technology}>
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.action}>
        {isPublished && project.href ? (
          <Button href={project.href} variant="secondary" nav="next">
            Learn more
          </Button>
        ) : (
          <p className={styles.comingSoon}>Case study coming soon</p>
        )}
      </div>
    </div>
  );
}
