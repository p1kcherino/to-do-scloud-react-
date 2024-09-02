import styles from "./index.module.scss";
import global from "../styles.module.scss";
export const ToDoBoard = ({ tasks, taskStatuses }) => {
  const openTasks = tasks.filter(
    (_, index) => taskStatuses[index] === "Открыт"
  );
  const inProgressTasks = tasks.filter(
    (_, index) => taskStatuses[index] === "В работе"
  );
  const closedTasks = tasks.filter(
    (_, index) => taskStatuses[index] === "Закрыт"
  );

  return (
    <div className={styles.board}>
      <div className={global.bgWhite}>
        <h1 className={global.title}>Доска задач</h1>
        <div className={styles.boardInner}>
          <div className={styles.tasks}>
            <h4 className={styles.subtitle}>Открыто</h4>
            <ul className={styles.list}>
              {openTasks.map((task, index) => (
                <li key={index} className={styles.item}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tasks}>
            <h4 className={styles.subtitle}>В работе</h4>
            <ul className={styles.list}>
              {inProgressTasks.map((task, index) => (
                <li key={index} className={styles.item}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.tasks}>
            <h4 className={styles.subtitle}>Закрыто</h4>
            <ul className={styles.list}>
              {closedTasks.map((task, index) => (
                <li key={index} className={styles.item}>
                  {task}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
