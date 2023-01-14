import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button/Button";
import { addWorker } from "../../reducers/workerSlice";
import { Validate } from "../../Validate";

import { hideModal } from "../../reducers/modalSlice";

import styles from "./Modal.module.css";

export const ModalAddWorker = () => {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.modal.show);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!statusModal) {
      setTimeout(() => {
        setName("");
        setSurname("");
        setError("");
      }, 500);
    }
  }, [statusModal]);

  const handlerAddButton = () => {
    const fullname = {
      id: Date.now() + Math.random(),
      name: name,
      surname: surname,
      tasks: [],
    };
    const validate = Validate("addWorker", fullname);
    if (validate.status) {
      dispatch(addWorker(fullname));
      dispatch(hideModal());
    } else {
      setError(validate.errTitle);
      setName("");
      setSurname("");
    }
  };
  return (
    <>
      <div className={styles.modal__head}>Добавление нового работника</div>
      <div className={styles.modal__body}>
        <input
          className={styles.modal__body_input}
          type="text"
          placeholder="Имя"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className={styles.modal__body_input}
          type="text"
          placeholder="Фамилия"
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
        />
      </div>
      {error && <div className={styles.modal__error}>{error}</div>}
      <div className={styles.modal__footer}>
        <Button
          Size={"Small"}
          Type={"Success"}
          onClick={() => handlerAddButton()}
        >
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
