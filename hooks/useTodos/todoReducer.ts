interface Todo {
  id: string;
  title: string;
  done: boolean;
}

type TodoAction =
  | { type: '[TODO] Add Todo'; payload: Todo }
  | { type: '[TODO] Edit Todo'; payload: Todo }
  | { type: '[TODO] Delete Todo'; payload: string }
  | { type: '[TODO] Toggle Todo'; payload: string };

/**
 * Reducer function to manage the todo state based on actions.
 * @param {Todo[]} state - The current state of the todo list. An array of Todo items.
 * @param {TodoAction} action - The action to be processed to update the state.
 * @returns {Todo[]} The new state of the todo list after applying the action.
 */
export const todoReducer = (state: Todo[] = [], action: TodoAction): Todo[] => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...state, action.payload];
    case '[TODO] Edit Todo':
      return state.map(todo => (todo.id === action.payload.id ? action.payload : todo));
    case '[TODO] Delete Todo':
      return state.filter(todo => todo.id !== action.payload);
    case '[TODO] Toggle Todo':
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
};
