"use client";

import { useState } from "react";
import { Arrow } from "@/components/ui/icons/Arrow/Arrow";
import { projects } from "./projects.data";
import { ProjectContent } from "./ProjectContent";
import { ProjectScene } from "./ProjectScene";
import { ProjectThumbnail } from "./ProjectThumbnail";
import styles from "./ProjectCarousel.module.css";

export function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];

  function showPreviousProject() {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
    );
  }

  function showNextProject() {
    setActiveIndex((currentIndex) =>
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function showProject(index: number) {
    setActiveIndex(index);
  }

  return (
    <div
      className={styles.carousel}
      aria-roledescription="carousel"
      aria-label="Selected projects"
    >
      <h1 className={styles.heading} aria-label="Selected projects">
        Selected projects
      </h1>

      <div className={styles.presentationArea}>
        <button
          type="button"
          className={`${styles.navigationButton} ${styles.previousButton}`}
          onClick={showPreviousProject}
          aria-label="Show previous project"
        >
          <Arrow direction="left" />
        </button>

        <div className={styles.presentation}>
          <ProjectScene key={activeProject.id} project={activeProject} />

          <ProjectContent project={activeProject} />
        </div>

        <button
          type="button"
          className={`${styles.navigationButton} ${styles.nextButton}`}
          onClick={showNextProject}
          aria-label="Show next project"
        >
          <Arrow direction="right" />
        </button>
      </div>

      <div className={styles.thumbnails}>
        {projects.map((project, index) => (
          <ProjectThumbnail
            key={project.id}
            project={project}
            isActive={index === activeIndex}
            onSelect={() => showProject(index)}
          />
        ))}
      </div>
    </div>
  );
}
