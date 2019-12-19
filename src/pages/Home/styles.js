import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
`;

export const InitialSection = styled.section`
  padding-top: 147.188px;
  padding-bottom: 12rem;
  min-height: 880px;
  overflow-x: hidden;
  background: transparent;
  position: relative;
  z-index: 0;
  display: flex;
`;

export const BlockGradient = styled.div`
  background: linear-gradient(50deg, #8f94fb 0, #4e54c8 100%);
  position: absolute;
  top: -40%;
  left: -1rem;
  width: 130%;
  height: 105%;
  transform: rotate(-7deg);
  border-bottom-left-radius: 3rem;
  z-index: -2;
`;

export const LeftContent = styled.div`
  width: 50%;
  height: 100%;
`;

export const RightContent = styled.div`
  width: 50%;
  height: 100%;

  img {
    max-width: 95%;
  }
`;
