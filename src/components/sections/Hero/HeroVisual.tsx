import Image from "next/image";
import styles from "./HeroVisual.module.css";

export function HeroVisual() {
  return (
    <div className={styles.visual}>
      <Image
        src="/images/hero/hero-image.png"
        alt="Astrid working on digital design and frontend projects"
        width={760}
        height={680}
        priority
        className={styles.image}
        sizes="(max-width: 768px) 100vw, 55vw"
      />
    </div>
  );
}
