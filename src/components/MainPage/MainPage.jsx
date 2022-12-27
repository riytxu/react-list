import { Routes, Route } from "react-router-dom";

import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";
import { ContentWorkers } from "../ContentWorkers/ContentWorkers";
import { ContentTasks } from "../ContentTasks/ContentTasks";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Routes>
          <Route path="/workers" element={<ContentWorkers />} />
          <Route path="/tasks" element={<ContentTasks />} />
        </Routes>
        <Modal />
      </div>
    </div>
  );
};
