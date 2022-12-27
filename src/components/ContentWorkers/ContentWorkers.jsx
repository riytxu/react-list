import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useDispatch, useSelector } from "react-redux";

import { showModal } from "../../reducers/modalSlice";

import styles from "./ContentWorkers.module.css";

const ContentWorkersItem = ({ id, name, surname }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.item}>
      <div className={styles.fullName}>
        <span>{name}</span>
        <span>{surname}</span>
      </div>
      <div className={styles.iconsWrapper}>
        <FontAwesomeIcon
          onClick={() =>
            dispatch(showModal(["editWorker", [id, name, surname]]))
          }
          className={styles.icon}
          icon={faPen}
        />
        <FontAwesomeIcon
          onClick={() =>
            dispatch(showModal(["removeWorker", [id, name, surname]]))
          }
          className={styles.icon}
          icon={faTrashCan}
        />
      </div>
    </div>
  );
};

export const ContentWorkers = () => {
  const worker = useSelector((state) => state.worker.worker);
  if (!worker.length) {
    return (
      <div className={styles.content}>
        <h3>Добавьте работника</h3>
      </div>
    );
  }
  return (
    <div className={styles.content}>
      {worker.map((item) => {
        return (
          <ContentWorkersItem
            key={item.id}
            id={item.id}
            name={item.name}
            surname={item.surname}
          />
        );
      })}
    </div>
  );
};
