import { useState } from "react";
import styles from "./index.module.scss";
import global from "../styles.module.scss";

export const Popup = ({ task, status, onClose, onDelete, onApply }) => {
  const [selectedStatus, setSelectedStatus] = useState(status);
  const [taskText, setTaskText] = useState(task);

  const getAvailableStatuses = (currentStatus) => {
    switch (currentStatus) {
      case "Открыт":
        return ["В работе", "Закрыт"];
      case "В работе":
        return ["Отложить", "Закрыт"];
      case "Закрыт":
        return ["Переоткрыть"];
      default:
        return [];
    }
  };

  const handleStatusChange = (newStatus) => {
    if (newStatus === "Отложить" || newStatus === "Переоткрыть") {
      setSelectedStatus("Открыт");
    } else {
      setSelectedStatus(newStatus);
    }
  };

  const handleApply = () => {
    onApply(taskText, selectedStatus);
    onClose();
  };

  return (
    <div className={styles.popup}>
      <div className={styles.popup__content}>
        <div className={styles.popup__inner_title}>
          <h5 className={styles.popup__title}>Изменение задачи</h5>
          <button className={styles.popup__close_btn} onClick={onClose}>
            X
          </button>
        </div>
        <input
          type="text"
          className={global.input}
          placeholder="Текст задачи, который можно изменить"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <div className={styles.popup__inner_status}>
          {getAvailableStatuses(status).map((statusOption) => (
            <button
              key={statusOption}
              className={styles.popup__status_button}
              onClick={() => handleStatusChange(statusOption)}
              style={{
                backgroundColor:
                  (statusOption === "Отложить" &&
                    selectedStatus === "Открыт") ||
                  (statusOption === "Переоткрыть" &&
                    selectedStatus === "Открыт") ||
                  selectedStatus === statusOption
                    ? "lightgray"
                    : "",
              }}
            >
              {statusOption}
            </button>
          ))}
        </div>
        <div className={styles.popup__buttons}>
          <button className={styles.popup__btn_apply} onClick={handleApply}>
            Применить
          </button>
          <button className={styles.popup__btn_delete} onClick={onDelete}>
            Удалить задачу
          </button>
        </div>
      </div>
    </div>
  );
};
