import React from 'react';
import styled from 'styled-components';

const TodoItem: React.FC<{
  text: string;
  id: number;
  type: string;
  deleteTodo: () => void;
  clearTodo: () => void;
  onDragHandler: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
}> = ({ text, id, type, deleteTodo, clearTodo, onDragHandler }) => {
  return (
    <TodoItemUI
      draggable={true}
      onDragStart={(event) => onDragHandler(event, id)}
      type={type}
    >
      <p onClick={clearTodo}>{text}</p>
      {/* <button>수정</button> */}
      <button onClick={deleteTodo}>삭제</button>
    </TodoItemUI>
  );
};

export default TodoItem;

const TodoItemUI = styled.div<{ type: string }>`
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  border-top: 0.5px solid var(--font-line-color);
  border-bottom: 0.5px solid var(--font-line-color);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s;

  p {
    width: 80%;
    text-decoration: ${(props) =>
      props.type === 'clear' ? 'line-through' : 'none'};
  }
  &:hover {
    height: 40px;
    line-height: 40px;
    transition: all 0.3s;
  }
  button {
    cursor: pointer;
  }
`;
