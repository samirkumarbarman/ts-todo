import { FC } from 'react';
import '../style/TodoItem.css';

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ id, text, completed, toggleTodo, deleteTodo }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
        className="todo-item-checkbox"
      />
      <span className="todo-item-text">{text}</span>
      <button onClick={() => deleteTodo(id)} className="todo-item-delete">
        Delete
      </button>
    </li>
  );
};

export default TodoItem;