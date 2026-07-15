import Image from "next/image";
import { processSteps } from "./process.data";
import styles from "./Timeline.module.css";

export function Timeline() {
  return (
    <div className={styles.timeline}>
      <div className={styles.line} />

      {processSteps.map((step) => {
        const Icon = step.icon;

        return (
          <article
            key={step.number}
            className={styles.step}
            data-number={step.number}
          >
            <div className={styles.icon}>
              <Icon size={28} strokeWidth={1.75} />
            </div>

            <h3 className={styles.title}>{step.title}</h3>
            <p className={styles.subtitle}>{step.subtitle}</p>
            <p className={styles.description}>{step.description}</p>
          </article>
        );
      })}

      <Image
        src="/images/process/doodle_bulb.svg"
        alt=""
        width={180}
        height={180}
        className={`${styles.doodle} ${styles.bulb}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_research.svg"
        alt=""
        width={180}
        height={180}
        className={`${styles.doodle} ${styles.research}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_feedback.svg"
        alt=""
        width={180}
        height={180}
        className={`${styles.doodle} ${styles.feedback}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_compound.svg"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.compound}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_lookandfeel.svg"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.lookandfeel}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_star1.svg"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.star1}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_star2.svg"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.star2}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_star3.svg"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.star3}`}
        aria-hidden="true"
      />

      <Image
        src="/images/process/doodle_star4.svg"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.star4}`}
        aria-hidden="true"
      />
    </div>
  );
}
