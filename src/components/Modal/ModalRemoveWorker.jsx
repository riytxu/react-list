import { useDispatch } from "react-redux";

import { hideModal } from "../../reducers/modalSlice";

import { deleteWorker } from "../../reducers/workerSlice";

export const ModalRemoveWorker = ({ data }) => {
  const { id, name, surname } = data;
  const dispatch = useDispatch();
  const handlerClick = () => {
    dispatch(deleteWorker(id));
    dispatch(hideModal());
  };
  return (
    <>
      <div className="modal__head">Вы уверены что хотите удалить?</div>
      <div className="modal__body">
        {name} {surname}
      </div>
      <div className="modal__footer">
        <button onClick={handlerClick}>Удалить</button>
        <button onClick={() => dispatch(hideModal())}>Отмена</button>
      </div>
    </>
  );
};
