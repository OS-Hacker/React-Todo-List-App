import React, { useEffect, useState } from "react";
import ShowTodos from "./components/ShowTodos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";

const App = () => {
  //  Add Todo In LocalStorage
  const LocalStorageHandler = () => {
    const Data = localStorage.getItem("todo");
    return Data ? JSON.parse(localStorage.getItem("todo")) : [];
  };

  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(LocalStorageHandler());

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  // Edit Todo
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  const updateHandler = () => {
    const updateTodo = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue };
      }
      return todo;
    });

    setTodos(updateTodo);
    setEditMode(false);
    setEditValue("");
    setEditId(null);
    alert("Todo Update Successfully");

  };

  return (
    <>
      <AddTodo
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
      />

      {/* Edit Component */}
      <EditTodo
        editMode={editMode}
        editValue={editValue}
        setEditValue={setEditValue}
        updateHandler={updateHandler}
      />

      <ShowTodos
        todos={todos}
        setTodos={setTodos}
        setEditMode={setEditMode}
        setEditId={setEditId}
        setEditValue={setEditValue}
      />
    </>
  );
};

export default App;
