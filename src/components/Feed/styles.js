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

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 40%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #ffffff;
  border-right: 1px solid #caccdc1c;
  border-left: 1px solid #caccdc1c;
  padding: 60px 50px;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const About = styled.section`
  h1 {
    color: #202020;
    font-size: 34px;
    animation: ${fade} 0.6s ease;
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
    animation: ${fade} 0.6s ease;

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
  background: ${props => {
    if (props.themeActive === 'secundary') return props.theme.colors.secundary;
    if (props.themeActive === 'dark') return props.theme.colors.dark;
    return props.theme.colors.primary;
  }};
  color: white;
  font-weight: 500;
  font-size: 18px;
  margin-right: 20px;
  animation: ${zoom} 0.6s ease;
  transition: background 0.2s ease;
`;

export const ViewEdit = styled.div`
  margin-top: 60px;
  width: 100%;

  > div {
    width: 73%;
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

export const SocialLinks = styled.div`
  margin-top: 50px;
  width: 100%;
  display: flex;
  justify-content: center;

  a {
    color: #8492a6;
    transition: all 0.2s ease;

    svg {
      margin: 0 15px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const AboutText = styled.article`
  margin-top: 60px;

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 2.3;
    animation: ${fade} 0.6s ease;
    color: #a6a8b9;
    text-align: justify;
  }
`;

export const AcademicEducation = styled.div`
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;

  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const AcademicTitle = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }
`;

export const AcademicInfo = styled.div`
  margin-left: 16px;
  border-left: 1px solid #dee0f3;
  padding: 20px;

  p {
    line-height: 1.5;
    text-align: justify;

    max-width: 400px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  span {
    margin-top: 15px;
    display: block;
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

export const Knowledge = styled.div`
  h1 {
    margin-top: 70px;
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
