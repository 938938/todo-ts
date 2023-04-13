import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewTodo from '../components/NewTodo';
import Progress from '../components/Progress';
import TodoList from '../components/TodoList';
import { RootState } from '../store/store';
import { add, set } from '../store/todoSlice';

const baseData = [
  {
    id: 0,
    text: '임시 할 일 목록 1',
    type: 'clear',
  },
  {
    id: 1,
    text: '임시 할 일 목록 2',
    type: 'important',
  },
  {
    id: 2,
    text: '임시 할 일 목록 3',
    type: 'normal',
  },
];

const Main = () => {
  const dispatch = useDispatch();
  const todoData = useSelector((state: RootState) => {
    return state.todo;
  });
  const importantData = useSelector((state: RootState) => {
    return state.todo.filter((ele) => ele.type === 'important');
  });
  const normalData = useSelector((state: RootState) => {
    return state.todo.filter((ele) => ele.type === 'normal');
  });
  const clearData = useSelector((state: RootState) => {
    return state.todo.filter((ele) => ele.type === 'clear');
  });

  const typelist = [
    { type: 'important', title: '중요한 일', data: importantData },
    { type: 'normal', title: '해야할 일', data: normalData },
    { type: 'clear', title: '완료한 일', data: clearData },
  ];

  const getData = async () => {
    // try {
    //   const data = await fetch('http://localhost:3001/data')
    //     .then((res) => {
    //       return res.json();
    //     })
    //     .then((json) => {
    //       dispatch(set(json));
    //     });
    //   return data;
    // } catch (e) {
    //   return e;
    // }
    dispatch(set(baseData));
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   dataSort();
  // }, [todoData]);

  const addTodoHandler = (text: string) => {
    const newData = {
      id: todoData.length,
      text: text,
      type: 'normal',
    };
    // fetch('http://localhost:3001/data', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(newData),
    // }).then((response) => response.json());
    dispatch(add(newData));
  };
  return (
    <div>
      {typelist.map((list) => (
        <TodoList
          key={list.type}
          type={list.type}
          title={list.title}
          data={list.data}
        />
      ))}
      <NewTodo addTodo={addTodoHandler} />
      <Progress data={todoData} clear={clearData} />
    </div>
  );
};

export default Main;
