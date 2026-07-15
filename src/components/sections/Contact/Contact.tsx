import { ContactContent } from "./ContactContent";
import { ContactLinks } from "./ContactLinks";
import styles from "./Contact.module.css";

export function Contact() {
  return (
    <div className={styles.contact}>
      <ContactContent />
      <ContactLinks />
    </div>
  );
}
