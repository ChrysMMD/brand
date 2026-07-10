import styles from "./Arrow.module.css";

type ArrowDirection = "left" | "right";

type ArrowProps = {
  direction?: ArrowDirection;
  className?: string;
};

export function Arrow({ direction = "right", className = "" }: ArrowProps) {
  const classNames = [styles.arrow, styles[direction], className]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={classNames}
      width="20"
      height="12"
      viewBox="0 0 20 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M1 6H19M14 1L19 6L14 11"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
