import styled, { css } from 'styled-components';

import { fade } from '~/styles/animations';

export const Container = styled.div`
  padding-top: 70px;

  h1 {
    color: #202020;
    font-size: 34px;
    animation: ${fade} 0.6s ease;
  }

  > p {
    margin-top: 60px;
    font-size: 16px;
    font-weight: 400;
    line-height: 2.3;
    animation: ${fade} 0.6s ease;
    color: #a6a8b9;
    text-align: justify;
  }
`;

export const Carousel = styled.div`
  margin-top: 60px;
  width: 100%;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Project = styled.div`
  border-radius: 8px;
  background-image: url(${props => props.background});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
  width: 100%;
  height: 240px;
  overflow: hidden;
  position: relative;
  transition: all 0.6s ease;

  &:hover {
    background-size: 110%;

    button {
      opacity: 1;
    }
  }

  > div {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    opacity: 0;
    transition: all 0.5s ease-out;

    span {
      color: #fff;
    }

    &:hover {
      opacity: 1;
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 50%;
  transform: translateY(50%);
  border: 0;
  background: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  backdrop-filter: blur(20px);
  opacity: 0;
  transition: opacity 0.5s ease, transform 0.1s ease;

  ${props => {
    if (props.side === 'next') {
      return css`
        right: 15px;
      `;
    }
    return css`
      left: 15px;
    `;
  }}

  &:hover {
    transform: translateY(50%) scale(1.1);
  }
`;
