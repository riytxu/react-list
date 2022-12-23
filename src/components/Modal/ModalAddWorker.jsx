import { useState } from "react";
import { useDispatch } from "react-redux";

import { addWorker } from "../../reducers/workerSlice";

import { hideModal } from "../../reducers/modalSlice";

export const ModalAddWorker = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const handlerAddButton = () => {
    const fullname = {
      id: Date.now() + Math.random(),
      name: name,
      surname: surname,
    };
    dispatch(addWorker(fullname));
    dispatch(hideModal());
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
      <div className="modal__footer">
        <button onClick={() => dispatch(hideModal())}>Закрыть</button>
        <button onClick={() => handlerAddButton()}>Добавить</button>
      </div>
    </>
  );
};
