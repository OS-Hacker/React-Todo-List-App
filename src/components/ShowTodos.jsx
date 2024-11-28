import { Alert } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const ShowTodos = ({
  todos,
  setTodos,
  setEditMode,
  setEditId,
  setEditValue,
}) => {
  // Delete Todo
  const deleteTodo = (id) => {
    const DeleteToDo = todos.filter((todo) => todo.id !== id);
    setTodos(DeleteToDo);
    alert("Todo Deleted Successfully");
  };

  // Edit Todo
  const editToDo = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  };

  // Toggled todo

  const [toggledItems, setToggledItems] = useState({});

  const toggleItem = (id) => {
    setToggledItems((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
    <Wrapper>
      <div className="todo_Container">
        <ul>
          {todos?.map((todos) => {
            const { id, text } = todos;
            return (
              <li
                key={id}
                onClick={() => toggleItem(id)}
                className={toggledItems[id] ? "AddStyleLi" : "RemoveStyleLi"}
              >
                {text}
                <span className="delete-symbol" onClick={() => deleteTodo(id)}>
                  ❌
                </span>
                <span
                  className="edit-symbol"
                  onClick={() => editToDo(id, text)}
                >
                  ✏️
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </Wrapper>
  );
};

export default ShowTodos;

const Wrapper = styled.section`
  li {
    list-style-type: none;
    text-align: start;
    width: 34vw;
    font-family: sans-serif;
    font-size: 20px;
    display: block;
    background-color: aliceblue;
    padding: 6px;
    margin: 5px 10px;
    border-radius: 8px;
    position: relative;
  }

  .todo_Container ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-right: 30px;
    scroll-behavior: smooth;
  }

  .delete-symbol {
    position: absolute;
    right: 10px;
    font-size: 18px;
    cursor: pointer;
  }

  .edit-symbol {
    position: absolute;
    right: 40px;
    font-size: 18px;
    cursor: pointer;
  }

  /* Complited todo */

  .AddStyleLi {
    text-decoration: line-through;
    color: gainsboro;
  }
  .RemoveStyleLi {
    text-decoration: none;
  }
`;
