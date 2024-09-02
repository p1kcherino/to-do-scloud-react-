import { useState } from "react";
import global from "../styles.module.scss";
import styles from "./index.module.scss";
import { Popup } from "../popup";

export const ToDoList = ({
  tasks,
  taskStatuses,
  setTasks,
  setTaskStatuses,
}) => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [visibleTasks, setVisibleTasks] = useState(5);

  const handleTaskClick = (index) => {
    setSelectedTask(index);
  };

  const closePopup = () => {
    setSelectedTask(null);
  };

  const updateTask = (index, newTask, newStatus) => {
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks];
      newTasks[index] = newTask;
      return newTasks;
    });
    setTaskStatuses((prevStatuses) => {
      const newStatuses = [...prevStatuses];
      newStatuses[index] = newStatus;
      return newStatuses;
    });
  };

  const deleteTask = (index) => {
    setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    setTaskStatuses((prevStatuses) =>
      prevStatuses.filter((_, i) => i !== index)
    );
    closePopup();
  };

  const showMoreTasks = () => {
    setVisibleTasks((prevVisibleTasks) => prevVisibleTasks + 5);
  };

  return (
    <div className={styles.todoList}>
      <span className={styles.titleBox}>
        <h2 className={styles.title}>Задачи</h2>
        <h2 className={styles.disable}>Статус</h2>
      </span>
      <div>
        <ul className={styles.list}>
          {tasks.slice(0, visibleTasks).map((task, index) => (
            <li
              key={index}
              className={styles.item}
              onClick={() => handleTaskClick(index)}
            >
              <h4 className={styles.titleTask}>{task}</h4>
              <button
                className={styles.button}
                onClick={(e) => {
                  e.stopPropagation();
                  handleTaskClick(index);
                }}
              >
                {taskStatuses[index]}
              </button>
            </li>
          ))}
        </ul>
        {tasks.length > visibleTasks && (
          <button className={styles.showMoreButton} onClick={showMoreTasks}>
            Показать больше
          </button>
        )}
      </div>
      {selectedTask !== null && (
        <Popup
          task={tasks[selectedTask]}
          status={taskStatuses[selectedTask]}
          onClose={closePopup}
          onDelete={() => deleteTask(selectedTask)}
          onApply={(newTask, newStatus) =>
            updateTask(selectedTask, newTask, newStatus)
          }
        />
      )}
    </div>
  );
};
