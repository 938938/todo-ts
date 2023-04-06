import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import Progress from './components/Progress';
import TodoList from './components/TodoList';
import { Todo } from './models/todo';

/**
 * 사용하고 싶은 거
 * 드래그 앤 드롭 < 어디다가?
 * 이메일 로그인...? < 굳이? < 하려면 로그인 페이지, 로그아웃 기능, 프로필? 이 필요? 함? 근데 굳이????
 * 투두 - (입력, 수정, 삭제 기능 필요), 중요도 기능
 * 테마(다크모드 혹은 테마 컬러)
 * 간단하게 깔끔하게.............를........?
 * 진행도 < 아래에
 * 옵션창
 * ㄴ테마, 전부 삭제,
 * 날짜 표시랑 기한 설정...? < 이건 좀 시간이 걸릴 듯
 * 데이터 저장은 일단 local?
 * 중요도 체크를 따로? 박스를?
 * 박스 세개.....?
 * 다 한 거는 따로 박스(이건 열리도록)
 * 당장 필요한 것
 * CRUD
 *
 * 드래그앤드롭
 * 데이터관리어캐해야함???????
 * 상태 : 중요, 보통, 완결
 * 상태... 하나로 다 관리가 가능한가
 * 완결 > 에서 다시 돌리는 경우는?
 * 근데 두개로 하면 감당이 되나 이게
 * 데이터를... 불러와서...
 * <ㅇ>
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
function App() {
  const [data, setData] = useState<Todo[]>(baseData);
  const [important, setImpotant] = useState<Todo[]>([]);
  const [clear, setClear] = useState<Todo[]>([]);
  const [normal, setNormal] = useState<Todo[]>([]);

  const typelist = [
    { type: 'important', title: '중요한 일', data: important },
    { type: 'normal', title: '해야할 일', data: normal },
    { type: 'clear', title: '완료한 일', data: clear },
  ];

  const dataSort = () => {
    const importantData = data.filter((ele) => ele.type === 'important');
    setImpotant(importantData);
    const clearData = data.filter((ele) => ele.type === 'clear');
    setClear(clearData);
    const normalData = data.filter((ele) => ele.type === 'normal');
    setNormal(normalData);
  };

  useEffect(() => {
    dataSort();
  }, [data]);

  const addTodoHandler = (text: string) => {
    const newData = {
      id: data.length,
      text: text,
      type: 'normal',
    };
    setData((prev) => [newData, ...prev]);
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
          setData={setData}
          dataSort={dataSort}
        />
      ))}
      <NewTodo addTodo={addTodoHandler} />
      <Progress data={data} clear={clear} />
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
