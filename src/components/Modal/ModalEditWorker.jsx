import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button/Button";
import { hideModal } from "../../reducers/modalSlice";
import { editWorker } from "../../reducers/workerSlice";

import { Validate } from "../../Validate";

import styles from "./Modal.module.css";

export const ModalEditWorker = ({ data }) => {
  const dispatch = useDispatch();
  const statusModal = useSelector((state) => state.modal.show);
  const { id, name, surname } = data;
  const [editName, setEditName] = useState(name);
  const [editSurname, setEditSurname] = useState(surname);
  const [error, setError] = useState("");

  useEffect(() => {
    setEditName(name);
  }, [name]);
  useEffect(() => {
    setEditSurname(surname);
  }, [surname]);
  useEffect(() => {
    if (!statusModal && error) {
      setTimeout(() => {
        setError("");
      }, 500);
    }
  }, [statusModal, error]);

  const handlerClick = () => {
    const editData = {
      id: id,
      name: editName,
      surname: editSurname,
    };
    const validate = Validate("editWorker", editData);
    if (validate.status) {
      dispatch(editWorker(editData));
      dispatch(hideModal());
    } else {
      setError(validate.errTitle);
      setEditName(name);
      setEditSurname(surname);
    }
  };
  return (
    <>
      <div className={styles.modal__head}>Изменение данных работника</div>
      <div className={styles.modal__body}>
        <input
          className={styles.modal__body_input}
          type="text"
          placeholder="Имя"
          value={editName}
          onChange={(e) => setEditName(e.target.value)}
        />
        <input
          className={styles.modal__body_input}
          type="text"
          placeholder="Фамилия"
          value={editSurname}
          onChange={(e) => setEditSurname(e.target.value)}
        />
      </div>
      {error && <div className={styles.modal__error}>{error}</div>}
      <div className={styles.modal__footer}>
        <Button Size={"Small"} Type={"Success"} onClick={handlerClick}>
          Изменить
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
