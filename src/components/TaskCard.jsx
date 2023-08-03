import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);

  return (
    <div className="bg-gray-800 text-white p-4 rounded-md  m-3">
      <h1 className="text-xl font-bold capitalize">{task.title} </h1>
      <p className="text-gray-500 text-sm">{task.description} </p>
      <button
        className="bg-fuchsia-700 px-2 py-1 rounded-md mt-4 hover:bg-fuchsia-300"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar
      </button>
    </div>
  );
}

export default TaskCard;
