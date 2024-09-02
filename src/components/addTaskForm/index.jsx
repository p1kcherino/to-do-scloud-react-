import { useState } from "react";
import "./index.module.scss";
import styles from "./index.module.scss";
import global from "../styles.module.scss";

export const AddTaskForm = ({ addTask }) => {
  const [textButton, setTextButton] = useState({
    text: "Добавить задачу",
  });

  const [task, setTask] = useState("");

  const onChangeHandler = (event) => {
    setTask(event.target.value);
  };
  const onClickHandler = (event) => {
    event.preventDefault();
    if (task.trim() !== "") {
      addTask(task);
      setTask("");
    }
  };

  return (
    <div className={`${global.block}`}>
      <h3 className={global.blockTitle}>Добавить задачу</h3>
      <form className={styles.form}>
        <input
          className={global.input}
          placeholder="Текст"
          type="text"
          value={task}
          onChange={onChangeHandler}
          required
        />
        <button
          className={styles.button}
          type="submit"
          onClick={onClickHandler}
        >
          {textButton.text}
        </button>
        <button className={styles.btn} type="submit" onClick={onClickHandler}>
          <img src="plus.svg" />
        </button>
      </form>
    </div>
  );
};
