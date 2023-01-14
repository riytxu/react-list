import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import { addTask } from "../../reducers/workerSlice";
import { hideModal } from "../../reducers/modalSlice";
import { Button } from "../Button/Button";
import { Validate } from "../../Validate";

import styles from "./Modal.module.css";

export const ModalAddTask = () => {
  const dispatch = useDispatch();
  const worker = useSelector((state) => state.worker.worker);
  const statusModal = useSelector((state) => state.modal.show);
  const [task, setTask] = useState("");
  const [selectWorker, setSelectWorker] = useState(worker[0]?.id);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!statusModal) {
      setTimeout(() => {
        setError("");
        setTask("");
      }, 500);
    }
  }, [statusModal, worker]);

  const handlerClick = () => {
    const validate = Validate("addTask", task);
    if (validate.status) {
      dispatch(
        addTask({
          task: {
            id: Date.now() + Math.random(),
            title: task,
            isDone: false,
          },
          id: +selectWorker,
        })
      );
      dispatch(hideModal());
    } else {
      setError(validate.errTitle);
      setTask("");
    }
  };
  return (
    <>
      <div className={styles.modal__head}>Добавление новой задачи</div>
      <div className={styles.modal__body}>
        <input
          className={styles.modal__body_input}
          type="text"
          placeholder="Задача"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select
          className={styles.modal__body_input}
          value={selectWorker}
          onChange={(e) => setSelectWorker(e.target.value)}
        >
          {worker.map((item) => {
            const { id, name, surname } = item;
            return (
              <option key={id} value={id}>
                {name} {surname}
              </option>
            );
          })}
        </select>
      </div>
      {error && <div className={styles.modal__error}>{error}</div>}
      <div className={styles.modal__footer}>
        <Button Size={"Small"} Type={"Success"} onClick={handlerClick}>
          Добавить
        </Button>
        <Button
          Size={"Small"}
          Type={"Danger"}
          onClick={() => dispatch(hideModal())}
        >
          Отмена
        </Button>
      </div>
    </>
  );
};
