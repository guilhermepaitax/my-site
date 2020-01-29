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

const changeTheme = (active, theme) => {
  if (active === 'secundary')
    return `linear-gradient(to bottom right, ${theme.bg.secundary}, #ffffff 20%)`;
  if (active === 'dark')
    return `linear-gradient(to bottom right, ${theme.bg.dark}, #ffffff 20%)`;
  return `linear-gradient(to bottom right, ${theme.bg.primary}, #ffffff 20%)`;
};

export const Container = styled.div`
  width: 30%;
  height: 100%;
  background: ${props => changeTheme(props.themeActive, props.theme)};
  padding: 60px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  @media (max-width: 1330px) {
    width: 27%;
  }

  @media (max-width: 1060px) {
    width: 10%;
  }

  @media (max-width: 910px) {
    display: none;
  }
`;

export const ViewEdit = styled.div`
  width: 100%;
  min-height: 50px;
  background: #fff;
  box-shadow: 2px 5px 10px 0px rgba(93, 96, 146, 0.05);
  border-radius: 8px;
  animation: ${zoom} 0.6s ease;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 10px;

  p {
    margin-left: auto;
  }

  @media (max-width: 1557px) {
    padding: 15px 13px;
    justify-content: center;
    width: 265px;
    text-align: center;

    p {
      margin: 10px 0 0 0;
    }
  }

  @media (max-width: 1060px) {
    display: none;
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
