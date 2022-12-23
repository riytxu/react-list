import cn from "classnames";

import { useDispatch } from "react-redux";

import { showModal } from "../../reducers/modalSlice";

import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header
      className={cn(styles.header, styles.headerWrapper, styles.header_green)}
    >
      <button
        className={styles.button}
        onClick={() => dispatch(showModal("addWorker"))}
      >
        Добавить работника
      </button>
      {/* <button
        className={styles.button}
        onClick={() => dispatch(showModal("addTask"))}
      >
        Добавить задачу
      </button> */}
    </header>
  );
};
