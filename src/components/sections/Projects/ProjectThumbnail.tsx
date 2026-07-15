import Image from "next/image";
import type { Project } from "./projects.data";
import styles from "./ProjectThumbnail.module.css";

type ProjectThumbnailProps = {
  project: Project;
  isActive: boolean;
  onSelect: () => void;
};

export function ProjectThumbnail({
  project,
  isActive,
  onSelect,
}: ProjectThumbnailProps) {
  const thumbnailClasses = [styles.thumbnail, isActive ? styles.active : ""]
    .filter(Boolean)
    .join(" ");

  console.log(project.title, isActive);

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onSelect}
      className={thumbnailClasses}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.thumbnailImage}
          alt={project.thumbnailAlt}
          width={181}
          height={108}
          // className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.number}>{project.number}</span>
        <h4 className={styles.title}>{project.title}</h4>
        <p className={`${styles.caption} caption`}>{project.subtitle}</p>
      </div>
    </button>
  );
}
