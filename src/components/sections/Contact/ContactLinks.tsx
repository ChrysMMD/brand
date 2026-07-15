import { Button } from "@/components/ui/Button/Button";
import { contactLinks } from "./contact.data";
import styles from "./ContactLinks.module.css";
import Image from "next/image";

export function ContactLinks() {
  return (
    <div className={styles.links}>
      {contactLinks.map((item) => {
        const isExternal = item.href.startsWith("http");

        return (
          <a
            key={item.label}
            href={item.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className={styles.contactLink}
          >
            <span className={styles.icon} aria-hidden="true">
              <Image
                src={item.iconSrc}
                alt=""
                width={52}
                height={52}
                className={styles.iconImage}
              />
            </span>

            <span className={styles.info}>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.value}>{item.value}</span>
            </span>
          </a>
        );
      })}

      <div className={styles.button}>
        <Button href="/cv.pdf" variant="primary" nav="next">
          Download my CV
        </Button>
      </div>
    </div>
  );
}
