import Image from "next/image";
import {
  BriefcaseBusiness,
  Folder,
  Layers3,
  UserRound,
  Wrench,
} from "lucide-react";

import type { CaseHeroData } from "@/types/caseStudy";

import CaseHeroScene from "./CaseHeroScene/CaseHeroScene";

import styles from "./CaseHero.module.css";

type CaseHeroProps = {
  data: CaseHeroData;
};

export function CaseHero({ data }: CaseHeroProps) {
  return (
    <section className={styles.hero}>
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
              <div className={styles.metaIconRing}>
                <UserRound
                  className={styles.metaIcon}
                  aria-hidden="true"
                  strokeWidth={1}
                />
              </div>

              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>My Role</span>

                <div className={styles.metaValue}>
                  {data.role.map((role) => (
                    <span key={role}>{role}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconRing}>
                <Wrench
                  className={styles.metaIcon}
                  aria-hidden="true"
                  strokeWidth={1}
                />
              </div>

              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>Tools</span>

                <div className={styles.metaValue}>
                  {data.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.metaItem}>
              <div className={styles.metaIconRing}>
                <Folder
                  className={styles.metaIcon}
                  aria-hidden="true"
                  strokeWidth={1}
                />
              </div>

              <div className={styles.metaContent}>
                <span className={styles.metaLabel}>Type</span>

                <div className={styles.metaValue}>
                  <span>{data.type}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CaseHeroScene scene={data.scene} />
      </div>
    </section>
  );
}
