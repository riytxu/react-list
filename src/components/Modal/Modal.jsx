import { useDispatch, useSelector } from "react-redux";

import cn from "classnames";

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
    if (childrenModal?.title === "addWorker") {
      return <ModalAddWorker />;
    } else if (childrenModal?.title === "removeWorker") {
      return <ModalRemoveWorker data={childrenModal?.data} />;
    } else if (childrenModal?.title === "editWorker") {
      return <ModalEditWorker data={childrenModal?.data} />;
    } else if (childrenModal?.title === "addTask") {
      return <ModalAddTask />;
    } else {
      return null;
    }
  };

  return (
    <div
      className={cn(styles.modal, { [styles.active]: statusModal })}
      onMouseDown={() => dispatch(hideModal())}
    >
      <div
        className={styles.modal__content}
        onMouseDown={(e) => e.stopPropagation()}
      >
        {switchModal()}
      </div>
    </div>
  );
};
