import styles from "./WorkProcessContent.module.css";

export function WorkProcessContent() {
  return (
    <div className={styles.content}>
      <h2 className={`${styles.heading} displayL`}>Work process</h2>

      <p className={`${styles.description} bodyLarge`}>
        Every project starts with curiosity, grows through collaboration and is
        refined through thoughtful design.
      </p>
    </div>
  );
}
