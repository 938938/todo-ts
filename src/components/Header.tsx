import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
    <HeaderUI>
      <h1>할 일 목록</h1>
    </HeaderUI>
  );
};

export default Header;

const HeaderUI = styled.div`
  height: 50px;
  border-top: 1px solid var(--font-line-color);
  border-bottom: 1px solid var(--font-line-color);
  line-height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  h1 {
    font-size: var(--title);
  }
`;
