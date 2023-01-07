import { useState } from "react";
import { useDispatch } from "react-redux";

import { addWorker } from "../../reducers/workerSlice";
import { Validate } from "../../Validate";

import { hideModal } from "../../reducers/modalSlice";

export const ModalAddWorker = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [error, setError] = useState("");
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
        <button onClick={() => handlerAddButton()}>Добавить</button>
        <button onClick={() => dispatch(hideModal())}>Отмена</button>
      </div>
    </>
  );
};
