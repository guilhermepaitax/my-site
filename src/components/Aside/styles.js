import styled, { keyframes } from 'styled-components';

const zoom = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }

  80% {
    transform: scale(1.1);
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 30%;
  height: 100%;
  background: linear-gradient(to bottom right, #f0f5fe, #ffffff 20%);
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ViewEdit = styled.div`
  width: 100%;
  height: 50px;
  background: #fff;
  box-shadow: 2px 5px 10px 0px rgba(93, 96, 146, 0.05);
  border-radius: 8px;
  animation: ${zoom} 0.6s ease;
  display: flex;
  align-items: center;
  padding: 0 10px;

  p {
    margin-left: auto;
  }
`;

export const Color = styled.div`
  width: 32px;
  height: 32px;
  background: ${props => props.color};
  border-radius: 6px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    transform: scale(1.08);
  }
`;
