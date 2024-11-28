import React from "react";
import styled from "styled-components";

const AddTodo = ({ setInputText, inputText, setTodos, todos }) => {
  const addHandler = () => {
    if (inputText.trim() !== "") {
      const obj = {
        id: new Date().getTime(),
        text: inputText,
      };

      setTodos([...todos, obj]);
      alert("Todo Successfully Add");
      setInputText("");
    } else {
      alert("Please add todo");
    }
  };

  return (
    <Wrapper>
      <div className="container">
        <div className="">
          <h1
            style={{
              textAlign: "center",
              marginBottom: "10px",
              fontFamily: "sans-serif",
            }}
          >
            React Todo List
          </h1>
          <input
            type="text"
            id="inputText"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="add todo"
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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 150px;
  }

  label {
    cursor: pointer;
    position: relative;
    bottom: 2px;
    margin-left: 10px;
  }

  #check {
    cursor: pointer;
  }
  #inputText {
    margin: 10px 0px;
    width: 30vw;
    height: 5vh;
    font-size: 20px;
    padding: 0px 5px;
    border-bottom: 2px solid rgb(72, 230, 72);
  }

  button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0px 5px;
  }

  button:hover {
    background-color: rgb(201, 255, 201);
  }
`;
