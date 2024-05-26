import { Plus } from 'akar-icons';
import React, { useState } from 'react';

interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ onAdd }) => {
  const [text, setText] = useState('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <Plus
          strokeWidth={2}
          size={16}
          className="absolute top-2/4 left-4 transform -translate-y-2/4 text-[#8391ad]"
        />
        <input
          className="w-full p-2 pl-10 rounded-md bg-[#151a2e] text-[#8391ad] border border-[#1f2937] focus:outline-none focus:border-[#3b82f6]"
          type="text"
          name="text"
          placeholder="Add new task"
          aria-label="Text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
      </div>
    </form>
  );
}

export default TodoForm;