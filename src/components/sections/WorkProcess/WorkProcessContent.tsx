import styles from "./WorkProcessContent.module.css";

export function WorkProcessContent() {
  return (
    <div className={styles.content}>
      <h2 className={`${styles.heading} displayL`}>Work process</h2>

      <p className={`${styles.description} bodyLarge`}>
        Every project starts with curiosity, grows through collaboration and is
        refined through thoughtful design.
      </p>

      <p className={`${styles.description} bodyLarge`}>
        My process combines UX, visual design and frontend development to create
        meaningful digital experiences.
      </p>
    </div>
  );
}
