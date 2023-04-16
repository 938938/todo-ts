import React from 'react';
import styled, { keyframes } from 'styled-components';
import SETTING from '../Images/setting.png';

const Header = () => {
  return (
    <HeaderUI>
      <h1>할 일 목록</h1>
      <button>
        <img src={SETTING} alt='세팅 버튼' />
      </button>
    </HeaderUI>
  );
};

export default Header;

const Rotation = keyframes`
    0% {
      transform:rotate(0deg);
    }
    25% {
      transform:rotate(90deg);
    }
    50% {
      transform:rotate(180deg);
    }
    75% {
      transform:rotate(240deg);
    }
    100% {
      transform:rotate(360deg);
    }
  `;

const HeaderUI = styled.div`
  height: 50px;
  border-top: 1px solid var(--font-line-color);
  border-bottom: 1px solid var(--font-line-color);
  line-height: 50px;
  padding: 0 20px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: var(--title);
  }
  button {
    width: 40px;
    height: 40px;
    animation: ${Rotation} 5s linear infinite;
  }
  img {
    width: 40px;
    height: 40px;
    transition: all 0.5s;
    &:hover {
      transform: scale(1.1);
      transition: all 0.5s;
    }
  }
`;
