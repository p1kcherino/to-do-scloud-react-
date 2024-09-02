import { useState } from "react";
import { TaskCount } from "./components/taskCount";
import { AddTaskForm } from "./components/addTaskForm";
import { ToDoList } from "./components/toDoList";
import { ToDoBoard } from "./components/toDoBoard";
import { TodoFooter } from "./components/footer";
import styles from "./App.module.scss";
import global from "./components/styles.module.scss";

export function App() {
  const [tasks, setTasks] = useState([]);
  const [taskStatuses, setTaskStatuses] = useState([]);

  const addTask = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
    setTaskStatuses((prevStatuses) => [...prevStatuses, "Открыт"]);
  };

  return (
    <div>
      <div className={styles.bg}>
        <div className={styles.size}>
          <h1 className={global.title}>ToDo List Scloud</h1>
          <div className={styles.flex}>
            <TaskCount tasks={tasks} taskStatuses={taskStatuses} />
            <AddTaskForm addTask={addTask} />
          </div>
          <ToDoList
            tasks={tasks}
            taskStatuses={taskStatuses}
            setTasks={setTasks}
            setTaskStatuses={setTaskStatuses}
          />
        </div>
      </div>
      <div className={styles.bgWhite}>
        <div className={styles.size}>
          <ToDoBoard tasks={tasks} taskStatuses={taskStatuses} />
        </div>

        <TodoFooter />
      </div>
    </div>
  );
}
