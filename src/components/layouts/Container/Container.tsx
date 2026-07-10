import styles from "./Container.module.css";

type ContainerSize = "sm" | "md" | "lg" | "xl";

type ContainerProps = {
  children: React.ReactNode;
  size?: ContainerSize;
  className?: string;
};

export function Container({
  children,
  size = "lg",
  className = "",
}: ContainerProps) {
  return (
    <div className={`${styles.container} ${styles[size]} ${className}`}>
      {children}
    </div>
  );
}
