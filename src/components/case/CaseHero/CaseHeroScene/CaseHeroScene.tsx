import Image from "next/image";

import type { CaseHeroSceneData } from "@/types/caseStudy";

import styles from "./CaseHeroScene.module.css";

type CaseHeroSceneProps = {
  scene: CaseHeroSceneData;
};

export default function CaseHeroScene({ scene }: CaseHeroSceneProps) {
  return (
    <div className={styles.scene}>
      <Image
        src={scene.background}
        alt=""
        fill
        priority
        sizes="100vw"
        className={styles.background}
      />

      {scene.glow && (
        <Image src={scene.glow} alt="" fill className={styles.glow} />
      )}
    </div>
  );
}
