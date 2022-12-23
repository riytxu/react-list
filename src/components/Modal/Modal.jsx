import { useDispatch, useSelector } from "react-redux";

import { hideModal } from "../../reducers/modalSlice";

import { ModalAddWorker } from "./ModalAddWorker";
import { ModalAddTask } from "./ModalAddTask";

import styles from "./Modal.module.css";

export const Modal = () => {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.modal.show);
  const childrenModal = useSelector((state) => state.modal.children);
  const switchModal = () => {
    if (childrenModal === "addWorker") {
      return <ModalAddWorker />;
    } else if (childrenModal === "addTask") {
      return <ModalAddTask />;
    } else {
      return null;
    }
  };
  if (!statusModal) return null;

  return (
    <div className={styles.modal} onClick={() => dispatch(hideModal())}>
      <div
        className={styles.modal__content}
        onClick={(e) => e.stopPropagation()}
      >
        {switchModal()}
      </div>
    </div>
  );
};
