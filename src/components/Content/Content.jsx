import cn from "classnames";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import { useDispatch } from "react-redux";

import { showModal } from "../../reducers/modalSlice";

import styles from "./Content.module.css";

const data = [
  {
    id: 1,
    name: "Иван",
    surname: "Иванов",
  },
  {
    id: 2,
    name: "Сергей",
    surname: "Сергеев",
  },
];

const ContentItem = ({ name, surname }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.item}>
      <div className={styles.fullName}>
        <span>{name}</span>
        <span>{surname}</span>
      </div>
      <div className={styles.iconsWrapper}>
        <FontAwesomeIcon
          onClick={() => dispatch(showModal())}
          className={styles.icon}
          icon={faPen}
        />
        <FontAwesomeIcon
          onClick={() => dispatch(showModal())}
          className={styles.icon}
          icon={faTrashCan}
        />
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className={styles.content}>
      {data.map((item) => {
        return (
          <ContentItem key={item.id} name={item.name} surname={item.surname} />
        );
      })}
    </div>
  );
};
