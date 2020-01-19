import styled from 'styled-components';

import PlanetMountains from '~/assets/computer.png';

export const Container = styled.div`
  width: 40%;
  height: 100%;
  background: #ffffff;
  border-right: 1px solid #caccdc1c;
  padding: 60px 50px;
`;

export const About = styled.section`
  h1 {
    color: #202020;
    font-size: 34px;
  }
`;

export const Title = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;

  p {
    color: #202020;
    font-size: 16px;
    font-weight: 400;
    max-width: 500px;
    line-height: 1.4;

    a {
      color: #8c91ff;
      font-weight: 500;
    }
  }
`;

export const Index = styled.div`
  display: flex;
  justify-content: center;
  flex-shrink: 0;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #525afb;
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-right: 20px;
`;

export const ImageCard = styled.div`
  margin-top: 50px;
  background: linear-gradient(to right bottom, #ceceda00, #292929),
    url(${PlanetMountains});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 220px;
  border-radius: 8px;
  transition: all 0.4s ease-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 10px 15px 0 rgba(32, 33, 36, 0.28);
  }
`;
