import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Main from './pages/Main';
import Setting from './pages/Setting';

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

// 데이터가 각자 어디서 필요한지 생각하기!!!!!!
function App() {
  return (
    <AppUI>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/set' element={<Setting />} />
      </Routes>
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
