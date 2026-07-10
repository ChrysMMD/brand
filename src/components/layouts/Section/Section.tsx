import styles from "./Section.module.css";

type SectionSpacing = "sm" | "md" | "lg";

type SectionProps = {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  className?: string;
};

export function Section({
  children,
  spacing = "md",
  className = "",
}: SectionProps) {
  return (
    <section className={`${styles.section} ${styles[spacing]} ${className}`}>
      {children}
    </section>
  );
}
