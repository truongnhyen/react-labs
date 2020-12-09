import { Box, Container } from '@material-ui/core';
import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const [todoList, setTodoList] = useState([
    { id: 1, value: 'Reading Book', description: '' },
    { id: 2, value: 'Travelling', description: '' },
    { id: 3, value: 'Saving Money', description: '' },
  ]);

  const [selectedTodo, setSelectedTodo] = useState(null);
  // const [showForm, setShowForm] = useState(true);

  function handleDeleteTodo(todo) {
    // const index = todoList.findIndex((x) => x.id === todo.id);
    // if (index < 0) return;

    // const newTodoList = [...todoList];
    // newTodoList.splice(index, 1);
    // setTodoList(newTodoList);

    //another way: remove by filter
    setTodoList((currentList) => currentList.filter((x) => x.id !== todo.id));
  }
  function handleEditTodo(todo) {
    console.log('Edit Click', todo);

    // setShowForm(false);
    setSelectedTodo(todo);

    // setTimeout(() => setShowForm(true));
  }
  const handleFormSubmit = (formValues) => {
    //EDIT MODE
    if (selectedTodo) {
      // clone todo list
      // find index
      // update value
      //set list = new list
      setTodoList((currentList) => {
        const newList = [...currentList];

        const updatedIdx = newList.findIndex((x) => x.id === selectedTodo.id);
        if (updatedIdx < 0) return currentList;

        //clone todo item
        newList[updatedIdx] = {
          ...newList[updatedIdx],
          ...formValues,
        };

        return newList;
      });
      setSelectedTodo(null);

      return;
    }

    //ADD MODE
    //Push to todo list
    setTodoList((currentList) => {
      // New item
      const newTodo = {
        id: new Date().getTime().toString(),
        ...formValues,
      };

      return [...currentList, newTodo];
    });
  };
  return (
    <Container fixed>
      <Box mt={4} mb={6}>
        <TodoForm initialValues={selectedTodo} onSubmit={handleFormSubmit} />
      </Box>
      <TodoList todos={todoList} onDelete={handleDeleteTodo} onEdit={handleEditTodo} />
    </Container>
  );
}

export default TodoFeature;
