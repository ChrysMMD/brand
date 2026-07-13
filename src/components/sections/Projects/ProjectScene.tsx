import Image from "next/image";
import type { Project } from "./projects.data";
import styles from "./ProjectScene.module.css";
import type { CSSProperties } from "react";

const particles = [
  {
    left: "38%",
    top: "64%",
    x1: "18px",
    x2: "-12px",
    y1: "-22px",
    y2: "-58px",
    size: "4px",
    duration: "7s",
    delay: "0s",
  },
  {
    left: "43%",
    top: "45%",
    x1: "-22px",
    x2: "14px",
    y1: "16px",
    y2: "-32px",
    size: "7px",
    duration: "9s",
    delay: "-3s",
  },
  {
    left: "49%",
    top: "72%",
    x1: "26px",
    x2: "8px",
    y1: "-30px",
    y2: "-76px",
    size: "3px",
    duration: "8s",
    delay: "-5s",
  },
  {
    left: "54%",
    top: "38%",
    x1: "-16px",
    x2: "24px",
    y1: "22px",
    y2: "-18px",
    size: "5px",
    duration: "10s",
    delay: "-2s",
  },
  {
    left: "59%",
    top: "58%",
    x1: "14px",
    x2: "-25px",
    y1: "-18px",
    y2: "-52px",
    size: "6px",
    duration: "8.5s",
    delay: "-6s",
  },
  {
    left: "64%",
    top: "30%",
    x1: "-28px",
    x2: "-8px",
    y1: "20px",
    y2: "-26px",
    size: "3px",
    duration: "11s",
    delay: "-4s",
  },
  {
    left: "69%",
    top: "67%",
    x1: "20px",
    x2: "-18px",
    y1: "-26px",
    y2: "-64px",
    size: "5px",
    duration: "9.5s",
    delay: "-7s",
  },
  {
    left: "74%",
    top: "48%",
    x1: "-12px",
    x2: "22px",
    y1: "18px",
    y2: "-38px",
    size: "4px",
    duration: "7.5s",
    delay: "-1s",
  },
  {
    left: "46%",
    top: "24%",
    x1: "24px",
    x2: "-16px",
    y1: "12px",
    y2: "-20px",
    size: "6px",
    duration: "12s",
    delay: "-8s",
  },
  {
    left: "61%",
    top: "82%",
    x1: "-20px",
    x2: "18px",
    y1: "-34px",
    y2: "-82px",
    size: "3px",
    duration: "10.5s",
    delay: "-5.5s",
  },
];

type ProjectSceneProps = {
  project: Project;
};

export function ProjectScene({ project }: ProjectSceneProps) {
  return (
    <div className={styles.scene} aria-hidden="true">
      <Image
        src={project.scene.background}
        alt=""
        fill
        priority={project.id === "tusmoerke"}
        className={styles.background}
        sizes="(max-width: 768px) 100vw, 65vw"
      />

      <div className={styles.particles} aria-hidden="true">
        {particles.map((particle, index) => (
          <span
            key={index}
            className={styles.particle}
            style={
              {
                "--particle-left": particle.left,
                "--particle-top": particle.top,
                "--particle-x-one": particle.x1,
                "--particle-x-two": particle.x2,
                "--particle-y-one": particle.y1,
                "--particle-y-two": particle.y2,
                "--particle-size": particle.size,
                "--particle-duration": particle.duration,
                "--particle-delay": particle.delay,
              } as CSSProperties
            }
          />
        ))}
      </div>

      <div className={styles.objects}>
        {project.scene.mobileShadow && (
          <Image
            src={project.scene.mobileShadow}
            alt=""
            width={360}
            height={42}
            className={`${styles.sceneObject} ${styles.mobileShadow}`}
          />
        )}

        {project.scene.mobile && (
          <Image
            src={project.scene.mobile}
            alt=""
            width={459}
            height={456}
            className={`${styles.sceneObject} ${styles.mobile}`}
          />
        )}

        {project.scene.bookingCard && (
          <Image
            src={project.scene.bookingCard}
            alt=""
            width={205}
            height={294}
            className={`${styles.sceneObject} ${styles.bookingCard}`}
          />
        )}

        {project.scene.frontPageCard && (
          <Image
            src={project.scene.frontPageCard}
            alt=""
            width={128}
            height={255}
            className={`${styles.sceneObject} ${styles.frontPageCard}`}
          />
        )}

        {project.scene.swipe && (
          <Image
            src={project.scene.swipe}
            alt=""
            width={280}
            height={90}
            className={`${styles.sceneObject} ${styles.swipe}`}
          />
        )}
      </div>

      {project.scene.beam && (
        <Image
          src={project.scene.beam}
          alt=""
          width={420}
          height={730}
          className={`${styles.sceneObject} ${styles.beam}`}
        />
      )}

      {/* Doodles */}

      {project.scene.doodleBooking && (
        <Image
          src={project.scene.doodleBooking}
          alt=""
          width={120}
          height={120}
          className={`${styles.sceneObject} ${styles.doodleBooking}`}
        />
      )}

      {project.scene.doodleInteractive && (
        <Image
          src={project.scene.doodleInteractive}
          alt=""
          width={120}
          height={120}
          className={`${styles.sceneObject} ${styles.doodleInteractive}`}
        />
      )}

      {project.scene.doodleTerritory && (
        <Image
          src={project.scene.doodleTerritory}
          alt=""
          width={120}
          height={120}
          className={`${styles.sceneObject} ${styles.doodleTerritory}`}
        />
      )}
    </div>
  );
}
