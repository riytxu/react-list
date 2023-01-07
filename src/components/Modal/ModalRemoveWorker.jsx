import { useDispatch } from "react-redux";

import { Button } from "../Button/Button";
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
        <Button Size={"Small"} Type={"Success"} onClick={handlerClick}>
          Удалить
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
