import { useState } from "react";
import addIcon from "@assets/add.svg";
import { Task } from "@components/Task";
import { getFromStorage, saveToStorage } from "./storage";

function App() {
  const defaultTask = { name: "", done: false };

  const [tasks, setTasks] = useState(() => {
    return getFromStorage("tasks") || [];
  });

  const [task, setTask] = useState(defaultTask);

  const handleClick = () => {
    if (task.name.trim() === "") return;
    const newTask = { name: task.name, done: false };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    saveToStorage("tasks", newTasks);
    setTask(defaultTask);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
    saveToStorage("tasks", updatedTasks);
  };

  // Delete task on double click
  const handleDoubleClick = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Excluye el índice
    setTasks(updatedTasks);
    saveToStorage("tasks", updatedTasks);
  };

  const updateTask = (event) => {
    const newTask = { name: event.target.value, done: task.done };
    setTask(newTask);
  };

  return (
    <main className="bg-black-1 text-white flex flex-col items-center min-h-screen">
      <section className="mt-24 w-full flex flex-col items-center">
        <h1 className="mb-6 font-bold text-3xl text-gray-300">TODO APP</h1>
        <section className="flex items-center gap-1">
          <input
            type="text"
            className="rounded-md bg-black-3 focus:outline-none py-2 px-3 placeholder:text-zinc-400 focus:bg-black-4"
            placeholder="Descripción de una tarea..."
            value={task.name}
            onChange={updateTask}
          />
          <button
            className="bg-black-3 rounded-md p-1 hover:bg-black-4 hover:transform"
            onClick={handleClick}
          >
            <img src={addIcon} alt="Add" className="w-8 h-8" />
          </button>
        </section>
        <section className="mt-6 flex flex-col items-center justify-center gap-2 min-w-full max-w-lg p-3">
          {tasks.map((task, i) => (
            <Task
              key={i}
              task={task}
              onToggle={() => handleToggleTask(i)}
              onDoubleClick={() => {
                handleDoubleClick(i);
              }}
            />
          ))}
        </section>
      </section>
    </main>
  );
}

export default App;
