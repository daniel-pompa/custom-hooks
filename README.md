# Custom React Hooks and Reducers

This repository provides a suite of reusable and customizable React hooks and reducers designed to streamline state management, data fetching, form handling, and more. Each utility is available in both JavaScript and TypeScript versions, allowing for seamless integration into your projects and promoting modularity and code reusability.

## Available Versions

- **JavaScript:** The JavaScript versions are ready for use in projects that do not require static typing.
- **TypeScript:** The TypeScript versions are designed for projects that leverage static typing for enhanced type safety and autocompletion during development.

Each hook and reducer includes implementations in both languages, allowing you to choose the version that best fits the needs and configuration of your project.

## Table of Contents

1. [Hooks and Reducers](#hooks-and-reducers)
   - [useCounter](#usecounter)
   - [useFetch](#usefetch)
   - [useForm](#useform)
   - [todoReducer](#todoreducer)
   - [useTodos](#usetodos)
2. [Getting Started](#getting-started)
3. [Contributing](#contributing)
4. [License](#license)
5. [Author](#author)

## Hooks and Reducers

### `useCounter`

A custom hook for managing a counter's state.

**Usage**

```js
import { useCounter } from './useCounter';

const CounterComponent = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};
```

### `useFetch`

A custom hook for fetching data from a specified URL.

**Usage**

```js
import { useFetch } from './useFetch';

const DataFetchingComponent = () => {
  const { data, isLoading, error } = useFetch('https://api.example.com/data');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};
```

### `useForm`

A custom hook for managing form state and handling form inputs.

**Usage**

```js
import { useForm } from './useForm';

const FormComponent = () => {
  const { name, email, formState, onInputChange, onResetForm } = useForm({
    name: '',
    email: ''
  });

  return (
    <div>
      <input name="name" value={name} onChange={onInputChange} />
      <input name="email" value={email} onChange={onInputChange} />
      <button onClick={onResetForm}>Reset</button>
    </div>
  );
};
```

### `todoReducer`

A reducer function for managing a list of to-dos within a React application. It handles actions for adding, editing, deleting, and toggling the completion status of to-dos.

**Usage**

```js
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case '[TODO] Add Todo':
      return [...state, action.payload];
    case '[TODO] Edit Todo':
      return state.map(todo =>
        todo.id === action.payload.id ? action.payload : todo
      );
    case '[TODO] Delete Todo':
      return state.filter(todo => todo.id !== action.payload);
    case '[TODO] Toggle Todo':
      return state.map(todo => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }
        return todo;
      });
    default:
      return state;
  }
};
```

### `useTodos`

A custom hook for managing and interacting with a list of to-dos.

**Usage**

```js
import { useTodos } from './useTodos';

const TodosComponent = () => {
  const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo, handleEditTodo } = useTodos();

  return (
    <div>
      <h1>Todos</h1>
      <p>Total Todos: {todosCount}</p>
      <p>Pending Todos: {pendingTodosCount}</p>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
              {todo.description}
            </span>
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.done ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            <button onClick={() => {
              const newDescription = prompt('Edit todo description:', todo.description);
              if (newDescription) {
                handleEditTodo({ ...todo, description: newDescription });
              }
            }}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button onClick={() => handleNewTodo({ id: Date.now(), description: 'New Task', done: false })}>
        Add Todo
      </button>
    </div>
  );
};
```

## Getting Started

```bash
git clone https://github.com/daniel-pompa/custom-hooks.git
```

> [!NOTE]
> To use these hooks and reducers in your project, simply import them into your React components and integrate them as shown in the examples.
> For detailed documentation, please refer to the comments in the respective files.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## License

[![MIT License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://choosealicense.com/licenses/mit/)

## Author

This project is maintained and developed by **Daniel Pompa Pareja**.

[Back to Top](#table-of-contents)
