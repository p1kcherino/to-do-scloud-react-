import { useEffect } from "react";
import styles from "./index.module.scss";
import global from "../styles.module.scss";

export const TaskCount = ({ tasks, taskStatuses }) => {
  useEffect(() => {
    console.log("Task Statuses:", taskStatuses);
  }, [taskStatuses]);

  const countTasksByStatus = (status) => {
    return taskStatuses.filter((taskStatus) => taskStatus === status).length;
  };

  return (
    <div className={`${global.block} ${global.blockMaxWidth}`}>
      <h3 className={global.blockTitle}>Текущие задачи</h3>
      <ul className={styles.flex}>
        <li className={global.item}>
          <img src="../../../public/open.svg" alt="Open" />
          <span style={{ marginLeft: 8 }}>
            Открыто: {countTasksByStatus("Открыт")}
          </span>
        </li>

        <li className={global.item}>
          <img src="../../../public/inProgress.svg" alt="In Progress" />
          <span style={{ marginLeft: 8 }}>
            В работе: {countTasksByStatus("В работе")}
          </span>
        </li>

        <li className={global.item}>
          <img src="../../../public/closed.svg" alt="Closed" />
          <span style={{ marginLeft: 8 }}>
            Закрыто: {countTasksByStatus("Закрыт")}
          </span>
        </li>
      </ul>
    </div>
  );
};
