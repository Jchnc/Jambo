import { type task } from '../types';
import { TrashCan } from 'akar-icons';

interface TaskProps {
  task: task;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const Task: React.FC<TaskProps> = ({ task, toggleTodo, deleteTodo }) => {

  const inputId = `checkbox-${task.id}`
  const handleChange = () => {
    toggleTodo(task.id);
  };
  const handleDelete = () => {
    deleteTodo(task.id);
  }

  return (
    <div className="justify-between flex flex-row gap-1 m-0 rounded-md bg-[#151a2e] p-2 px-4 items-center">
      <label
        className={task.done ? 'cursor-pointer line-through' : 'cursor-pointer'}
        htmlFor={inputId}
      >
        <input
          id={inputId}
          className="mr-2 accent-[#8391ad]"
          type="checkbox"
          name={task.title}
          checked={task.done}
          onChange={handleChange}
        />
        {task.title}
      </label>
      <div className="flex flex-row items-center">
        <span className="text-xs text-[#8391ad]">
          {task.createdAt.toLocaleString()}
        </span>
        <button className="size-4 ml-1" onClick={handleDelete}>
          <TrashCan strokeWidth={2} size={16} className='text-[#8391ad] hover:text-red-400' />
        </button>
      </div>
    </div>
  );
};

export default Task;