import React, { useEffect, useState } from "react";
import ShowTodos from "./components/ShowTodos";
import AddTodo from "./components/AddTodo";
import EditTodo from "./components/EditTodo";
import styled from "styled-components";

const App = () => {
  // Add Todo In LocalStorage
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

  // Alert
  const [isAlert, setIssAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const [count, setCount] = useState(3000);

  useEffect(() => {
    const time = setTimeout(() => {
      setIssAlert(false);
    }, count);

    return () => clearTimeout(time);
  }, [isAlert, count]);

  // Update Todo
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
    setIssAlert(true);
    setAlertMessage("Todo Updated Successfully");
  };

  return (
    <Wrapper>
      <div className="main_container"></div>
      <AddTodo
        setInputText={setInputText}
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        isAlert={isAlert}
        setIssAlert={setIssAlert}
        alertMessage={alertMessage}
        setAlertMessage={setAlertMessage}
      />

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
        setIssAlert={setIssAlert}
        setAlertMessage={setAlertMessage}
      />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.section`
  .container {
    width: 100vw;
    height: 100%;
  }
`;
