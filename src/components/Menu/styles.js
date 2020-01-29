import styled from 'styled-components';
import { zoomUp, slideRight, slideBottom } from '~/styles/animations';
import Avatar from '~/assets/avatar.jpg';

const changeTheme = (active, theme) => {
  if (active === 'secundary')
    return `linear-gradient(to bottom left, ${theme.bg.secundary}, #ffffff 40%)`;
  if (active === 'dark')
    return `linear-gradient(to bottom left, ${theme.bg.dark}, #ffffff 40%)`;
  return `linear-gradient(to bottom left, ${theme.bg.primary}, #ffffff 40%)`;
};

export const Container = styled.div`
  width: 30%;
  height: 100%;

  background: linear-gradient(to bottom left, #f0f5fe, #ffffff 40%);
  background: ${props => changeTheme(props.themeActive, props.theme)};
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 60px 90px;

  @media (max-width: 1330px) {
    width: 27%;
    padding: 60px 50px;
  }

  @media (max-width: 980px) {
    padding: 60px 35px;
  }

  @media (max-width: 910px) {
    display: none;
  }

  > div {
    display: flex;
    align-items: center;

    div {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      background: #bac4d8;
      animation: ${zoomUp} 0.6s ease;
      background-image: url(${Avatar});
      background-size: cover;
      background-position: center;
      flex-shrink: 0;

      @media (max-width: 980px) {
        display: none;
      }
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

    @media (max-width: 1160px) {
      width: 180px;
    }
  }
`;

export const LinkMenu = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  color: ${props => {
    if (props.selected) {
      if (props.themeActive === 'secundary')
        return props.theme.colors.secundary;
      if (props.themeActive === 'dark') return props.theme.colors.dark;
      return props.theme.colors.primary;
    }
    return '#c6c8dc';
  }};
  cursor: pointer;
  transition: all 0.2s ease-out;

  span {
    margin-left: 15px;
    font-size: 18px;
    font-weight: 500;
  }

  &:hover {
    color: ${props => {
      if (props.selected) {
        if (props.themeActive === 'secundary')
          return props.theme.colors.secundary;
        if (props.themeActive === 'dark') return props.theme.colors.dark;
        return props.theme.colors.primary;
      }
      return '#9da2af';
    }};
  }
`;
