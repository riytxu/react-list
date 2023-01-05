import { useSelector } from "react-redux";

import styles from "./ContentTasks.module.css";

const ContentTasksItem = ({ name, surname, tasks }) => {
  return (
    <div className={styles.item}>
      <div className="fullName">
        {name} {surname}
      </div>
      <div className={styles.tasksWrapper}>
        {tasks.map((item) => {
          const { id, title } = item;
          return <TaskItem key={id} id={id} task={title} />;
        })}
      </div>
    </div>
  );
};

const TaskItem = ({ id, task }) => {
  return (
    <div className={styles.taskItem} data-id={id}>
      {task}
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
            name={item.name}
            surname={item.surname}
            tasks={item.tasks}
          />
        );
      })}
    </div>
  );
};
