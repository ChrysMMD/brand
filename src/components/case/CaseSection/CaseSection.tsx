import styles from "./CaseSection.module.css";

type CaseSectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: React.ReactNode;
};

export default function CaseSection({
  id,
  eyebrow,
  title,
  description,
  children,
}: CaseSectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.header}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}

        <h2 className={styles.title}>{title}</h2>

        {description && <p className={styles.description}>{description}</p>}
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  );
}
