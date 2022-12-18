import { useDispatch, useSelector } from "react-redux";

import { hideModal } from "../../reducers/modalSlice";

import styles from "./Modal.module.css";

export const Modal = () => {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.modal.show);
  if (!statusModal) return null;
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__head}>
          <h3>Head</h3>
        </div>
        <div className={styles.modal__body}>
          <h3>Body</h3>
        </div>
        <div className={styles.modal__footer}>
          <button className={styles.btn} onClick={() => dispatch(hideModal())}>
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
