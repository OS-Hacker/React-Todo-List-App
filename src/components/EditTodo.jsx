import React from "react";
import styled from "styled-components";

const EditTodo = ({ editMode, editValue, setEditValue, updateHandler }) => {
  return (
    <Wrapper>
      {editMode ? (
        <>
          <div className="container">
            <input
              type="text"
              className="editInput"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <span className="edit-2-symbol" onClick={updateHandler}>
              🔻
            </span>
          </div>
        </>
      ) : (
        ""
      )}
    </Wrapper>
  );
};

export default EditTodo;

const Wrapper = styled.section`
  .container {
    display: flex;
    justify-content: center;
  }
  .editInput {
    outline: none;
    border: none;
    border-bottom: 2px solid #aaa;
    width: 25vw;
    font-size: 20px;
    padding: 0px 5px;
  }

  .edit-2-symbol {
    right: 40px;
    font-size: 25px;
    cursor: pointer;
  }


`;
