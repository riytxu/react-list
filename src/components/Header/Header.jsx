import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import { showModal } from "../../reducers/modalSlice";

import styles from "./Header.module.css";

export const Header = () => {
  const dispatch = useDispatch();
  return (
    <header
      className={cn(styles.header, styles.headerWrapper, styles.header_green)}
    >
      <Link to="workers">
        <button className={styles.button}>Работники</button>
      </Link>
      <Link to="tasks">
        <button className={styles.button}>Задачи</button>
      </Link>

      <Routes>
        <Route
          path="workers"
          element={
            <button
              className={styles.button}
              onClick={() =>
                dispatch(
                  showModal({
                    title: "addWorker",
                  })
                )
              }
            >
              Добавить работника
            </button>
          }
        />
        <Route
          path="tasks"
          element={
            <button
              className={styles.button}
              onClick={() =>
                dispatch(
                  showModal({
                    title: "addTask",
                  })
                )
              }
            >
              Добавить задачу
            </button>
          }
        />
      </Routes>
    </header>
  );
};
