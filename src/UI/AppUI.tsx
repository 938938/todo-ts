import React from 'react';
import styled from 'styled-components';

const AppUI: React.FC<{ children: React.ReactNode }> = (props) => {
  return <App>{props.children}</App>;
};

export default AppUI;

const App = styled.div``;
