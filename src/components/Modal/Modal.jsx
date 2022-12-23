import { useDispatch, useSelector } from "react-redux";

import { hideModal } from "../../reducers/modalSlice";

import { ModalAddWorker } from "./ModalAddWorker";
import { ModalRemoveWorker } from "./ModalRemoveWorker";

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
