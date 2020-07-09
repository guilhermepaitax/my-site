import styled from 'styled-components';

export const Container = styled.div`
  width: 40%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #ffffff;
  border-right: 1px solid #caccdc1c;
  border-left: 1px solid #caccdc1c;
  padding: 0 50px 60px 50px;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 1330px) {
    width: 46%;
  }

  @media (max-width: 1060px) {
    width: 63%;
  }

  @media (max-width: 910px) {
    width: 100%;
  }

  @media (max-width: 425px) {
    padding: 0 30px 60px 30px;
  }
`;
