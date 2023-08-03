import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import { task } from "../task";

export function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({
      title,
      description, 
    });

    setTitle(" ");
    setDescription(" ");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-500 p-10 mb-4">
        <h2 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h2>
        <input
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
        />

        <textarea
          className="bg-slate-300 p-3 w-full mb-2 rounded-md"
          placeholder="Escribe la descripcion a tu tarea."
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-fuchsia-700 px-3 py-1 text-white rounded-md">Guardar</button>
      </form>
    </div>
  );
}

