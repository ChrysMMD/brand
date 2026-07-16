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
  external?: boolean;
};

export function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  nav = "none",
  disabled = false,
  className = "",
  external = false,
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
    if (external) {
      return (
        <a href={href} className={classNames} target="_blank" rel="noreferrer">
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classNames}>
        {content}
      </Link>
    );
  }
}
