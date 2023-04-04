import React from 'react';
import styled from 'styled-components';

const Progress: React.FC<{
  data: { id: number; text: string }[];
  clear: { id: number; text: string }[];
}> = ({ data, clear }) => {
  const percent = (clear.length / data.length) * 100;
  return (
    <ProgressUI>
      <Bar percent={percent}>{Math.floor(percent)}% 완료</Bar>
    </ProgressUI>
  );
};

export default Progress;

const ProgressUI = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
`;
const Bar = styled.p<{ percent: number }>`
  width: ${(props) => (props.percent ? `${props.percent}%` : '0%')};
  height: 18px;
  background-color: var(--point-color);
  font-size: 0.8rem;
  padding: 5px;
  color: var(--bg-color);
  box-sizing: border-box;
  transition: all 0.5s;
`;
