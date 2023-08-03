import { createContext, useState, useEffect } from "react";
import { task as data } from "../task";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [task, setTask] = useState([]);

  function createTask(newtask) {
    setTask([
      ...task, 
      {
        title: newtask.title,
        id: task.length,
        description: newtask.description
      },
    ]);
  }

  function deleteTask(taskID) {
    setTask(task.filter((task) => task.id != taskID));
  }

  useEffect(() => {
    setTask(data);
  }, []);

  return (
    <TaskContext.Provider
      value={{
        task,
        deleteTask,
        createTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
