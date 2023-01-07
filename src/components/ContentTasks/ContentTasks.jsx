import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { statusTask } from "../../reducers/workerSlice";
import { delTask } from "../../reducers/workerSlice";

import styles from "./ContentTasks.module.css";

const ContentTasksItem = ({ idWorker, name, surname, tasks }) => {
  return (
    <div className={styles.item}>
      <div className="fullName">
        {name} {surname}
      </div>
      <div className={styles.tasksWrapper}>
        {tasks.map((item) => {
          const { id, title } = item;
          return (
            <TaskItem key={id} idWorker={idWorker} idTask={id} task={title} />
          );
        })}
      </div>
    </div>
  );
};

const TaskItem = ({ idWorker, idTask, task }) => {
  const workerArr = useSelector((state) => state.worker.worker);
  const worker = workerArr.find((item) => item.id === idWorker);
  const workerTask = worker.tasks.find((item) => item.id === idTask);
  const dispatch = useDispatch();
  return (
    <div className={styles.taskItem}>
      <div className={cn({ [styles.taskDone]: workerTask.isDone })}>{task}</div>
      <div className={styles.iconsWrapper}>
        <FontAwesomeIcon
          icon={faCheck}
          className={cn(styles.icon, {
            [styles.taskDoneIcon]: workerTask.isDone,
          })}
          onClick={() => dispatch(statusTask({ idWorker, idTask }))}
        />
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.icon}
          onClick={() => dispatch(delTask({ idWorker, idTask }))}
        />
      </div>
    </div>
  );
};

export const ContentTasks = () => {
  const worker = useSelector((state) => state.worker.worker);
  if (!worker.length) {
    return (
      <div className={styles.content}>
        <h3>Добавьте работника</h3>
      </div>
    );
  }
  return (
    <div className={styles.content}>
      {worker.map((item) => {
        return (
          <ContentTasksItem
            key={item.id}
            idWorker={item.id}
            name={item.name}
            surname={item.surname}
            tasks={item.tasks}
          />
        );
      })}
    </div>
  );
};
