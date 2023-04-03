import React from 'react';
import styled from 'styled-components';

const TodoItem: React.FC<{
  text: string;
  id: number;
  deleteTodo: () => void;
  onDragHandler: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
}> = ({ text, id, deleteTodo, onDragHandler }) => {
  return (
    <TodoItemUI
      draggable={true}
      onDragStart={(event) => onDragHandler(event, id)}
    >
      <p>{text}</p>
      <button>수정</button>
      <button onClick={deleteTodo}>삭제</button>
    </TodoItemUI>
  );
};

export default TodoItem;

const TodoItemUI = styled.div`
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding: 0 20px;
  border-top: 0.5px solid var(--font-line-color);
  border-bottom: 0.5px solid var(--font-line-color);
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  p {
    width: 80%;
  }
  &:hover {
    background-color: beige;
  }
`;
