import { useDispatch, useSelector } from "react-redux";

import { hideModal } from "../../reducers/modalSlice";

import { ModalAddWorker } from "./ModalAddWorker";
import { ModalRemoveWorker } from "./ModalRemoveWorker";
import { ModalEditWorker } from "./ModalEditWorker";
import { ModalAddTask } from "./ModalAddTask";

import styles from "./Modal.module.css";

export const Modal = () => {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.modal.show);
  const childrenModal = useSelector((state) => state.modal.children);
  const switchModal = () => {
    if (childrenModal[0] === "addWorker") {
      return <ModalAddWorker />;
    } else if (childrenModal[0] === "removeWorker") {
      return <ModalRemoveWorker data={childrenModal[1]} />;
    } else if (childrenModal[0] === "editWorker") {
      return <ModalEditWorker data={childrenModal[1]} />;
    } else if (childrenModal[0] === "addTask") {
      return <ModalAddTask />;
    } else {
      return null;
    }
  };
  if (!statusModal) return null;

  return (
    <div className={styles.modal} onMouseDown={() => dispatch(hideModal())}>
      <div
        className={styles.modal__content}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {switchModal()}
      </div>
    </div>
  );
};
