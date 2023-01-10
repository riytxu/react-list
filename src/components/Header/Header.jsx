import cn from "classnames";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";

import { Button } from "../Button/Button";
import { showModal } from "../../reducers/modalSlice";

import styles from "./Header.module.css";

export const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState(true);

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage(false);
  }, [location, displayLocation]);

  return (
    <header className={cn(styles.header, styles.headerWrapper)}>
      <div className={styles.headerLinks}>
        <Link to="">
          <Button
            Size={"Large"}
            Type={location.pathname === "/" ? "Disabled" : "Secondary"}
          >
            Главная
          </Button>
        </Link>
        <Link to="workers">
          <Button
            Size={"Large"}
            Type={location.pathname === "/workers" ? "Disabled" : "Secondary"}
          >
            Работники
          </Button>
        </Link>
        <Link to="tasks">
          <Button
            Size={"Large"}
            Type={location.pathname === "/tasks" ? "Disabled" : "Secondary"}
          >
            Задачи
          </Button>
        </Link>
      </div>
      <div
        className={cn({
          [styles.fadeIn]: transitionStage,
          [styles.fadeOut]: !transitionStage,
        })}
        onAnimationEnd={() => {
          if (!transitionStage) {
            setTransistionStage(true);
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route
            path="/workers"
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
            path="/tasks"
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
      </div>
    </header>
  );
};
