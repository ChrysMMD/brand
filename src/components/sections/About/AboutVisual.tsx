import Image from "next/image";
import styles from "./AboutVisual.module.css";

export function AboutVisual() {
  return (
    <div className={styles.visual}>
      <div className={styles.photoFrame}>
        <Image
          src="/images/about/astrid_aboutImg.png"
          alt="Portrait of Astrid"
          fill
          className={styles.photo}
          sizes="(max-width: 900px) 80vw, 420px"
        />
      </div>

      <div className={styles.funFacts}>
        <Image
          src="/images/about/paperWtape.png"
          alt=""
          fill
          className={styles.funFactsCard}
          sizes="260px"
        />

        <div className={styles.funFactsContent}>
          <h3 className={styles.funFactsTitle}>Fun facts</h3>

          <ul className={styles.funFactsList}>
            <li>Coffee-lover</li>
            <li>Roleplay enthusiast</li>
            <li>Dog-person</li>
            <li>Toddler-mom</li>
            <li>Gamer</li>
            <li>Nerd</li>
          </ul>
        </div>
      </div>

      <Image
        src="/images/about/doodle_leaf.png"
        alt=""
        width={120}
        height={120}
        className={`${styles.doodle} ${styles.leavesTop}`}
        aria-hidden="true"
      />

      <Image
        src="/images/about/doodle_leaf2.png"
        alt=""
        width={150}
        height={150}
        className={`${styles.doodle} ${styles.leavesBottom}`}
        aria-hidden="true"
      />

      <Image
        src="/images/about/doodle_thisisme.png"
        alt=""
        width={180}
        height={90}
        className={`${styles.doodle} ${styles.arrow}`}
        aria-hidden="true"
      />

      <Image
        src="/images/about/doodle_coffee.png"
        alt=""
        width={70}
        height={70}
        className={`${styles.doodle} ${styles.coffee}`}
        aria-hidden="true"
      />

      <Image
        src="/images/about/doodle_star.png"
        alt=""
        width={70}
        height={70}
        className={`${styles.doodle} ${styles.sparkles}`}
        aria-hidden="true"
      />
    </div>
  );
}
