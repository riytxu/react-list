import { Content } from "../Content/Content";
import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Content />
        <Modal />
      </div>
    </div>
  );
};
