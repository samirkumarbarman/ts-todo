import { FC, useState, ChangeEvent, FormEvent } from 'react';
import '../style/Todoform.css';

interface TodoFormProps {
  addTodo: (text: string) => void;
}

const TodoForm: FC<TodoFormProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        placeholder="Add new todo"
        className="todo-form-input"
      />
      <button type="submit" className="todo-form-button">
        Add
      </button>
    </form>
  );
};

export default TodoForm;