import { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

interface Todo {
  id: string;
  description: string;
  done: boolean;
}

const init = (): Todo[] => {
  return JSON.parse(localStorage.getItem('todos') || '[]');
};

export const useTodos = () => {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (newTodo: Todo): void => {
    const todoExist = todos.find(
      (todo: { description: string }) =>
        todo.description.toLowerCase() === newTodo.description.toLowerCase()
    );

    if (todoExist) return;

    dispatch({
      type: '[TODO] Add Todo',
      payload: newTodo,
    });
  };

  const handleEditTodo = (updatedTodo: Todo): void => {
    dispatch({
      type: '[TODO] Edit Todo',
      payload: updatedTodo,
    });
  };

  const handleDeleteTodo = (id: string): void => {
    dispatch({
      type: '[TODO] Delete Todo',
      payload: id,
    });
  };

  const handleToggleTodo = (id: string): void => {
    dispatch({
      type: '[TODO] Toggle Todo',
      payload: id,
    });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo: { done: any }) => !todo.done).length,
    handleNewTodo,
    handleEditTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
