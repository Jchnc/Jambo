import React from 'react';
import Task from './Todo';
import { task } from '../types';

interface TodoListProps {
  tasks: task[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTodo, deleteTodo }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div className="flex flex-row border-b mb-1 p-1 border-gray-600">
        <span>Task</span>
      </div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
};

export default TodoList;
