import styles from "./Section.module.css";

type SectionSpacing = "sm" | "md" | "lg";

type SectionProps = {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  className?: string;
  id?: string;
};

export function Section({
  children,
  spacing = "md",
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
