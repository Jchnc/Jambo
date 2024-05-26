import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { task } from './types';
import { useLocalStorage } from 'usehooks-ts';

const initialTasks: task[] = [
  {
    id: self.crypto.randomUUID(),
    title: 'Hacer la compra',
    description: 'Comprar ingredientes para la cena de esta noche',
    done: false,
    createdAt: new Date().toLocaleString(),
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Hacer ejercicio',
    description: 'Correr durante 30 minutos en el parque',
    done: true,
    createdAt: new Date().toLocaleString(),
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Leer un libro',
    description: "Comenzar a leer 'Cien años de soledad'",
    done: false,
    createdAt: new Date().toLocaleString(),
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Llamar al doctor',
    description: 'Hacer una cita para el chequeo médico anual',
    done: false,
    createdAt: new Date().toLocaleString(),
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Enviar correo electrónico',
    description: 'Enviar el informe semanal al equipo',
    done: true,
    createdAt: new Date().toLocaleString(),
  },
  {
    id: self.crypto.randomUUID(),
    title: 'Estudiar para el examen',
    description: 'Repasar los apuntes de la clase de matemáticas',
    done: false,
    createdAt: new Date().toLocaleString(),
  },
];

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<task[]>('todos', initialTasks);

  const addTodo = (text: string) => {
    const newTodo: task = {
      id: self.crypto.randomUUID(),
      title: text,
      description: '',
      done: false,
      createdAt: new Date().toLocaleString().toLocaleString(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <div className="w-full">
        <TodoForm onAdd={addTodo} />
      </div>
      <TodoList tasks={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
};

export default App;

