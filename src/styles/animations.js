import { keyframes } from 'styled-components';

export const zoom = keyframes`
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

export const zoomUp = keyframes`
  from {
    transform: scale(0);
    opacity: 0;
  }

  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const slideRight = keyframes`
  from {
    transform: translateX(-100px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

export const slideBottom = keyframes`
  from {
    transform: translateY(200px);
    opacity: 0;
  }

  to {
    transform: translateY(0px);
    opacity: 1;
  }
`;
