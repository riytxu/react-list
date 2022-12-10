import cn from "classnames";

import styles from "./Content.module.css";

const data = [
  {
    id: 1,
    name: "Иван",
    surname: "Иванов",
  },
  {
    id: 2,
    name: "Сергей",
    surname: "Сергеев",
  },
];

const ContentItem = ({ name, surname }) => {
  return (
    <div className={cn(styles.item, styles.itemWrapper)}>
      <div>
        {name} {surname}
      </div>
    </div>
  );
};

export const Content = () => {
  return (
    <div className={styles.content}>
      {data.map((item) => {
        return (
          <ContentItem key={item.id} name={item.name} surname={item.surname} />
        );
      })}
    </div>
  );
};
