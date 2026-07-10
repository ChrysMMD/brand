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
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-label={`Show ${project.title}`}
      className={[styles.thumbnail, isActive ? styles.active : ""]
        .filter(Boolean)
        .join(" ")}
      onClick={onSelect}
    >
      <div className={styles.imageWrapper}>
        <Image
          src={project.thumbnailImage}
          alt=""
          width={181}
          height={108}
          className={styles.image}
        />
      </div>

      <div className={styles.content}>
        <span className={styles.number}>{project.number}</span>

        <span className={styles.title}>{project.title}</span>

        <span className={styles.subtitle}>{project.subtitle}</span>
      </div>
    </button>
  );
}
