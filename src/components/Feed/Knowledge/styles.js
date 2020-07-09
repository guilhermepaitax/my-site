import styled from 'styled-components';

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

export const DashedBox = styled.div`
  margin-top: 60px;
  width: 100%;
  padding: 30px 30px 20px 30px;
  border: 1.5px dashed #dee0f3;
  border-radius: 8px;
  display: flex;
  flex-wrap: wrap;

  span {
    background: #e7e9ed;
    padding: 6px 12px;
    border-radius: 14px;
    margin: 0 10px 10px 0;
  }
`;

export const CardTechs = styled.div`
  margin-top: 50px;
  width: 100%;
  height: 175px;
  border-radius: 8px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  border: 1px solid #eff2f7;
  transition: all 0.2s ease;
  padding: 36px 34px;
  position: relative;
  background: linear-gradient(to right bottom, #282c34, #20232a);

  @media (max-width: 520px) {
    height: max-content;
    padding: 36px 25px;

    p {
      line-height: 1.8;
    }
  }

  h2 {
    z-index: 2;
    color: #fff;
    transition: all 0.8s ease;
    animation: ${fade} 0.6s ease;
  }

  p {
    margin-top: 10px;
    z-index: 2;
    color: #eff2f7;
  }

  a {
    position: absolute;
    bottom: -18px;
    right: 20px;
    background: #fff;
    color: #282c34;
    font-size: 15px;
    padding: 10px 22px;
    border-radius: 22px;
    box-shadow: 0 1rem 3rem rgba(31, 45, 61, 0.125);
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.05);
    }
  }
`;
