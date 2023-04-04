import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoList: React.FC<{
  type: string;
  title: string;
  data: { id: number; text: string }[];
  deleteTodo: (id: number) => void;
  clearTodo: (id: number) => void;
  onDropHandler: (event: React.DragEvent<HTMLDivElement>, type: string) => void;
  overDropHandler: (event: React.DragEvent<HTMLDivElement>) => void;
  onDragHandler: (event: React.DragEvent<HTMLDivElement>, id: number) => void;
}> = ({
  type,
  title,
  data,
  deleteTodo,
  clearTodo,
  onDropHandler,
  overDropHandler,
  onDragHandler,
}) => {
  const [typeColor, setTypeColor] = useState('');
  const [open, setOpen] = useState(false);
  const openHandler = () => {
    setOpen((prev) => !prev);
  };
  const colorHandler = (type: string) => {
    switch (type) {
      case 'important':
        return setTypeColor('var(--point-color)');
      case 'default':
        return setTypeColor('var(--bg-color)');
      case 'clear':
        return setTypeColor('var(--extra-color)');
      default:
        return setTypeColor('');
    }
  };
  /**
   * onDrop : 대상이 드랍되면 이벤트가 발생 합니다.
   * onDragEnter : 드래그한 대상이 드랍영역에 다다르면 이벤트가 발생 합니다.
   * onDragLeave : 드래그한 대상이 드랍하지 않고 떠나는 경우 이벤트가 발생 합니다.
   * onDragOver : 드래그 대상이 드랍영역에 오버(over)하는 경우 발생 합니다.
   */
  useEffect(() => {
    colorHandler(type);
  }, []);
  return (
    <TodoListUI
      onDragOver={overDropHandler}
      onDrop={(event) => onDropHandler(event, type)}
    >
      <ListTitle type={typeColor} onClick={openHandler}>
        {title}
      </ListTitle>
      <div className={open ? 'listbox open' : 'listbox'}>
        {data.length ? (
          <>
            {data.map((todo) => (
              <TodoItem
                key={todo.id}
                text={todo.text}
                id={todo.id}
                deleteTodo={deleteTodo.bind(null, todo.id)}
                clearTodo={clearTodo.bind(null, todo.id)}
                onDragHandler={onDragHandler}
              />
            ))}
          </>
        ) : (
          <p>현재 해당되는 할 일이 존재하지 않습니다.</p>
        )}
      </div>
    </TodoListUI>
  );
};

export default TodoList;

const TodoListUI = styled.div`
  margin: 5px 0;
  .listbox {
    height: 1px;
    overflow: scroll;
    border-bottom: 1px solid var(--font-line-color);
    transition: all 0.4s;
    -ms-overflow-style: none;
  }
  .listbox::-webkit-scrollbar {
    display: none;
  }
  .listbox.open {
    background-color: transparent;
    height: 140px;
    transition: all 0.4s;
  }
`;

const ListTitle = styled.div<{ type: string }>`
  border-top: 1px solid var(--font-line-color);
  height: 30px;
  line-height: 30px;
  text-align: center;
  cursor: pointer;
  background-color: ${(props) => (props.type ? props.type : '')};
`;

const ListBox = styled.div<{ open: boolean }>`
  height: ${(props) => (props.open ? '100%' : '1px')};
  max-height: 140px;
  overflow: scroll;
  border-bottom: 1px solid var(--font-line-color);
  transition: all 0.4s;
`;
