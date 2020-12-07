import React, { useState } from 'react';
import TodoForm from './component/TodoForm';
import TodoList from './component/TodoList';

Todo.propTypes = {};

function Todo(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'Reading Book' },
    { id: 2, title: 'Travelling' },
    { id: 3, title: 'Saving Money' },
  ]);
  function handleTodoClick(todo) {
    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    //add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }
  return (
    <div>
      <h2>Todo Form</h2>
      <TodoForm onSubmit={handleTodoFormSubmit} />

      <h2>Todo List</h2>
      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default Todo;
