import React, { useState } from "react";
import styled from "styled-components";

const AddTodo = ({
  setInputText,
  inputText,
  setTodos,
  todos,
  isAlert,
  setIssAlert,
  setAlertMessage,
  alertMessage,
}) => {
  const addHandler = () => {
    if (inputText.trim() !== "") {
      const obj = {
        id: new Date().getTime(),
        text: inputText,
      };

      setTodos([...todos, obj]);
      setIssAlert(true);
      setAlertMessage("Todo Successfully Added");
      setInputText("");
    } else {
      setIssAlert(true);
      setAlertMessage("Please add a todo");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">To Do List</h1>
        <hr className="divider" />
        {isAlert ? (
          <div className="alert alert-success mt-2 p-2">{alertMessage}</div>
        ) : (
          ""
        )}
        <div className="input-container">
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Add todo"
            autoFocus
            autoComplete="off"
          />
          <button onClick={addHandler}>➕</button>
        </div>
      </div>
    </Wrapper>
  );
};

export default AddTodo;

const Wrapper = styled.section`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 100px auto;
    flex-direction: column;
  }

  .title {
    text-align: center;
    font-family: sans-serif;
    font-weight: bold;
  }

  .divider {
    font-weight: bold;
    border: 2px solid gray;
    width: 200px;
    text-align: center;
    margin: auto;
  }

  .input-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35%;
  }

  #inputText {
    margin: 20px 0;
    border: none;
    outline: none;
    width: 80%;
    max-width: 800px;
    min-width: 200px;
    height: 5vh;
    font-size: 18px;
    padding: 0px 5px;
    border-bottom: 2px solid rgb(72, 230, 72);
    transition: all 0.3s ease-in-out;
  }

  button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 10px;
    background-color: gainsboro;
    border: none;
    transition: background-color 0.3s ease-in-out;
    outline: none;
  }

  button:hover {
    background-color: rgb(201, 255, 201);
  }

  @media (max-width: 768px) {
    .container {
      margin: 50px auto;
    }

    .input-container {
      width: 40%;
    }

    #inputText {
      width: 90%;
      font-size: 18px;
    }

    button {
      width: 45px;
      height: 45px;
    }
  }

  @media (max-width: 480px) {
    .input-container {
      width: 80% !important;
    }

    #inputText {
      width: 80%;
      font-size: 18px;
    }

    button {
      width: 30px;
      height: 30px;
    }
  }
`;
