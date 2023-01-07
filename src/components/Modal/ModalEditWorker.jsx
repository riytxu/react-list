import { useState } from "react";
import { useDispatch } from "react-redux";

import { hideModal } from "../../reducers/modalSlice";
import { editWorker } from "../../reducers/workerSlice";

import { Validate } from "../../Validate";

export const ModalEditWorker = ({ data }) => {
  const dispatch = useDispatch();
  const { id, name, surname } = data;
  const [editName, setEditName] = useState(name);
  const [editSurname, setEditSurname] = useState(surname);
  const [error, setError] = useState("");
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
    }
  };
  return (
    <>
      <div className="modal__head">Изменение данных работника</div>
      <div className="modal__body">
        <label>
          Имя
          <input
            type="text"
            value={editName}
            onChange={(e) => setEditName(e.target.value)}
          />
        </label>
        <label>
          Фамилия
          <input
            type="text"
            value={editSurname}
            onChange={(e) => setEditSurname(e.target.value)}
          />
        </label>
      </div>
      {error && <div>{error}</div>}
      <div className="modal__footer">
        <button onClick={handlerClick}>Изменить</button>
        <button onClick={() => dispatch(hideModal())}>Отмена</button>
      </div>
    </>
  );
};
