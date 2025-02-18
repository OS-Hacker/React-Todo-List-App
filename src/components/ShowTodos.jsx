import { Alert } from "antd";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";

const ShowTodos = ({
  todos,
  setTodos,
  setEditMode,
  setEditId,
  setEditValue,
  setIssAlert,
  setAlertMessage,
}) => {
  // Delete Todo
  const deleteTodo = (id) => {
    const DeleteToDo = todos.filter((todo) => todo.id !== id);
    setTodos(DeleteToDo);
    setIssAlert(true);
    setAlertMessage("Todo Deleted Successfully");
  };

  // Edit Todo
  const editToDo = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  };

  // Toggled todo
  const [toggledItems, setToggledItems] = useState(() => {
    // Get stored toggled items from localStorage
    const saved = localStorage.getItem("toggledItems");
    return saved ? JSON.parse(saved) : {};
  });

  // Save toggled items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("toggledItems", JSON.stringify(toggledItems));
  }, [toggledItems]);

  const toggleItem = (id) => {
    setToggledItems((prevState) => {
      const newState = { ...prevState, [id]: !prevState[id] };
      return newState;
    });
  };

  return (
    <Wrapper>
      <div className="container">
        <ul>
          {todos?.map((todo) => {
            const { id, text } = todo;
            return (
              <li
                key={id}
                onClick={() => toggleItem(id)}
                className={toggledItems[id] ? "AddStyleLi" : "RemoveStyleLi"}
              >
                {text}
                <span
                  className="delete-symbol"
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteTodo(id);
                  }}
                >
                  <MdDeleteOutline className="delete_icons" />
                </span>
                <span
                  className="edit-symbol"
                  onClick={(e) => {
                    e.stopPropagation();
                    editToDo(id, text);
                  }}
                >
                  <FaRegEdit className="edit_icons" />
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
  .container {
    width: 100%;
    max-width: 600px;
    margin: auto;
    overflow: hidden;
    position: relative;
    bottom: 100px;
  }

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    scroll-behavior: smooth;
    padding: 0;
    max-height: 45vh;
    min-height: auto;
    overflow-y: auto;
  }

  li {
    list-style-type: none;
    width: 100%;
    max-width: 450px;
    font-family: sans-serif;
    font-size: 18px;
    background-color: aliceblue;
    padding: 8px;
    margin: 5px auto;
    border-radius: 8px;
    position: relative;
    transition: background-color 0.3s ease-in-out;
  }

  .delete-symbol,
  .edit-symbol {
    position: absolute;
    cursor: pointer;
  }

  .edit_icons {
    font-size: 25px;
    margin: 0px 10px;
  }

  .edit_icons:hover {
    color: green;
  }

  .delete_icons {
    font-size: 25px;
  }

  .delete_icons:hover {
    color: red;
  }

  .delete-symbol {
    right: 10px;
  }

  .edit-symbol {
    right: 30px
  }

  .AddStyleLi {
    text-decoration: line-through;
    color: gray;
  }

  .RemoveStyleLi {
    text-decoration: none;
  }

  /* Custom scroll bar styling */
  ul::-webkit-scrollbar {
    width: 8px;
  }

  ul::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  ul::-webkit-scrollbar-thumb {
    background: lightgray;
    border-radius: 10px;
  }

  ul::-webkit-scrollbar-corner {
    background: #f1f1f1;
  }

  @media (max-width: 768px) {
    .container {
      position: relative;
      bottom: 80px;
    }

    ul {
      scroll-behavior: smooth;
      padding: 0;
      max-height: 62vh;
      min-height: auto;
      overflow-y: auto;
    }

    li {
      font-size: 16px;
      padding: 8px;
    }

    .delete-symbol,
    .edit-symbol {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .container {
      position: relative;
      bottom: 60px;
    }

    ul {
      scroll-behavior: smooth;
      padding: 0;
      max-height: 62vh;
      min-height: auto;
      overflow-y: auto;
    }

    li {
      font-size: 14px;
      padding: 6px;
    }

    .delete-symbol,
    .edit-symbol {
      font-size: 14px;
    }
  }
`;
