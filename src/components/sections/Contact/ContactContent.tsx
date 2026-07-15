import styles from "./ContactContent.module.css";

export function ContactContent() {
  return (
    <div className={styles.content}>
      <h2 className={styles.heading}>
        <span>Let&apos;s create</span>
        <span>something</span>
        <span className={styles.highlight}>epic</span>
        <span>together</span>
      </h2>

      <p className={`${styles.description} bodyLarge`}>
        Whether you&apos;re looking for a designer, frontend developer, or
        simply someone who enjoys solving problems through thoughtful design,
        I&apos;d love to hear from you.
      </p>
    </div>
  );
}
