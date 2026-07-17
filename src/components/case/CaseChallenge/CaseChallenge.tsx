import Image from "next/image";

import type { CaseChallengeData } from "@/types/caseStudy";

import styles from "./CaseChallenge.module.css";

type CaseChallengeProps = {
  data: CaseChallengeData;
};

export default function CaseChallenge({ data }: CaseChallengeProps) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {data.eyebrow && <p className={styles.eyebrow}>{data.eyebrow}</p>}

        <div className={styles.grid}>
          <h2 className={styles.title}>{data.title}</h2>

          <div className={styles.challenges}>
            {data.challenges.map((challenge) => (
              <article className={styles.challenge} key={challenge.title}>
                <h3 className={styles.challengeTitle}>{challenge.title}</h3>

                <p className={styles.challengeDescription}>
                  {challenge.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        {data.image && (
          <div className={styles.imageWrapper}>
            <Image
              src={data.image}
              alt={data.imageAlt ?? ""}
              fill
              sizes="(max-width: 768px) 100vw, 1220px"
              className={styles.image}
            />
          </div>
        )}
      </div>
    </section>
  );
}
