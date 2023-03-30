import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import NewTodo from './components/NewTodo';
import TodoList from './components/TodoList';

/**
 * 사용하고 싶은 거
 * 드래그 앤 드롭 < 어디다가?
 * 이메일 로그인...? < 굳이? < 하려면 로그인 페이지, 로그아웃 기능, 프로필? 이 필요? 함? 근데 굳이????
 * 투두 - (입력, 수정, 삭제 기능 필요), 중요도 기능
 * 테마(다크모드 혹은 테마 컬러)
 * 간단하게 깔끔하게.............를........?
 * 진행도 < 아래에
 * 볼록한 효과........... 완료하면 꾹 들어간 효과......
 * 옵션창
 * ㄴ테마, 전부 삭제,
 * 날짜 표시랑 기한 설정...? < 이건 좀 시간이 걸릴 듯
 * 데이터 저장은 일단 local?
 * 중요도 체크를 따로? 박스를?
 * 박스 세개.....?
 * 다 한 거는 따로 박스(이건 열리도록)
 */

function App() {
  return (
    <AppUI>
      <Header />
      <TodoList />
      <NewTodo />
    </AppUI>
  );
}

export default App;

const AppUI = styled.div`
  width: 400px;
  height: 700px;
  border: 1px solid var(--font-line-color);
`;
