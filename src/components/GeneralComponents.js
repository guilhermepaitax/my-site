import styled from 'styled-components';

import { fade, zoom } from '~/styles/animations';

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
