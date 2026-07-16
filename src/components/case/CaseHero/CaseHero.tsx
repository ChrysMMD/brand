import Image from "next/image";
import { UserRound, Folder, Wrench } from "lucide-react";

import type { CaseHeroData } from "@/types/caseStudy";

import styles from "./CaseHero.module.css";

type CaseHeroProps = {
  data: CaseHeroData;
};

export function CaseHero({ data }: CaseHeroProps) {
  return (
    <section className={styles.hero}>
      <Image
        src={data.background}
        alt=""
        fill
        priority
        className={styles.background}
        sizes="100vw"
      />

      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          {data.eyebrow && (
            <span className={styles.eyebrow}>{data.eyebrow}</span>
          )}

          <h1 className={styles.title}>{data.title}</h1>

          <p className={styles.description}>{data.description}</p>

          <Image
            src={data.divider}
            alt=""
            width={560}
            height={40}
            aria-hidden="true"
            className={styles.divider}
          />

          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <UserRound className={styles.metaIcon} aria-hidden="true" />
              </div>

              <div>
                <span className={styles.metaLabel}>My Role</span>

                <div className={styles.metaValue}>
                  {Array.isArray(data.role) ? (
                    data.role.map((role) => <span key={role}>{role}</span>)
                  ) : (
                    <span>{data.role}</span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <Wrench className={styles.metaIcon} aria-hidden="true" />
              </div>

              <div>
                <span className={styles.metaLabel}>Tools</span>

                <div className={styles.metaValue}>
                  {data.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconWrap}>
                <Folder className={styles.metaIcon} aria-hidden="true" />
              </div>

              <div>
                <span className={styles.metaLabel}>Type</span>

                <div className={styles.metaValue}>
                  <span>{data.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.glow} />

          <Image
            src={data.mobile}
            alt="Tusmørke application shown on a mobile phone"
            width={459}
            height={456}
            priority
            sizes="(max-width: 768px) 70vw, 620px"
            className={styles.mobile}
          />
        </div>
      </div>
    </section>
  );
}
