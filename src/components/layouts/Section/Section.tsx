import styles from "./Section.module.css";

type SectionSpacing = "sm" | "md" | "lg";

type SectionProps = {
  children: React.ReactNode;
  spacing?: SectionSpacing;
  className?: string;
  id?: string;
  variant?: "default" | "hero" | "projects" | "about";
};

export function Section({
  children,
  spacing = "sm",
  className = "",
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${styles.section} ${styles[variant]} ${styles[spacing]} ${className}`}
    >
      {children}
    </section>
  );
}
