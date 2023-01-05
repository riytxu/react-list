import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

import { addTask } from "../../reducers/workerSlice";
import { hideModal } from "../../reducers/modalSlice";

export const ModalAddTask = () => {
  const dispatch = useDispatch();
  const worker = useSelector((state) => state.worker.worker);
  const [task, setTask] = useState("");
  const [selectWorker, setSelectWorker] = useState(worker[0].id);
  const handlerClick = () => {
    dispatch(
      addTask({
        task: {
          id: Date.now() + Math.random(),
          title: task,
          isDone: false,
        },
        id: selectWorker,
      })
    );
    dispatch(hideModal());
  };
  return (
    <>
      <div className="modal__head">Добавление новой задачи</div>
      <div className="modal__body">
        <label>
          Задача
          <input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </label>
        <label>
          Ответственный
          <select
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
        </label>
      </div>
      <div className="modal__footer">
        <button onClick={handlerClick}>Добавить</button>
        <button onClick={() => dispatch(hideModal())}>Отмена</button>
      </div>
    </>
  );
};
