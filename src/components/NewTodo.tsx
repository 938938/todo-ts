import React, { FormEvent, useRef } from 'react';
// import { useDispatch } from 'react-redux';
import styled from 'styled-components';

const NewTodo: React.FC<{ addTodo: (text: string) => void }> = ({
  addTodo,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  // const dispatch = useDispatch();
  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    const text = inputRef.current!.value;
    addTodo(text);
    inputRef.current!.value = '';
  };
  return (
    <NewTodoUI onSubmit={submitHandler}>
      <div className='input'>
        <label>새로운 할 일</label>
        <input type='text' ref={inputRef} />
      </div>
      {/* <label>
        중요
        <input type='checkbox' className='check' />
      </label> */}
      <button type='submit'>추가</button>
    </NewTodoUI>
  );
};

export default NewTodo;

const NewTodoUI = styled.form`
  border-top: 1px solid var(--font-line-color);
  border-bottom: 1px solid var(--font-line-color);
  /* border: 2px solid red; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  box-sizing: border-box;

  .input {
    width: 80%;
  }
  label {
    font-size: 0.8rem;
    margin-left: 10px;
  }
  input {
    font-size: 1rem;
    width: 100%;
    height: 50%;
    padding: 0 10px;
    box-sizing: border-box;
    border: 0;
    border-bottom: 1px solid var(--font-line-color);
    outline: none;
  }
  .check {
    width: 30px;
  }
  button {
    width: 15%;
    height: 100%;
    background-color: var(--point-color);
    transition: all 0.3s;
    &:hover {
      box-shadow: 0 0 0 3px var(--font-line-color) inset;
      transition: all 0.3s;
    }
    &:active {
      background-color: var(--line-color);
      transition: all 0.3s;
    }
  }
`;
