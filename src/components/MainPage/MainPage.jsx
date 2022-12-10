import { Content } from "../Content/Content";
import { Header } from "../Header/Header";

import styles from "./MainPage.module.css";

export const MainPage = () => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.contentWrapper}>
        <Content />
      </div>
    </div>
  );
};
