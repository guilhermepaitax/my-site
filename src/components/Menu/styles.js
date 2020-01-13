import styled, { keyframes } from 'styled-components';

import Avatar from '~/assets/avatar.jpg';

const zoom = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const slideBottom = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 30%;
  height: 100%;
  background: linear-gradient(to bottom, #eff1ff, #f2f1f9);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 60px 90px;

  > div {
    display: flex;
    align-items: center;

    div {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #bac4d8;
      animation: ${zoom} 0.6s ease;
      background-image: url(${Avatar});
      background-size: cover;
      background-position: center;
    }

    h2 {
      color: #202020;
      margin-left: 20px;
      animation: ${slideRight} 0.7s ease;

      span {
        color: #e4e8f3;
        font-size: 14px;
      }
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    margin-top: 60px;
    width: 225px;
    animation: ${slideBottom} 0.8s ease;
  }
`;

export const LinkMenu = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: ${props => (props.selected ? '#5157F1' : '#c6c8dc')};
  cursor: pointer;
  transition: all 0.2s ease-out;

  span {
    margin-left: 15px;
    font-size: 18px;
    font-weight: 500;
  }

  &:hover {
    color: ${props => (props.selected ? '#5157F1' : '#9da2af')};
  }
`;
