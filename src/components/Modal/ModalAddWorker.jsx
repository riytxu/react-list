import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../Button/Button";
import { addWorker } from "../../reducers/workerSlice";
import { Validate } from "../../Validate";

import { hideModal } from "../../reducers/modalSlice";

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
      <div className="modal__head">Добавление нового работника</div>
      <div className="modal__body">
        <label>
          Имя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Фамилия
          <input
            type="text"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
        </label>
      </div>
      {error && <div>{error}</div>}
      <div className="modal__footer">
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
