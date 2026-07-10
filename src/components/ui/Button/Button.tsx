import Link from "next/link";
import styles from "./Button.module.css";
import { Arrow } from "@/components/ui/icons/Arrow/Arrow";

type ButtonVariant = "primary" | "secondary" | "simple";
type ButtonNav = "none" | "next" | "previous";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit" | "reset";
  variant?: ButtonVariant;
  nav?: ButtonNav;
  disabled?: boolean;
  className?: string;
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  nav = "none",
  disabled = false,
  className = "",
}: ButtonProps) {
  const classNames = [
    styles.button,
    styles[variant],
    nav !== "none" ? styles[nav] : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const arrow =
    nav === "none" ? null : (
      <Arrow direction={nav === "previous" ? "left" : "right"} />
    );

  const content = (
    <>
      {nav === "previous" && arrow}
      <span>{children}</span>
      {nav === "next" && arrow}
    </>
  );

  if (href && !disabled) {
    return (
      <Link href={href} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={classNames} disabled={disabled}>
      {content}
    </button>
  );
}
