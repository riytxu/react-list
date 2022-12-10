import cn from "classnames";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header
      className={cn(styles.header, styles.headerWrapper, styles.header_green)}
    >
      <button className={styles.button}>Добавить работника</button>
      <button className={styles.button}>Добавить задачу</button>
    </header>
  );
};
