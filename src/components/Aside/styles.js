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
  position: relative;
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

export const WhatsApp = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: white;
  bottom: 30px;
  right: 30px;
  box-shadow: 2px 5px 10px 0px rgba(93, 96, 146, 0.09);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  cursor: pointer;
  animation: ${zoom} 0.6s ease;

  img {
    width: 38px;
    user-select: none;
  }

  &:hover {
    transform: scale(1.08);
  }
`;
