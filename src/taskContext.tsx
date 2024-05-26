import React from "react";
import { useEffect } from "react";
import { type task } from "./types";

const TaskContext = React.createContext<task[] | null>(null);

function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = React.useState<task[]>([]);

  useEffect(() => {
    const tasks = localStorage.getItem("tasks");
    if (tasks) {
      setTasks(JSON.parse(tasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>
  );
}

export default TaskProvider;