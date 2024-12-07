import React from "react";
import styled from "styled-components";

const EditTodo = ({
  editMode,
  editValue,
  setEditValue,
  updateHandler,
}) => {
  return (
    <Wrapper>
      {editMode && (
        <div className="container">
          <input
            type="text"
            className="editInput"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <span className="edit-symbol" onClick={updateHandler}>
            🔻
          </span>
        </div>
      )}
    </Wrapper>
  );
};

export default EditTodo;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    bottom: 110px;
  }

  .editInput {
    outline: none;
    border: none;
    border-bottom: 2px solid #aaa;
    width: 60%;
    max-width: 380px;
    min-width: 200px;
    font-size: 18px;
    padding: 5px 10px;
  }

  .edit-symbol {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    cursor: pointer;
    margin: 0 10px;
    background-color: gainsboro;
    border: none;
    transition: background-color 0.3s ease-in-out;
    outline: none;
    font-size: 24px;
    padding: 3px;
  }

  .edit-symbol:hover {
    background-color: rgb(201, 255, 201);
  }

  @media (max-width: 768px) {
    .container {
      position: relative;
      bottom: 80px;
    }
    .editInput {
      width: 68%;
      font-size: 18px;
      padding: 0px;
    }

    .edit-symbol {
      font-size: 24px;
      margin-top: 5px;
    }
  }

  @media (max-width: 480px) {
    .container {
      position: relative;
      bottom: 70px;
    }
    .editInput {
      width: 68%;
      padding: 0px;
    }

    .edit-symbol {
      font-size: 21px;
      margin-top: 10px;
      padding: 1px;
      width: 30px;
      height: 30px;
    }
  }
`;
