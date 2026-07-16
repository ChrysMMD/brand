import { Container } from "@/components/layouts/Container/Container";
import { Contact } from "@/components/sections/Contact/Contact";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <Container size="xl">
        <Contact />
      </Container>
    </footer>
  );
}
