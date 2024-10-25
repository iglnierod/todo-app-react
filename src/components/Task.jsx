import { useState, useEffect } from "react";
import { Checkbox } from "@components/Checkbox";

export function Task({ task, onToggle, onDoubleClick }) {
  const [done, setDone] = useState(task.done);

  useEffect(() => {
    setDone(task.done);
  }, [task.done]);

  return (
    <article
      className="m-1 px-4 py-2 rounded-md bg-black-4 flex justify-between gap-2 w-full max-w-lg cursor-pointer hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-500"
      onClick={onToggle}
      onDoubleClick={onDoubleClick}
    >
      <h1 className="flex-1 break-words">{task.name}</h1>
      <Checkbox done={done} setDone={() => {}} />
    </article>
  );
}
