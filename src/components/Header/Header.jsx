import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";

import { Button } from "../Button/Button";
import { showModal } from "../../reducers/modalSlice";

import styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation().pathname;
  const dispatch = useDispatch();
  return (
    <header
      className={cn(styles.header, styles.headerWrapper, styles.header_green)}
    >
      <Link to="workers">
        <Button
          Size={"Large"}
          Type={location === "/workers" ? "Disabled" : "Secondary"}
        >
          Работники
        </Button>
      </Link>
      <Link to="tasks">
        <Button
          Size={"Large"}
          Type={location === "/tasks" ? "Disabled" : "Secondary"}
        >
          Задачи
        </Button>
      </Link>

      <Routes>
        <Route
          path="workers"
          element={
            <Button
              Size={"Large"}
              Type={"Secondary"}
              onClick={() =>
                dispatch(
                  showModal({
                    title: "addWorker",
                  })
                )
              }
            >
              Добавить работника
            </Button>
          }
        />
        <Route
          path="tasks"
          element={
            <Button
              Size={"Large"}
              Type={"Secondary"}
              onClick={() =>
                dispatch(
                  showModal({
                    title: "addTask",
                  })
                )
              }
            >
              Добавить задачу
            </Button>
          }
        />
      </Routes>
    </header>
  );
};
