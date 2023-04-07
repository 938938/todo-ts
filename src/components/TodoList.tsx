import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Todo } from '../models/todo';
import TodoItem from './TodoItem';

const TodoList: React.FC<{
  type: string;
  title: string;
  data: { id: number; text: string }[];
  setData: React.Dispatch<React.SetStateAction<Todo[]>>;
  dataSort: () => void;
}> = ({ type, title, data, setData, dataSort }) => {
  const [typeColor, setTypeColor] = useState('');
  const [open, setOpen] = useState(false);
  const [drag, setDrag] = useState(false);
  const openHandler = () => {
    setOpen((prev) => !prev);
  };

  const deleteTodoHandler = async (id: number) => {
    await fetch(`http://localhost:3001/data/${id}`, {
      method: 'DELETE',
    });
    setData((prev) => prev.filter((data) => data.id !== id));
  };

  const clearTodoHandler = async (id: number) => {
    const targetData = data.filter((ele) => ele.id === id);
    await fetch(`http://localhost:3001/data/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...targetData[0], type: 'clear' }),
    }).then((response) => response.json());
    setData((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, type: 'clear' } : todo))
    );
    dataSort();
  };

  const onDragHandler = (
    event: React.DragEvent<HTMLDivElement>,
    id: number
  ) => {
    event.dataTransfer.setData('id', `${id}`);
  };
  const onDropHandler = async (
    event: React.DragEvent<HTMLDivElement>,
    type: string
  ) => {
    event.preventDefault();
    setDrag(false);
    const dataId = event.dataTransfer.getData('id');
    const data = await fetch(
      `http://localhost:3001/data/${Number(dataId)}`
    ).then((res) => {
      return res.json();
    });
    fetch(`http://localhost:3001/data/${dataId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...data, type: type }),
    }).then((response) => response.json());
    setData((prev) =>
      prev.map((todo) =>
        todo.id === Number(dataId) ? { ...todo, type: type } : todo
      )
    );
    dataSort();
  };
  const overDropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(true);
  };
  const leaveDragHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDrag(false);
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
      onDragLeave={leaveDragHandler}
      onDrop={(event) => onDropHandler(event, type)}
    >
      <ListTitle
        typeColor={typeColor}
        type={type}
        drag={drag}
        onClick={openHandler}
      >
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
                type={type}
                deleteTodo={deleteTodoHandler.bind(null, todo.id)}
                clearTodo={clearTodoHandler.bind(null, todo.id)}
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

const ListTitle = styled.div<{
  typeColor: string;
  type: string;
  drag: boolean;
}>`
  border-top: 1px solid var(--font-line-color);
  box-shadow: ${(props) =>
    props.drag ? '0 0 0 3px var(--font-line-color) inset' : ''};
  transition: all 0.3s;
  height: 30px;
  line-height: 30px;
  text-align: center;
  background-color: ${(props) => (props.typeColor ? props.typeColor : '')};
  color: ${(props) =>
    props.type === 'clear' ? 'var(--bg-color)' : 'var(--font-line-color'};
`;
