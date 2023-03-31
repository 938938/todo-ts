import React from 'react';
import styled from 'styled-components';

const ListTitleUI: React.FC<{ children: React.ReactNode; type: string }> = (
  props
) => {
  // const type = 'var(--point-color)';
  return <ListTitle type={props.type}>{props.children}</ListTitle>;
};

export default ListTitleUI;

const ListTitle = styled.p<{ type: string }>`
  border-top: 1px solid var(--font-line-color);
  border-bottom: 1px solid var(--font-line-color);
  height: 30px;
  background-color: ${(props) => (props.type ? props.type : '')};
`;
