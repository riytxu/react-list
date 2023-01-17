import { Routes, Route, useLocation } from "react-router-dom";

import { useState, useEffect } from "react";
import cn from "classnames";

import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";
import { ErrorPage } from "../ErrorPage/ErrorPage";
import { ContentWorkers } from "../ContentWorkers/ContentWorkers";
import { ContentTasks } from "../ContentTasks/ContentTasks";
import { Description } from "../Description/Description";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState(true);

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage(false);
  }, [location, displayLocation]);

  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div
        className={cn(styles.contentWrapper, {
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
          <Route path="/" element={<Description />} />
          <Route path="/workers" element={<ContentWorkers />} />
          <Route path="/tasks" element={<ContentTasks />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Modal />
      </div>
    </div>
  );
};
