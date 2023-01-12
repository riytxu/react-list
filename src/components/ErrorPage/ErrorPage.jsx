import { faGhost } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./ErrorPage.module.css";

export const ErrorPage = () => {
  return (
    <div className={styles.errorWrapper}>
      <span className={styles.numWrapper}>4</span>
      <FontAwesomeIcon icon={faGhost} className={styles.ghost} />
      <span className={styles.numWrapper}>4</span>
    </div>
  );
};
