import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import Progress from './components/Progress';
import TodoList from './components/TodoList';
// import { Todo } from './models/todo';
import { RootState } from './store/store';
import { add, set } from './store/todoSlice';

/**
 * 사용하고 싶은 거
 * 드래그 앤 드롭 < 어디다가?
 * 투두 - (입력, 수정, 삭제 기능 필요), 중요도 기능
 * 테마(다크모드 혹은 테마 컬러)
 * 진행도 < 아래에
 * 중요도 체크를 따로? 박스를?
 * 박스 세개.....?
 * 다 한 거는 따로 박스(이건 열리도록)
 * 당장 필요한 것
 * CRUD
 *
 * 드래그앤드롭
 * 상태 : 중요, 보통, 완결
 * 완결 > 에서 다시 돌리는 경우는?
 */

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

// 데이터가 각자 어디서 필요한지 생각하기!!!!!!
function App() {
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
    <AppUI>
      <Header />
      {typelist.map((list) => (
        <TodoList
          key={list.type}
          type={list.type}
          title={list.title}
          data={list.data}
          // setData={setData}
          // dataSort={dataSort}
        />
      ))}
      <NewTodo addTodo={addTodoHandler} />
      <Progress data={todoData} clear={clearData} />
    </AppUI>
  );
}

export default App;

const AppUI = styled.div`
  width: 100vw;
  max-width: 600px;
  height: 700px;
  /* border: 1px solid var(--font-line-color); */
`;
