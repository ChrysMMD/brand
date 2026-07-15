import { WorkProcessContent } from "./WorkProcessContent";
import { Timeline } from "./Timeline";
import styles from "./WorkProcess.module.css";

export function WorkProcess() {
  return (
    <div className={styles.workProcess}>
      <WorkProcessContent />

      <Timeline />
    </div>
  );
}
